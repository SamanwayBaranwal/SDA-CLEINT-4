import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

interface GallerySliderProps {
  images: string[];
  autoPlayInterval?: number;
}

// Gallery slider component for reusability
const GallerySlider = ({ images, autoPlayInterval = 5000 }: GallerySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlayInterval]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#003049]/50 hover:bg-[#003049]/70 text-white p-2 rounded-full 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#003049]/50 hover:bg-[#003049]/70 text-white p-2 rounded-full 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${index === currentIndex ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main gallery data
const images = [
  {
    url: './School Building.jpeg',
    caption: 'School Building',
    category: 'Campus'
  }
];

// Add GKP Mahotsav images
const gkpMahotsavImages = [
  {
    url: '/GKPMahotsav/Image1.jpeg',
    caption: 'GKP Mahotsav Cultural Program',
    category: 'GKP Mahotsav'
  },
  {
    url: '/GKPMahotsav/Image2.jpeg',
    caption: 'GKP Mahotsav Celebration',
    category: 'GKP Mahotsav'
  }
];

// Add Christmas images
const christmasImages = [
  {
    url: '/Christmas/Christmas1.jpeg',
    caption: 'Christmas Celebration',
    category: 'Christmas'
  },
  {
    url: '/Christmas/Christmas2.jpeg',
    caption: 'Christmas Event',
    category: 'Christmas'
  }
];

// Add Sports images
const sportsImages = [
  {
    url: '/Sports/Sports1.jpeg',
    caption: 'Sports Day Celebration',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports2.jpeg',
    caption: 'Annual Sports Meet',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports3.jpeg',
    caption: 'Sports Activities',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports4.jpeg',
    caption: 'Sports Competition',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports5.jpeg',
    caption: 'Sports Achievement',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports6.jpeg',
    caption: 'Sports Event',
    category: 'Sports'
  },
  {
    url: '/Sports/Sports7.jpeg',
    caption: 'Sports Program',
    category: 'Sports'
  }
];

// Add Diwali images
const diwaliImages = [
  {
    url: '/Diwali/Diwali1.jpeg',
    caption: 'Diwali Celebration',
    category: 'Diwali'
  }
];

// Add Yoga images
const yogaImages = [
  {
    url: '/Yoga/Yoga1.jpeg',
    caption: 'Yoga Session',
    category: 'Yoga'
  }
];

// Add Celebrations and Programs images
const celebrationsImages = Array.from({ length: 29 }, (_, i) => ({
  url: `/Celebrations and Programs/image${i + 1}.jpg`,
  caption: `School Celebration ${i + 1}`,
  category: 'Celebrations and Programs'
}));

// Update the combined images array to include new sections
const galleryImages = [
  ...images, 
  ...gkpMahotsavImages, 
  ...christmasImages, 
  ...sportsImages,
  ...diwaliImages,
  ...yogaImages,
  ...celebrationsImages
];

// Main Gallery component that's exported
export const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = {
    'Campus': images,
    'GKP Mahotsav': gkpMahotsavImages,
    'Christmas': christmasImages,
    'Sports': sportsImages,
    'Diwali': diwaliImages,
    'Yoga': yogaImages,
    'Celebrations': celebrationsImages
  };

  return (
    <section className="py-20 bg-[#003049]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#003049]">
          Our Gallery
        </h2>

        {/* Main Image Slider */}
        <div className="mb-20">
          <GallerySlider images={galleryImages.map(img => img.url)} />
        </div>

        {/* Category Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, categoryImages]) => (
            <div key={category} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#003049]/10"
            >
              <h3 className="text-2xl font-semibold text-[#003049] mb-4">{category}</h3>
              
              {/* Preview Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {categoryImages.slice(0, 2).map((image, index) => (
                  <motion.div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                      onClick={() => setSelectedImage(image)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Image count and View All button */}
              <div className="flex items-center justify-between">
                <span className="text-[#003049]/70">
                  {categoryImages.length} Photos
                </span>
                <Button
                  variant="outline"
                  onClick={() => navigate('/gallery', { 
                    state: { initialCategory: category }
                  })}
                  className="bg-[#003049] text-white hover:bg-[#003049]/90 transition-colors"
                >
                  View All
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl mx-auto bg-white">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-lg"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:bg-[#003049]/20"
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003049] to-transparent rounded-b-lg">
                <h3 className="text-white font-medium text-lg">{selectedImage.caption}</h3>
                <p className="text-white/80 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
