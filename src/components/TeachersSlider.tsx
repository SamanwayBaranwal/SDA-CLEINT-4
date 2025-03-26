import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Teacher {
  image: string;
  name: string;
  subject?: string;
}

interface TeachersSliderProps {
  teachers: Teacher[];
}

export const TeachersSlider = ({ teachers }: TeachersSliderProps) => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth <= 768;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPos = prev - 1;
        return newPos <= -50 ? 0 : newPos;
      });
    }, isMobile ? 10 : 50); // Super fast on mobile - 10ms interval

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleNext = () => {
    setPosition(prev => {
      const newPos = prev - 25;
      return newPos <= -50 ? 0 : newPos;
    });
  };

  const handlePrev = () => {
    setPosition(prev => {
      const newPos = prev + 25;
      return newPos >= 0 ? -50 : newPos;
    });
  };

  return (
    <div className="relative">
      {/* Navigation Buttons for Mobile */}
      {isMobile && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/90"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/90"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      <div 
        className="relative overflow-hidden" 
        ref={containerRef}
      >
        <div
          className="flex gap-4 py-4"
          style={{
            transform: `translateX(${position}%)`,
            transition: `transform ${isMobile ? '0.1s' : '0.5s'} linear`,
            width: 'fit-content',
            willChange: 'transform'
          }}
        >
          {/* Original teachers */}
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ contain: 'paint layout' }}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-48 teacher-profile-image"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{teacher.name}</h3>
                {teacher.subject && (
                  <p className="text-gray-600 text-sm">{teacher.subject}</p>
                )}
              </div>
            </div>
          ))}

          {/* Duplicated teachers for seamless loop */}
          {teachers.map((teacher, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ contain: 'paint layout' }}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-48 teacher-profile-image"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{teacher.name}</h3>
                {teacher.subject && (
                  <p className="text-gray-600 text-sm">{teacher.subject}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 