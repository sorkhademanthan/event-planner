'use client';

import React, { useEffect, useRef, useState } from 'react';

export type DividerType = 'wave' | 'curve' | 'blob' | 'zigzag' | 'organic';

interface OrganicDividerProps {
  type: DividerType;
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
  fill?: boolean;
  animate?: boolean;
  className?: string;
}

const OrganicDivider: React.FC<OrganicDividerProps> = ({
  type,
  color = 'currentColor',
  height = 120,
  position = 'bottom',
  fill = true,
  animate = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dividerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (dividerRef.current && animate) {
        const rect = dividerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    if (animate) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animate]);

  const getSvgPath = () => {
    switch (type) {
      case 'wave':
        return `M0,${height / 2} C${height * 0.5},${height * 0.2} ${height * 0.3},${height * 0.8} ${height * 0.5},${height / 2} C${height * 0.7},${height * 0.2} ${height * 1.5},${height * 0.8} ${width},${height / 2} L${width},${height} L0,${height} Z`;

      case 'curve':
        return `M0,${height * 0.8} C${width * 0.2},${height * 0.6} ${width * 0.8},${height * 0.4} ${width},${height * 0.2} L${width},${height} L0,${height} Z`;

      case 'blob':
        return `M0,${height * 0.9} C${width * 0.1},${height * 0.7} ${width * 0.15},${height * 0.3} ${width * 0.3},${height * 0.4} C${width * 0.45},${height * 0.5} ${width * 0.35},${height * 0.7} ${width * 0.5},${height * 0.6} C${width * 0.65},${height * 0.5} ${width * 0.75},${height * 0.3} ${width * 0.9},${height * 0.4} L${width},${height} L0,${height} Z`;

      case 'zigzag':
        return `M0,${height * 0.8} L${width * 0.1},${height * 0.6} L${width * 0.2},${height * 0.7} L${width * 0.3},${height * 0.5} L${width * 0.4},${height * 0.6} L${width * 0.5},${height * 0.4} L${width * 0.6},${height * 0.5} L${width * 0.7},${height * 0.3} L${width * 0.8},${height * 0.4} L${width * 0.9},${height * 0.2} L${width},${height * 0.3} L${width},${height} L0,${height} Z`;

      case 'organic':
      default:
        return `M0,${height * 0.85} C${width * 0.05},${height * 0.75} ${width * 0.08},${height * 0.65} ${width * 0.15},${height * 0.7} C${width * 0.22},${height * 0.75} ${width * 0.25},${height * 0.85} ${width * 0.35},${height * 0.8} C${width * 0.45},${height * 0.75} ${width * 0.48},${height * 0.6} ${width * 0.55},${height * 0.65} C${width * 0.62},${height * 0.7} ${width * 0.65},${height * 0.8} ${width * 0.75},${height * 0.75} C${width * 0.85},${height * 0.7} ${width * 0.9},${height * 0.5} ${width * 0.95},${height * 0.6} L${width},${height} L0,${height} Z`;
    }
  };

  const width = typeof window !== 'undefined' ? window.innerWidth * 2 : 2000;
  const path = getSvgPath();

  const strokeDasharray = () => {
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', path);
    const length = pathElement.getTotalLength();
    return length;
  };

  const getAnimatedStyle = () => {
    if (!animate || !isVisible) return {};

    const baseTransform = position === 'top' ? 'scaleY(-1)' : 'scaleY(1)';
    const parallaxOffset = animate ? scrollProgress * 10 : 0;
    const translateY = position === 'top' ? -parallaxOffset : parallaxOffset;

    return {
      transform: `${baseTransform} translateY(${translateY}px)`,
    };
  };

  return (
    <div
      className={`relative w-full ${position === 'top' ? 'block' : 'block'} ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        ref={dividerRef}
        className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 w-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          ...getAnimatedStyle(),
        }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definition */}
        <defs>
          <linearGradient
            id={`divider-gradient-${type}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.9" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="divider-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feFlood floodColor="#000000" floodOpacity="0.1"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Noise texture pattern */}
          <filter id="divider-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" opacity="0.03"/>
          </filter>
        </defs>

        {/* Main path */}
        <path
          d={path}
          fill={fill ? `url(#divider-gradient-${type})` : 'none'}
          stroke={fill ? 'none' : color}
          strokeWidth={fill ? 0 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#divider-shadow)"
          className="transition-all duration-700"
          style={{
            strokeDasharray: animate ? strokeDasharray() : undefined,
            strokeDashoffset: animate && isVisible ? 0 : strokeDasharray(),
            transition: 'stroke-dashoffset 1.5s ease-out, fill 0.7s ease-out',
          }}
        />

        {/* Noise overlay */}
        {fill && (
          <path
            d={path}
            fill={fill ? `url(#divider-gradient-${type})` : 'none'}
            filter="url(#divider-noise)"
            opacity={0.5}
          />
        )}

        {/* Animated highlights for premium feel */}
        {animate && isVisible && (
          <>
            <circle r="2" fill={color} opacity="0.6">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path={`M0,${height / 2} C${width * 0.25},${height * 0.3} ${width * 0.5},${height * 0.6} ${width * 0.75},${height * 0.4} ${width},${height / 2}`}
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle r="1.5" fill={color} opacity="0.4">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                begin="2s"
                path={`M${width * 0.1},${height * 0.6} C${width * 0.3},${height * 0.4} ${width * 0.6},${height * 0.7} ${width * 0.9},${height * 0.3}`}
              />
              <animate
                attributeName="opacity"
                values="0;0.4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>
          </>
        )}
      </svg>

      {/* Decorative elements */}
      {animate && isVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {type === 'organic' && (
            <>
              <div
                className="absolute w-2 h-2 bg-current/10 rounded-full animate-float-gentle"
                style={{ left: '10%', top: '30%' }}
              />
              <div
                className="absolute w-3 h-3 bg-current/8 rounded-full animate-float-gentle"
                style={{ left: '70%', top: '60%', animationDelay: '2s' }}
              />
              <div
                className="absolute w-1.5 h-1.5 bg-current/6 rounded-full animate-float-gentle"
                style={{ left: '85%', top: '20%', animationDelay: '4s' }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrganicDivider;