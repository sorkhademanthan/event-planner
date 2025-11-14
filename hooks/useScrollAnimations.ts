import { useEffect, useRef, useState, useCallback } from 'react';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  scaleIn?: boolean;
  fadeUp?: boolean;
  fadeLeft?: boolean;
  fadeRight?: boolean;
  customAnimation?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0,
    scaleIn = false,
    fadeUp = true,
    fadeLeft = false,
    fadeRight = false,
    customAnimation
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  const getAnimationClasses = useCallback(() => {
    if (!isVisible) {
      // Initial state (hidden)
      if (customAnimation) return customAnimation;

      if (scaleIn) return 'opacity-0 scale-95';
      if (fadeLeft) return 'opacity-0 -translate-x-8';
      if (fadeRight) return 'opacity-0 translate-x-8';
      if (fadeUp) return 'opacity-0 translate-y-8';

      return 'opacity-0';
    }

    // Visible state
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  }, [isVisible, customAnimation, scaleIn, fadeLeft, fadeRight, fadeUp]);

  return {
    ref: elementRef,
    isVisible,
    hasAnimated,
    animationClasses: getAnimationClasses(),
    style: {
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`
    }
  };
};

// Advanced scroll-based parallax hook
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    offset,
    style: {
      transform: `translateY(${offset}px)`
    }
  };
};

// Mouse tracking for premium interactions
export const useMouseTracking = (element: HTMLElement | null) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [element]);

  return mousePosition;
};

// Staggered animation hook for lists
export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 100) => {
  return Array.from({ length: itemCount }, (_, index) =>
    useScrollAnimation({ delay: index * baseDelay })
  );
};

// Performance-optimized scroll throttling
export const useThrottledScroll = (callback: Function, delay: number = 16) => {
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      if (Date.now() - lastRun.current >= delay) {
        callback();
        lastRun.current = Date.now();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, delay]);
};

// Intersection Observer for multiple elements
export const useMultipleScrollAnimations = (
  selectors: string[],
  options: ScrollAnimationOptions = {}
) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const elementsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const {
      threshold = 0.1,
      rootMargin = '0px',
      triggerOnce = true,
      delay = 0
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const selector = entry.target.getAttribute('data-animate-selector');
          if (!selector) return;

          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleElements(prev => {
                const newSet = new Set(prev);
                newSet.add(selector);
                return newSet;
              });
            }, delay);
          } else if (!triggerOnce) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(selector);
              return newSet;
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all elements
    Object.values(elementsRef.current).forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [options]);

  const registerElement = useCallback((selector: string, element: HTMLElement | null) => {
    elementsRef.current[selector] = element;
  }, []);

  return {
    visibleElements,
    registerElement,
    isElementVisible: (selector: string) => visibleElements.has(selector)
  };
};