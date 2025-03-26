import { useRef } from 'react';

const videos = [
  "QknDA3_XZjA",
  "SiKWynHUzcw",
  "-Ds5b5ER_Wc",
  "9lDZE_qvR9E",
  "aKY2ibvIUyU",
  "JLeqSodEyrU",
  "cFoHil3b-ow",
  "Wp5POcpB7Bo",
  "8WTaFJFvrh8",
  "xoHUq1yHV0k"
];

export const VideoTestimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
          Video Testimonials
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {videos.map((videoId, index) => (
            <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video testimonial ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
