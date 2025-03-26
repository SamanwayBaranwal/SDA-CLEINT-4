
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    text: "S.D. Academy has provided my child with an exceptional learning environment. The teachers are dedicated and caring.",
    author: "Sarah Johnson",
    role: "Parent"
  },
  {
    text: "The academic standards here are outstanding. I've seen remarkable growth in my students.",
    author: "Michael Brown",
    role: "Teacher"
  },
  {
    text: "I love the diverse range of activities and the supportive atmosphere at S.D. Academy.",
    author: "Emily Chen",
    role: "Student"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B5CF6]/10 to-[#D946EF]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
          What People Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white to-purple-50 shadow-xl border-none backdrop-blur-sm">
            <Quote className="w-16 h-16 mx-auto mb-6 text-transparent bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text" />
            <p className="text-2xl text-gray-700 text-center mb-8 italic">{testimonials[currentIndex].text}</p>
            <div className="text-center">
              <p className="font-semibold text-xl bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-500 mt-1">{testimonials[currentIndex].role}</p>
            </div>
          </Card>
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
