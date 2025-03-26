
import { Trophy, Award, GraduationCap, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const achievements = [
  {
    title: "Academic Excellence",
    description: "90% students scored above 90% in board exams",
    icon: GraduationCap,
    count: "500+",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
  },
  {
    title: "Sports Champions",
    description: "State level winners in multiple sports",
    icon: Trophy,
    count: "50+",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    title: "Competition Winners",
    description: "National & International competition achievements",
    icon: Award,
    count: "200+",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
  },
  {
    title: "Star Performers",
    description: "Students excelling in extra-curricular activities",
    icon: Star,
    count: "300+",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  }
];

export const Achievements = () => {
  const navigate = useNavigate();
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F97316]/10 to-[#FBBF24]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#F97316] via-[#FBBF24] to-[#F97316] bg-clip-text text-transparent">
          Our Achievements
        </h2>
        <Carousel
          ref={emblaRef}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative h-[400px] overflow-hidden rounded-lg cursor-pointer group transform transition-all duration-300 hover:scale-105"
                     onClick={() => navigate('/achievements')}>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9]/90 via-[#8B5CF6]/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 group-hover:translate-y-[-10px]">
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#F97316] to-[#FBBF24] rounded-2xl flex items-center justify-center transform rotate-3">
                          <achievement.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-2 text-[#FBBF24]">{achievement.count}</h3>
                      <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-gray-100">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="text-center mt-8">
          <Button 
            onClick={() => navigate('/achievements')}
            className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] hover:from-[#FBBF24] hover:to-[#F97316] text-white font-semibold py-2 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Achievements
          </Button>
        </div>
      </div>
    </section>
  );
};
