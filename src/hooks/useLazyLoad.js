import { useState, useEffect, useRef } from 'react';

export const useLazyLoad = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
        ...options
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { elementRef, isVisible, hasLoaded, setHasLoaded };
};

export const useImageLazyLoad = (src, placeholder = null) => {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const { elementRef, isVisible } = useLazyLoad();

  useEffect(() => {
    if (isVisible && src) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setImageSrc(src);
        setImageLoading(false);
        setImageError(false);
      };
      
      img.onerror = () => {
        setImageError(true);
        setImageLoading(false);
      };
    }
  }, [isVisible, src]);

  return { elementRef, imageSrc, imageLoading, imageError };
}; 