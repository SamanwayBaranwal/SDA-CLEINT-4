import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface Notice {
  id: number;
  title: string;
  date: string;
}

export const Events = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices');
        const data = await response.json();
        setNotices(data.slice(0, 5)); // Show only 5 latest notices
      } catch (error) {
        console.error('Error fetching notices:', error);
        toast({
          title: "Error loading notices",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [toast]);

  if (loading) {
    return null; // Don't show anything while loading
  }

  return (
    <>
      {notices.length > 0 && (
        <div className="fixed top-[80px] right-0 z-40 w-72 md:w-80 lg:w-96 bg-white/95 backdrop-blur-sm shadow-lg rounded-l-xl overflow-hidden transition-transform duration-300 transform hover:translate-x-0 translate-x-[calc(100%-2rem)] hover:shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#8B1D47] to-[#ea384c] p-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-white animate-bounce" />
            <h2 className="text-lg font-semibold text-white">NOTICE & CIRCULARS</h2>
          </div>

          {/* Notices Container */}
          <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="p-4 border-b border-gray-200 hover:bg-blue-50/50 transition-colors duration-200"
              >
                <h3 className="font-medium text-gray-800 mb-1">{notice.title}</h3>
                <p className="text-sm text-gray-500">{notice.date}</p>
              </div>
            ))}

            {/* View All Button */}
            <button
              onClick={() => navigate('/notices')}
              className="w-full p-4 text-center text-[#8B1D47] hover:bg-red-50 transition-colors duration-200 font-medium"
            >
              View All Notices
            </button>
          </div>

          {/* Pull Tab */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#8B1D47] text-white p-2 rounded-l-lg cursor-pointer shadow-md transform -translate-x-full hover:bg-[#ea384c] transition-colors">
            <Bell className="h-4 w-4" />
          </div>
        </div>
      )}
    </>
  );
};
