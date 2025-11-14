'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showCTA?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Elevate Your Events",
  subtitle = "Transforming moments into unforgettable experiences through meticulous planning and artistic vision.",
  backgroundImage,
  showCTA = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-organic"
    >
      {/* Organic animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-sand/20 to-linen/20 rounded-organic-lg animate-float-gentle blur-xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-stone/15 to-silk/15 rounded-organic animate-float-gentle blur-xl animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-moss/10 to-stone/10 rounded-organic-sm animate-float-gentle blur-lg animation-delay-4000" />

        {/* Subtle animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%,
                rgba(248, 246, 243, 0.15) 0%,
                transparent 50%),
              linear-gradient(135deg,
                rgba(248, 246, 243, 0.1) 0%,
                rgba(240, 235, 230, 0.05) 50%,
                rgba(122, 139, 122, 0.05) 100%)
            `
          }}
        />
      </div>

      {/* Premium noise texture overlay */}
      <div className="absolute inset-0 bg-grain-premium opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Elegant accent text */}
          <p className="font-script text-2xl md:text-3xl lg:text-4xl text-warm-taupe mb-6 fade-in-up">
            Welcome to
          </p>

          {/* Main heading with dramatic typography */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal mb-8 leading-tight tracking-tight fade-in-up"
              style={{
                letterSpacing: '-0.03em',
                textShadow: '0 2px 20px rgba(42, 37, 35, 0.1)'
              }}>
            {title}
          </h1>

          {/* Elegant divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-taupe to-transparent mx-auto mb-8 fade-in-up" />

          {/* Subtitle with premium typography */}
          <p className="font-montserrat text-lg md:text-xl lg:text-2xl text-charcoal/80 mb-12 max-w-3xl mx-auto leading-relaxed text-balance-enhanced fade-in-up">
            {subtitle}
          </p>

          {/* Premium CTA buttons */}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
              <button
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-charcoal text-soft-white px-10 py-5 min-h-[56px] font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover-lift premium-focus cursor-glow rounded-organic"
              >
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-warm-taupe to-moss opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button
                onClick={scrollToServices}
                className="group glass-premium text-charcoal px-10 py-5 min-h-[56px] font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover-lift premium-focus cursor-glow rounded-organic border border-taupe/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Our Services
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-charcoal/60">
            <span className="text-sm font-montserrat font-light tracking-wider mb-3 uppercase">Discover More</span>
            <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-charcoal/40 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-in-up:nth-child(2) { animation-delay: 0.2s; }
        .fade-in-up:nth-child(3) { animation-delay: 0.3s; }
        .fade-in-up:nth-child(4) { animation-delay: 0.4s; }
        .fade-in-up:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default HeroSection;