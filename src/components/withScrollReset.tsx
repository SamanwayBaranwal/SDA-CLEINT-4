import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Higher-order component that ensures pages scroll to top when mounted
 * This can be used to wrap individual page components for more control
 */
export function withScrollReset<T>(Component: React.ComponentType<T>) {
  return function WithScrollReset(props: T) {
    useEffect(() => {
      // Comprehensive approach to reset scroll position
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      
      // Fix for mobile browsers
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 0);
    }, []);

    return <Component {...props} />;
  };
}

/**
 * Component to manually trigger a scroll reset
 * Can be used anywhere in the app where scroll needs to be reset
 */
export function ResetScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return null;
}
