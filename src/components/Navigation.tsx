import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the interface for location state
interface LocationState {
  openDropdown?: string;
}

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [highlightEssentialInfo, setHighlightEssentialInfo] = useState(false);
  const highlightTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'About', 
      path: '/about',
      dropdown: [
        { label: 'Unique Choice', path: '/about/unique-choice' },
        { label: 'Vision & Mission', path: '/about/vision-mission' },
        { label: 'Success Saga', path: '/about/success-saga' },
        { label: "Chairman's Message", path: '/about/chairman-message' },
        { label: "Director's Message", path: '/about/director-message' },
        { label: "Principal's Message", path: '/about/principal-message' },
        { label: "Academic Head's Message", path: '/about/academic-head-message' },
        { label: 'Management', path: '/about/management' },
        { label: 'Public Disclosure', path: '/about/public-disclosure' },
      ]
    },
    { 
      label: 'Infrastructure', 
      
      dropdown: [
        { label: 'Building', path: '/infrastructure/building' },
        { label: 'Safety', path: '/infrastructure/safety' },
        { label: 'Smart Class', path: '/infrastructure/smart-class' },
        { label: 'Computer Lab', path: '/infrastructure/computer-lab' },
        { label: 'Science Lab', path: '/infrastructure/science-lab' },
        { label: 'Health', path: '/infrastructure/health' },
      ]
    },
    { 
      label: 'Academic', 
      path: '/academic',
      dropdown: [
        { label: 'Primary Section', path: '/academic/primary' },
        { label: 'Middle Section', path: '/academic/middle' },
        { label: 'Senior Section', path: '/academic/senior' },
      ]
    },
    { 
      label: 'Results', 
      path: '/results',
      dropdown: [
        { label: 'Academic Results', path: '/results/academic' },
        { label: 'Olympiad Results', path: '/results/olympiad' },
        { label: 'Competition Results', path: '/results/competition' },
        { label: 'Entrance Results', path: '/results/entrance' },
      ]
    },
    { 
      label: 'Beyond Academic', 
      path: '/beyond-academic',
      dropdown: [
        { label: 'Sports', path: '/beyond-academic/sports' },
        { label: 'Dance & Music', path: '/beyond-academic/dance-music' },
        { label: 'Art & Craft', path: '/beyond-academic/art-craft' },
        { label: 'Yoga', path: '/beyond-academic/yoga' },
      ]
    },
    { 
      label: 'Essential Info', 
      path: '/essential-info',
      dropdown: [
        { label: 'School Uniform', path: '/essential-info/school-uniform' },
        { label: 'School Timing', path: '/essential-info/school-timing' },
        { label: 'Transport', path: '/essential-info/transport' },
        { label: 'Code of Conduct', path: '/essential-info/code-of-conduct' },
        { label: 'SDA Newspaper', path: '/essential-info/sda-newspaper' },
        { label: 'Online Registration', path: '/essential-info/online-registration' },
        { label: 'Job/Entrance', path: '/essential-info/job-entrance' },
      ]
    },
  ];

  // Clear highlight timeout on unmount
  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  // Check location state for openDropdown
  useEffect(() => {
    const state = location.state as LocationState;
    if (state && state.openDropdown === 'essential-info') {
      // For desktop: treat "essential-info" as the active dropdown
      setActiveDropdown('/essential-info');
      
      // For mobile: open the menu if it's not already open
      setIsOpen(true);

      // Set highlight for Essential Info
      setHighlightEssentialInfo(true);
      
      // Clear highlight after 3 seconds
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      
      highlightTimeoutRef.current = setTimeout(() => {
        setHighlightEssentialInfo(false);
      }, 3000);
      
      // Clear the state so it doesn't persist on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Listen for custom event
  useEffect(() => {
    const handleEssentialInfoEvent = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.dropdown === 'essential-info') {
        setActiveDropdown('/essential-info');
        setIsOpen(true);
        
        setHighlightEssentialInfo(true);
        
        if (highlightTimeoutRef.current) {
          clearTimeout(highlightTimeoutRef.current);
        }
        
        highlightTimeoutRef.current = setTimeout(() => {
          setHighlightEssentialInfo(false);
        }, 3000);
      }
    };

    window.addEventListener('openEssentialInfo', handleEssentialInfoEvent);
    
    return () => {
      window.removeEventListener('openEssentialInfo', handleEssentialInfoEvent);
    };
  }, []);

  return (
    <nav className="bg-[#003049] text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#00253a]">
        <div className="flex items-center space-x-6">
          <a href="tel:+918881110745" className="text-sm hover:text-gray-300 transition-all duration-300 hover:scale-105">
            Phone: +91 888-111-0745
          </a>
          <a href="mailto:sdacademyho@gmail.com" className="text-sm hover:text-gray-300 transition-all duration-300 hover:scale-105">
            Email: sdacademyho@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://m.facebook.com/SDAGORAKHPUR/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-110">
            <Facebook size={16} />
          </a>
          <a href="https://www.instagram.com/sdagorakhpur?igsh=Zml3aHJpczR1Z2sw" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-2 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300 hover:scale-110">
            <Instagram size={16} />
          </a>
          <a href="https://youtube.com/@sdacademygorakhpur?si=96K2SO4WLcCEMETn" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-110">
            <Youtube size={16} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="relative px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-white/20 transition-all duration-300 group-hover:border-white/40">
              <img 
                src="/favicon.png" 
                alt="SD Academy" 
                className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-wide transition-all duration-300 group-hover:text-blue-300">
                SD Academy
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm text-gray-300 font-light tracking-wider">Excellence in Education</span>
                <span className="text-xs text-gray-200 font-bold ml-1">[ Since 2005 ]</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link 
                  to={item.path}
                  className={cn(
                    "text-base font-medium tracking-wide hover:text-gray-300 transition-all duration-300",
                    "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400",
                    "hover:after:w-full after:transition-all after:duration-300",
                    "flex items-center gap-1",
                    location.pathname === item.path ? "text-blue-400 after:w-full" : "text-white after:w-0"
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className="transform transition-transform duration-200 group-hover:rotate-180" 
                    />
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform group-hover:translate-y-0 translate-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003049] transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#00253a] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={cn(
            "fixed inset-0 top-[64px] bg-[#003049] z-50 md:hidden overflow-y-auto animate-slide-up",
            highlightEssentialInfo ? "" : ""
          )}>
            {/* Social Icons for Mobile */}
            <div className="flex justify-center space-x-6 py-4 border-b border-white/10">
              <a href="https://m.facebook.com/SDAGORAKHPUR/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/sdagorakhpur?igsh=Zml3aHJpczR1Z2sw" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="p-2.5 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@sdacademygorakhpur?si=96K2SO4WLcCEMETn" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>

            {/* Contact Info for Mobile */}
            <div className="flex flex-col items-center space-y-2 py-4 text-sm text-gray-300 border-b border-white/10">
              <a href="tel:+918881110745" className="hover:text-white transition-colors">
                Phone: +91 888-111-0745
              </a>
              <a href="mailto:sdacademyho@gmail.com" className="hover:text-white transition-colors">
                Email: sdacademyho@gmail.com
              </a>
            </div>

            {/* Navigation Items */}
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <div key={item.path} className="rounded-lg overflow-hidden">
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === item.path ? null : item.path);
                      } else {
                        navigate(item.path);
                        setIsOpen(false);
                      }
                    }}
                    className={cn(
                      "w-full px-4 py-3 flex items-center justify-between",
                      "text-base font-medium transition-all duration-200",
                      location.pathname === item.path ? "bg-[#00253a] text-white" : "hover:bg-[#00253a]/50",
                      "border-l-4",
                      location.pathname === item.path ? "border-blue-400" : "border-transparent",
                      item.label === "Essential Info" && highlightEssentialInfo 
                        ? "bg-blue-600 text-white border-yellow-400 animate-pulse" 
                        : ""
                    )}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <div className={cn(
                        "transform transition-transform duration-200",
                        activeDropdown === item.path ? "rotate-180" : ""
                      )}>
                        <ChevronDown size={18} />
                      </div>
                    )}
                  </button>
                  
                  {item.dropdown && (
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 bg-[#00253a]/30",
                      activeDropdown === item.path ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-6 py-2.5 text-sm transition-all duration-200",
                            "border-l-2 ml-4",
                            location.pathname === dropdownItem.path
                              ? "border-blue-400 text-blue-400 bg-[#00253a]"
                              : "border-transparent text-gray-300 hover:text-white hover:border-gray-400"
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};