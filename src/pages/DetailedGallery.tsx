import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Footer } from "@/components/Footer";

// Import all image arrays
import { 
  images as campusImages,
  gkpMahotsavImages,
  christmasImages,
  sportsImages,
  diwaliImages,
  yogaImages,
  celebrationsImages 
} from '@/data/gallery-images';

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

export default function DetailedGallery() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    (location.state as any)?.initialCategory || 'All'
  );
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [zoomMode, setZoomMode] = useState<boolean>(false);

  // Create a mapping of categories to their respective image arrays
  const categoryImages = {
    'Campus': campusImages,
    'GKP Mahotsav': gkpMahotsavImages,
    'Christmas': christmasImages,
    'Sports': sportsImages,
    'Diwali': diwaliImages,
    'Yoga': yogaImages,
    'Celebrations': celebrationsImages
  };

  // Combine all images for the "All" category
  const allImages = Object.values(categoryImages).flat();

  // Get the correct images based on selected category
  const displayImages = selectedCategory === 'All' 
    ? allImages 
    : categoryImages[selectedCategory] || [];

  const categories = ['All', ...Object.keys(categoryImages)];

  // Handle image download
  const handleDownload = (image: GalleryImage) => {
    // Create a link element
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `SDA-${image.category}-${image.caption}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Toggle zoom state
  const toggleZoom = () => setZoomMode(!zoomMode);

  // Handle opening an image and setting the current index
  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Navigate to previous image
  const handlePrevious = () => {
    if (displayImages.length <= 1) return;
    const newIndex = currentIndex === 0 ? displayImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  // Navigate to next image
  const handleNext = () => {
    if (displayImages.length <= 1) return;
    const newIndex = currentIndex === displayImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-white/80 border-gray-300"
          >
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 font-montserrat mb-2">
              School Gallery
            </h1>
            <p className="text-gray-600 font-lato">
              Capturing moments and memories from our school events
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 bg-white p-4 rounded-xl shadow-sm">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`
                font-montserrat text-sm rounded-full px-6 transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              onClick={() => openImage(image, index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-base font-semibold font-montserrat">{image.caption}</p>
                  <p className="text-sm opacity-90 mt-1 font-lato">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newspaper-style Image Preview Dialog */}
        <Dialog 
          open={!!selectedImage} 
          onOpenChange={(open) => {
            if (!open) {
              setSelectedImage(null);
              setZoomMode(false);
            }
          }}
        >
          <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-black/95">
            {selectedImage && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Top toolbar */}
                <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent z-50">
                  <div className="text-white text-lg font-medium">
                    {selectedImage.caption}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Original Size button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleZoom}
                      className="text-white bg-white/10 hover:bg-white/20 border-white/20"
                    >
                      {zoomMode ? "Fit to Screen" : "Original Size"}
                    </Button>
                    
                    {/* Download button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(selectedImage)}
                      className="text-white bg-white/10 hover:bg-white/20 border-white/20"
                    >
                      Download High Quality
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                    
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
                {displayImages.length > 1 && (
                  <>
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
                  </>
                )}

                {/* Image container with proper aspect ratio */}
                <div className="flex-1 w-full flex items-center justify-center overflow-auto">
                  <div className={`relative transition-all duration-300 ${zoomMode ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.caption}
                      className={`
                        transition-all duration-300
                        ${zoomMode 
                          ? 'max-w-none max-h-none w-auto h-auto' 
                          : 'max-w-full max-h-[75vh] w-auto h-auto object-contain'}
                      `}
                      onClick={toggleZoom}
                    />
                  </div>
                </div>
                
                {/* Instructions */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                  Click image to toggle between fit-to-screen and original size view
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {displayImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 font-lato text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
