import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AdmissionBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-2.5 overflow-hidden border-b border-blue-100 relative">
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
      <div className="flex items-center whitespace-nowrap animate-marquee">
        <div className="flex items-center mx-4 space-x-6">
          <div className="flex items-center">
            <span className="text-red-500 font-bold px-3 py-1 rounded-full bg-red-50 border border-red-200 animate-pulse">
              New
            </span>
            <span className="text-[#003049] font-semibold ml-3 text-lg">
              Admission open for session 2025-2026
            </span>
          </div>
          <button
            onClick={() => navigate('/enquiry')}
            className="px-5 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded-full 
                     flex items-center gap-1.5 hover:from-red-600 hover:to-red-700 transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-red-200/50 group"
          >
            Apply Now
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center mx-4 space-x-6">
          <div className="flex items-center">
            <span className="text-red-500 font-bold px-3 py-1 rounded-full bg-red-50 border border-red-200 animate-pulse">
              New
            </span>
            <span className="text-[#003049] font-semibold ml-3 text-lg">
              Admission open for session 2025-2026
            </span>
          </div>
          <button
            onClick={() => navigate('/enquiry')}
            className="px-5 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded-full 
                     flex items-center gap-1.5 hover:from-red-600 hover:to-red-700 transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-red-200/50 group"
          >
            Apply Now
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        {/* Third copy for extra smoothness */}
        <div className="flex items-center mx-4 space-x-6">
          <div className="flex items-center">
            <span className="text-red-500 font-bold px-3 py-1 rounded-full bg-red-50 border border-red-200 animate-pulse">
              New
            </span>
            <span className="text-[#003049] font-semibold ml-3 text-lg">
              Admission open for session 2025-2026
            </span>
          </div>
          <button
            onClick={() => navigate('/enquiry')}
            className="px-5 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded-full 
                     flex items-center gap-1.5 hover:from-red-600 hover:to-red-700 transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-red-200/50 group"
          >
            Apply Now
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
