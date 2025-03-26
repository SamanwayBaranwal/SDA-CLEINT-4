import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup has been shown before in this session
    const hasShownPopup = localStorage.getItem('hasShownAdmissionPopup');
    
    if (!hasShownPopup) {
      // Small delay to ensure smooth page load
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsLoaded(true);
        localStorage.setItem('hasShownAdmissionPopup', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded || !isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="relative max-w-md md:max-w-lg lg:max-w-xl w-full animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Popup Content */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/SD academy Admission open.jpeg"
            alt="Admission Open"
            className="w-full h-auto object-contain max-h-[80vh]"
            loading="eager"
          />
          
          {/* Call-to-action button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/enquiry');
              }}
              className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 