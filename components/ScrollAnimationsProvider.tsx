'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useScrollAnimation, useThrottledScroll, useMouseTracking } from '../hooks/useScrollAnimations';

interface ScrollAnimationsContextType {
  scrollY: number;
  mousePosition: { x: number; y: number };
  isScrolling: boolean;
  scrollDirection: 'up' | 'down' | null;
}

const ScrollAnimationsContext = createContext<ScrollAnimationsContextType | null>(null);

export const useScrollAnimations = () => {
  const context = useContext(ScrollAnimationsContext);
  if (!context) {
    throw new Error('useScrollAnimations must be used within ScrollAnimationsProvider');
  }
  return context;
};

interface ScrollAnimationsProviderProps {
  children: React.ReactNode;
}

export const ScrollAnimationsProvider: React.FC<ScrollAnimationsProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Throttled scroll handler for performance
  useThrottledScroll(() => {
    const currentScrollY = window.pageYOffset;
    setScrollY(currentScrollY);

    // Determine scroll direction
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up');
    }

    lastScrollY.current = currentScrollY;

    // Set scrolling state
    setIsScrolling(true);

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Reset scrolling state after scroll ends
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
      setScrollDirection(null);
    }, 150);
  }, 16);

  // Smooth scroll behavior
  useEffect(() => {
    // Enable smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Enhanced Intersection Observer for all fade-in elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // Add visible class with staggered delay
            const delay = parseInt(element.dataset.animationDelay || '0');

            setTimeout(() => {
              element.classList.add('visible');
            }, delay);

            // Add animation-specific classes
            if (element.dataset.animation) {
              element.classList.add(element.dataset.animation);
            }
          } else if (!element.dataset.animateOnce) {
            // Remove visible class if not trigger once
            element.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element comes into view
      }
    );

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up, .scale-in, .fade-in-left, .fade-in-right').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax effect for elements with data-parallax attribute
  useEffect(() => {
    const handleParallax = () => {
      document.querySelectorAll('[data-parallax]').forEach(element => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.parallax || '0.5');
        const yPos = -(scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    handleParallax();
  }, [scrollY]);

  const contextValue: ScrollAnimationsContextType = {
    scrollY,
    mousePosition,
    isScrolling,
    scrollDirection
  };

  return (
    <ScrollAnimationsContext.Provider value={contextValue}>
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </ScrollAnimationsContext.Provider>
  );
};

// Individual animation component
interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'scale-in' | 'fade-left' | 'fade-right';
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  triggerOnce = true,
  threshold = 0.1,
  as: Component = 'div',
  className = '',
  ...props
}) => {
  const { ref, animationClasses, style } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
    scaleIn: animation === 'scale-in',
    fadeUp: animation === 'fade-up',
    fadeLeft: animation === 'fade-left',
    fadeRight: animation === 'fade-right'
  });

  return React.createElement(
    Component,
    {
      ref,
      className: `${className} ${animationClasses}`,
      style,
      'data-animation': animation,
      'data-animation-delay': delay,
      'data-animate-once': triggerOnce,
      ...props
    },
    children
  );
};

export default ScrollAnimationsProvider;