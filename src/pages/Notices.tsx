import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { FileText, Download, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Notice {
  id: number;
  title: string;
  date?: string;
  description?: string;
  time?: string;
  venue?: string;
  category?: string;
  imageUrl?: string;
  aspectRatio?: string;
  pdfUrl?: string;
  fileName?: string;
  isNew?: boolean;
  createdAt?: number;
}

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [scrollingNotices, setScrollingNotices] = useState<Notice[]>([]);

  useEffect(() => {
    // Load both regular notices and PDF notices
    const storedNotices = JSON.parse(localStorage.getItem('notices') || '[]');
    const storedScrollingNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    
    setNotices(storedNotices);
    setScrollingNotices(storedScrollingNotices);
  }, []);

  const handleDownloadPDF = (notice: Notice) => {
    if (notice.pdfUrl && notice.fileName) {
      const link = document.createElement('a');
      link.href = notice.pdfUrl;
      link.download = notice.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getImageClassName = (aspectRatio?: string) => {
    const baseClasses = "w-full object-cover rounded-lg";
    switch (aspectRatio) {
      case '16:9':
        return `${baseClasses} h-[calc(9/16*100%)]`;
      case '4:3':
        return `${baseClasses} h-[calc(3/4*100%)]`;
      case '1:1':
        return `${baseClasses} aspect-square`;
      case '9:16':
        return `${baseClasses} h-[calc(16/9*100%)]`;
      case '21:9':
        return `${baseClasses} h-[calc(9/21*100%)]`;
      default:
        return `${baseClasses} h-64`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6]">
          Notices & Announcements
        </h1>

        {/* PDF Notices Section */}
        {scrollingNotices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#003049]">Important Notices</h2>
            <div className="grid gap-4">
              {scrollingNotices.map((notice) => (
                <div 
                  key={notice.id}
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4
                           border border-purple-100 hover:border-purple-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{notice.title}</h3>
                        {notice.isNew && (
                          <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      {notice.fileName && (
                        <p className="text-sm text-gray-500 mt-1">{notice.fileName}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => handleDownloadPDF(notice)}
                  >
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Regular Notices Section */}
        {notices.length > 0 && (
          <div className="grid gap-6">
            {notices.map((notice) => (
              <div 
                key={notice.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 
                         border border-purple-100 hover:border-purple-200 transform hover:-translate-y-1"
              >
                {notice.imageUrl && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={notice.imageUrl} 
                      alt={notice.title}
                      className={`${getImageClassName(notice.aspectRatio)} hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                    {notice.title}
                  </h2>
                  {notice.category && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#F97316] to-[#FBBF24] text-white rounded-full text-sm font-medium shadow-sm">
                      {notice.category}
                    </span>
                  )}
                </div>
                
                {notice.description && (
                  <p className="text-gray-600 mb-4 leading-relaxed">{notice.description}</p>
                )}
                
                {(notice.date || notice.time || notice.venue) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-purple-50/50 p-4 rounded-lg">
                    {notice.date && (
                      <div className="flex items-center text-gray-700 gap-2">
                        <Calendar size={16} className="text-purple-600" />
                        <span className="font-medium">{notice.date}</span>
                      </div>
                    )}
                    {notice.time && (
                      <div className="flex items-center text-gray-700 gap-2">
                        <Clock size={16} className="text-purple-600" />
                        <span className="font-medium">{notice.time}</span>
                      </div>
                    )}
                    {notice.venue && (
                      <div className="flex items-center text-gray-700 gap-2">
                        <MapPin size={16} className="text-purple-600" />
                        <span className="font-medium">{notice.venue}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {notices.length === 0 && scrollingNotices.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No notices available at the moment.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Notices;
