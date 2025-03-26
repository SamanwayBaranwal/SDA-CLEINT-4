import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    if (!hash) {
      // Handle multiple browser environments
      if (typeof window !== 'undefined') {
        const scrollOptions = {
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior
        };

        try {
          // Try modern API first
          window.scrollTo(scrollOptions);
        } catch (error) {
          // Fallback for older browsers
          window.scrollTo(0, 0);
        }

        // For mobile browsers and iOS Safari
        document.body.scrollTop = 0;
        // For older browsers
        document.documentElement.scrollTop = 0;
        
        // Force layout recalculation
        document.body.style.display = 'none';
        document.body.offsetHeight; // trigger reflow
        document.body.style.display = '';
      }
    }
  }, [pathname, hash]);

  return null;
}
