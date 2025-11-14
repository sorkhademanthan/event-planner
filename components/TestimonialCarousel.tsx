'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (autoPlay && !isPaused && testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, interval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1"
        className={`transition-all duration-300 ${
          index < rating ? 'text-warm-taupe' : 'text-charcoal/20'
        }`}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="relative w-full py-16 md:py-24 overflow-hidden bg-deep-charcoal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Premium background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-charcoal to-deep-charcoal opacity-95" />
      <div className="absolute inset-0 bg-grain-premium opacity-30" />

      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-warm-taupe/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-moss/10 rounded-full blur-2xl" />

      <div className="relative z-10 container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white mb-4">
            Client Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-taupe to-transparent mx-auto" />
        </div>

        {/* Testimonial content */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative transition-all duration-700 ease-out"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0
            }}
          >
            {/* Quote */}
            <blockquote className="text-center mb-12">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-warm-taupe/20 mx-auto mb-8"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="font-playfair text-2xl md:text-3xl lg:text-4xl italic text-soft-white leading-relaxed mb-8 text-balance-enhanced">
                {currentTestimonial.quote}
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(currentTestimonial.rating)}
              </div>
            </blockquote>

            {/* Client information */}
            <div className="flex flex-col items-center text-center">
              {/* Client image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-taupe to-moss rounded-full opacity-20 scale-110" />
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="relative rounded-full object-cover border-3 border-soft-white/10"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>

              {/* Client details */}
              <div className="mb-2">
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-soft-white">
                  {currentTestimonial.name}
                </h3>
                <p className="font-montserrat text-warm-taupe text-lg">
                  {currentTestimonial.role}
                </p>
                <p className="font-montserrat text-soft-white/70 text-sm uppercase tracking-wider">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          {showArrows && testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 bg-soft-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-soft-white hover:bg-soft-white/20 transition-all duration-300 premium-focus group"
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 bg-soft-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-soft-white hover:bg-soft-white/20 transition-all duration-300 premium-focus group"
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Progress indicator */}
          <div className="relative mt-12">
            <div className="h-1 bg-soft-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-warm-taupe to-moss transition-transform duration-300 ease-linear origin-left"
                style={{
                  transform: `scaleX(${isPaused ? 0 : 1})`,
                  transitionDuration: isPaused ? '0ms' : `${interval}ms`
                }}
              />
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        {showDots && testimonials.length > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 premium-focus ${
                  index === currentIndex
                    ? 'bg-warm-taupe w-12'
                    : 'bg-soft-white/30 hover:bg-soft-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-taupe/5 rounded-full animate-float-gentle blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-moss/5 rounded-full animate-float-gentle animation-delay-2000 blur-2xl" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;