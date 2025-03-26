import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LeadershipCards } from "@/components/LeadershipCards";
import { TeachersSection } from "@/components/TeachersSection";
import Gallery from "@/components/Gallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Facilities } from "@/components/Facilities";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/utils/useScrollAnimation";
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { InfoHub } from "@/components/InfoHub";

const Index = () => {
  const location = useLocation();
  const leadershipRef = useScrollAnimation();
  const teachersRef = useScrollAnimation();
  const videoTestimonialsRef = useScrollAnimation();
  const facilitiesRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const enquiryRef = useScrollAnimation();

  const scrollToSection = useCallback((hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.slice(1));
    }
  }, [location.hash, scrollToSection]);

  useEffect(() => {
    // Handle scroll to sections
    const hash = location.hash;
    if (hash === '#teachers') {
      const element = document.getElementById('teachers');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <div ref={leadershipRef} className="transition-transform duration-300 will-change-transform">
        <LeadershipCards />
      </div>
      
      <div 
        id="teachers" 
        ref={teachersRef} 
        className="transition-transform duration-300 will-change-transform"
      >
        <TeachersSection />
      </div>
      
      <div ref={facilitiesRef} className="transition-transform duration-300 will-change-transform">
        <Facilities />
      </div>

      <div ref={videoTestimonialsRef} className="transition-transform duration-300 will-change-transform">
        <VideoTestimonials />
      </div>

      <div 
        id="gallery" 
        ref={galleryRef} 
        className="transition-transform duration-300 will-change-transform"
      >
        <Gallery />
      </div>
      
      <div ref={enquiryRef} className="transition-transform duration-300 will-change-transform">
        <EnquiryForm />
      </div>
      
      <InfoHub />
      <Footer />
    </div>
  );
};

export default Index;
