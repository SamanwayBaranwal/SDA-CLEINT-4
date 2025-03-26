import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ExternalLink, Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const newspapers = [
  "/Newspapers/news 1 sd.jpeg",
  "/Newspapers/news 2 sd.jpeg",
  "/Newspapers/news 3 sd.jpeg",
  "/Newspapers/news 4 sd.jpeg",
  "/Newspapers/news 5 sd.jpeg",
  "/Newspapers/news 6 sd.jpeg",
  "/Newspapers/news 7 sd.jpeg"
];

export default function SdaNewspaper() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoomMode, setZoomMode] = useState<boolean>(false);

  const handlePrevious = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev === 0 ? newspapers.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev === newspapers.length - 1 ? 0 : prev + 1) : null
    );
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `SDA-News-Article-${selectedImage !== null ? selectedImage + 1 : 'download'}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleZoom = () => {
    setZoomMode(prev => !prev);
  };

  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navigation />
      
      {/* Blurred background for focus */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-md -z-10"></div>
      
      <main className="container mx-auto px-4 py-8 md:py-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
              S.D. Academy in News
            </h1>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Featured coverage and recognition of our institution's achievements in various media outlets
            </p>
          </div>
          
          {/* Uniformly sized grid with consistent cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newspapers.map((newspaper, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card with consistent height and width */}
                <div 
                  className="bg-white rounded-xl overflow-hidden h-[300px] transition-all duration-300 
                  hover:scale-[1.03] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] 
                  shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                >
                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
                  
                  <img
                    src={newspaper}
                    alt={`S.D. Academy Newspaper Article ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  
                  {/* Read More button instead of text overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm font-medium mb-2">
                      Article {index + 1}
                    </p>
                    <Button 
                      onClick={() => setSelectedImage(index)}
                      variant="secondary" 
                      size="sm" 
                      className="w-full bg-white/90 hover:bg-white text-gray-800 backdrop-blur-sm font-medium border-0 shadow-sm"
                    >
                      View Full Article
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal with Preview and Download Options */}
          <Dialog 
            open={selectedImage !== null} 
            onOpenChange={() => {
              setSelectedImage(null);
              setZoomMode(false);
            }}
          >
            <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-black/95">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Top toolbar */}
                <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent z-50">
                  <div className="text-white text-lg font-medium">
                    Article {selectedImage !== null ? selectedImage + 1 : ''}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Preview/Original toggle button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleZoom}
                      className="text-white bg-white/10 hover:bg-white/20 border-white/20"
                    >
                      {zoomMode ? "Fit to Screen" : "Original Size"}
                    </Button>
                    
                    {/* Download button */}
                    {selectedImage !== null && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(newspapers[selectedImage])}
                        className="text-white bg-white/10 hover:bg-white/20 border-white/20"
                      >
                        Download High Quality
                        <Download className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                    
                    {/* Close button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => {
                        setSelectedImage(null);
                        setZoomMode(false);
                      }}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image container with proper aspect ratio */}
                <div className="flex-1 w-full flex items-center justify-center overflow-auto">
                  {selectedImage !== null && (
                    <div className={`relative transition-all duration-300 ${zoomMode ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                      <img
                        src={newspapers[selectedImage]}
                        alt={`S.D. Academy Newspaper Article ${selectedImage + 1}`}
                        className={`
                          transition-all duration-300
                          ${zoomMode 
                            ? 'max-w-none max-h-none w-auto h-auto' 
                            : 'max-w-full max-h-[75vh] w-auto h-auto object-contain'}
                        `}
                        onClick={toggleZoom}
                      />
                    </div>
                  )}
                </div>
                
                {/* Instructions */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                  Click image to toggle between fit-to-screen and original size view
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Back button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 z-50 text-gray-600 hover:bg-gray-100"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          {/* Bottom Section with enhanced styling */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Making Headlines in Education Excellence
              </h2>
              <p className="text-blue-50 max-w-2xl mx-auto">
                S.D. Academy continues to be recognized for its outstanding 
                contributions to education and student development.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}