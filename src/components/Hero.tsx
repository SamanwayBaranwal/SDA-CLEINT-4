import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NoticesDrawer } from "./NoticesDrawer";
import { AdmissionBar } from "./AdmissionBar";
import { LoadingSpinner } from "./LoadingSpinner";

const backgroundImages = [
  '/homeImage/1.jpeg',
  '/homeImage/2.jpg',
  '/homeImage/3.jpeg',
  '/homeImage/4.jpeg',
  '/homeImage/5.jpg',
  '/homeImage/6.jpg',
  '/homeImage/7.jpeg',
  '/homeImage/8.jpeg',
  '/homeImage/9.jpeg',
  '/homeImage/10.jpeg'
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Preload all images on component mount
  useEffect(() => {
    let loadedCount = 0;
    const imageElements: HTMLImageElement[] = [];
    
    // Preload spinner/placeholder if you want to show during loading
    sliderContainerRef.current?.classList.add('loading');
    
    backgroundImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      imageElements[index] = img;
      
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === backgroundImages.length) {
          setImagesLoaded(true);
          setPreloadedImages(imageElements);
          sliderContainerRef.current?.classList.remove('loading');
        }
      };
      
      img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === backgroundImages.length) {
          setImagesLoaded(true);
          sliderContainerRef.current?.classList.remove('loading');
        }
      };
    });
    
    return () => {
      // Clean up any pending operations
      imageElements.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return; // Only start slideshow after images are loaded
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const nextSlide = () => {
    if (!imagesLoaded) return;
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    if (!imagesLoaded) return;
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <section className="relative h-screen">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-[calc(100vh-3.5rem)]">
        {/* Image Slider (75% width on desktop) */}
        <div ref={sliderContainerRef} className="relative w-[75%] h-full overflow-hidden">
          {!imagesLoaded && <LoadingSpinner />}
          
          {preloadedImages.map((image, index) => (
            <div
              key={image.src}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentImageIndex === index && imagesLoaded ? 1 : 0,
                zIndex: currentImageIndex === index && imagesLoaded ? 1 : 0,
              }}
            >
              <img
                src={image.src}
                alt={`School Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Removed the overlay div to keep images clean */}
            </div>
          ))}

          {/* Buttons at bottom */}
          <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-4 px-4">
            <Button
              onClick={() => navigate('/about')}
              className="bg-white hover:bg-gray-100 text-[#003049] px-6 py-1.5 text-sm rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 w-28"
            >
              Explore More
              <ChevronRight className="h-3 w-3" />
            </Button>
            
            <Button
              onClick={() => navigate('/enquiry')}
              className="bg-[#003049] hover:bg-[#003049] text-white px-6 py-1.5 text-sm rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg w-28"
            >
              Apply Now
            </Button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Notice Board (25% width on desktop) */}
        <div className="w-[25%] h-full">
          <NoticesDrawer />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        {/* Mobile Image Slider Container */}
        <div ref={sliderContainerRef} className="relative w-full aspect-[16/9] bg-black">
          {!imagesLoaded && <LoadingSpinner />}
          
          {/* Image Slider */}
          <div className="relative w-full h-full">
            {preloadedImages.map((image, index) => (
              <div
                key={image.src}
                className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
                style={{
                  opacity: currentImageIndex === index && imagesLoaded ? 1 : 0,
                  zIndex: currentImageIndex === index && imagesLoaded ? 1 : 0,
                }}
              >
                <img
                  src={image.src}
                  alt={`School Highlight ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Removed the overlay div to keep images clean */}
              </div>
            ))}

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Buttons - Below Slider */}
        <div className="w-full bg-gradient-to-b from-black to-[#003049] py-3">
          <div className="flex justify-center gap-4 px-4">
            <Button
              onClick={() => navigate('/about')}
              className="bg-white hover:bg-gray-100 text-[#003049] px-5 py-1.5 text-sm rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 w-28"
            >
              Explore More
              <ChevronRight className="h-3 w-3" />
            </Button>
            
            <Button
              onClick={() => navigate('/enquiry')}
              className="bg-[#003049] hover:bg-[#003049] text-white px-5 py-1.5 text-sm rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg w-28"
            >
              Apply Now
            </Button>
          </div>
        </div>

        {/* Notice Board Below Content on Mobile */}
        <div className="w-full">
          <NoticesDrawer />
        </div>
      </div>

      {/* Single Admission Bar - Responsive positioning */}
      <div className="relative z-20">
        <div className="hidden md:block">
          <AdmissionBar />
        </div>
        <div className="md:hidden fixed bottom-0 left-0 right-0 w-full">
          <AdmissionBar />
        </div>
      </div>
    </section>
  );
};
