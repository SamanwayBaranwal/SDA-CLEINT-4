import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AdmissionBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#003049] text-white py-1.5 overflow-hidden border-b border-[#00304930] sticky top-0 z-50">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <div className="flex items-center space-x-8 mx-4">
            <div className="inline-flex items-center space-x-4">
              <span className="text-yellow-300 font-bold">Admissions Open 2025-2026</span>
              <span className="text-gray-300">|</span>
              <span className="text-white">Join SD Academy for academic excellence</span>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => navigate('/admission')}
                className="inline-flex items-center px-4 py-1 bg-yellow-500 text-[#003049] rounded-full 
                  hover:bg-yellow-400 transition-colors text-sm font-medium group"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 animate-marquee whitespace-nowrap flex items-center" style={{ left: '100%' }}>
          <div className="flex items-center space-x-8 mx-4">
            <div className="inline-flex items-center space-x-4">
              <span className="text-yellow-300 font-bold">Admissions Open 2025-2026</span>
              <span className="text-gray-300">|</span>
              <span className="text-white">Join SD Academy for academic excellence</span>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => navigate('/admission')}
                className="inline-flex items-center px-4 py-1 bg-yellow-500 text-[#003049] rounded-full 
                  hover:bg-yellow-400 transition-colors text-sm font-medium group"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
