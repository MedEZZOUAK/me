import { useEffect, useState } from 'react';

export const useOptimizedAnimation = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const optimizedVariants = {
    hidden: { opacity: prefersReducedMotion ? 0 : 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.4
      }
    }
  };

  const slideInVariants = {
    hidden: { 
      opacity: 0, 
      x: prefersReducedMotion ? 0 : -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return {
    prefersReducedMotion,
    optimizedVariants,
    fadeInVariants,
    slideInVariants,
    scaleVariants
  };
}; 