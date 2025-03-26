import { Download, Bell, Calendar, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from './ui/scroll-area';
import { useNavigate } from 'react-router-dom';

interface Notice {
  id: number;
  title: string;
  date: string;
  pdfPath: string;
  isNew?: boolean;
}

const notices: Notice[] = [
  {
    id: 2,
    title: "Annual Exam 2024-25 Time Table",
    date: "March 15, 2024",
    pdfPath: "/Notice/Annual_Exam_2024.pdf",
    isNew: true
  },
  {
    id: 3,
    title: "Role of Regular Schooling in Student Success",
    date: "February 13, 2025",
    pdfPath: "/Notice/Press_Release_Schooling_Role_13022025.pdf",
    isNew: true
  },
  {
    id: 4,
    title: "Class 9th Internal-Assessment",
    date: "February 17, 2025",
    pdfPath: "/Notice/Internal Assessment- IX 2024-25.pdf",
    isNew: true
  }
];

export const NoticesDrawer = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const animate = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    
    setScrollPosition((prevPos) => {
      let newPos = prevPos + 0.5; // Adjust speed here (smaller = slower)
      if (newPos >= scrollHeight - clientHeight) {
        newPos = 0;
      }
      return newPos;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start animation after a short delay to ensure content is loaded
    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 1000);
    
    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full bg-[#669BBC] shadow-lg">
      {/* Notice Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-[#003049] to-[#003049]/90 shadow-lg">
        <h2 className="text-white font-bold text-lg flex items-center">
          <Bell className="w-5 h-5 mr-2 text-yellow-100 animate-pulse" />
          NOTICE & CIRCULARS
        </h2>
      </div>

      <div className="flex flex-col h-[calc(100%-3rem)]">
        {/* Animated Admission Notice - Always Visible */}
        <div className="p-4 bg-white/10">
          <div 
            onClick={() => navigate('/admission')}
            className="relative bg-white rounded-lg border-l-4 border-[#003049] p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-[#003049] rounded-full animate-pulse opacity-20"></div>
                <img 
                  src="/favicon.png"
                  alt="SD Academy Logo"
                  className="w-full h-full object-contain relative z-10 animate-bounce"
                  style={{ animationDuration: '2s' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-[#003049] mb-1 flex items-center">
                  Admissions Open 2025-2026
                  <span className="ml-2 inline-block px-2 py-0.5 text-xs font-medium bg-[#003049] text-white rounded-full animate-pulse">
                    New
                  </span>
                </h3>
                <p className="text-sm text-gray-600">
                  Join SD Academy for academic excellence and holistic development
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#003049] transform transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>

        {/* Scrolling Notices */}
        <div className="flex-1 overflow-hidden relative">
          <div 
            className="flex flex-col gap-3 animate-scroll-up"
            style={{ 
              animation: 'scroll-up 15s linear infinite',
              paddingTop: '1rem',
              paddingBottom: '1rem'
            }}
          >
            {/* Original notices */}
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="p-4 mx-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 border-l-4 border-[#003049] hover:shadow-md group"
              >
                <a
                  href={notice.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#003049] group-hover:text-[#003049]/90 transition-colors">
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-[#003049] text-white rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-900">
                      <Calendar className="w-4 h-4" />
                      {notice.date}
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-[#003049] transition-colors" />
                </a>
              </div>
            ))}
            
            {/* Duplicate notices for seamless loop */}
            {notices.map((notice) => (
              <div
                key={`${notice.id}-duplicate`}
                className="p-4 mx-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 border-l-4 border-[#003049] hover:shadow-md group"
              >
                <a
                  href={notice.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#003049] group-hover:text-[#003049]/90 transition-colors">
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-[#003049] text-white rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-900">
                      <Calendar className="w-4 h-4" />
                      {notice.date}
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-[#003049] transition-colors" />
                </a>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for Smooth Transitions */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#669BBC] via-[#669BBC] to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#669BBC] via-[#669BBC] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};