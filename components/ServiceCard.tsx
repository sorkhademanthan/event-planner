'use client';

import React, { useState } from 'react';

export type ServiceMaterial = 'stone' | 'silk' | 'linen';

interface ServiceCardProps {
  title: string;
  description: string;
  material: ServiceMaterial;
  icon: React.ReactNode;
  features?: string[];
  ctaText?: string;
  onCTAClick?: () => void;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  material,
  icon,
  features = [],
  ctaText = "Learn More",
  onCTAClick,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Material-specific styling configuration
  const materialConfig = {
    stone: {
      background: 'bg-gradient-to-br from-stone to-stone/80',
      border: 'border-stone/30',
      shadow: 'shadow-floating',
      iconBg: 'bg-stone/10',
      textColor: 'text-charcoal',
      accent: 'text-warm-taupe'
    },
    silk: {
      background: 'bg-gradient-to-br from-silk to-linen',
      border: 'border-linen/50',
      shadow: 'shadow-organic',
      iconBg: 'bg-silk/50',
      textColor: 'text-charcoal',
      accent: 'text-moss'
    },
    linen: {
      background: 'bg-gradient-to-br from-linen to-sand',
      border: 'border-linen/40',
      shadow: 'shadow-material',
      iconBg: 'bg-linen/20',
      textColor: 'text-charcoal',
      accent: 'text-warm-taupe'
    }
  };

  const config = materialConfig[material];

  // Material-specific organic border radius
  const getOrganicBorder = () => {
    switch (material) {
      case 'stone':
        return 'rounded-organic-lg';
      case 'silk':
        return 'rounded-organic';
      case 'linen':
        return 'rounded-organic-sm';
      default:
        return 'rounded-xl';
    }
  };

  return (
    <div
      className={`group relative ${config.background} ${getOrganicBorder()} ${config.border} border p-8 md:p-10 transition-all duration-700 cursor-pointer hover-lift ${config.shadow}`}
      style={{
        animationDelay: `${delay}ms`,
        animation: `scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCTAClick}
    >
      {/* Premium texture overlay */}
      <div className="absolute inset-0 bg-grain-premium opacity-30 rounded-inherit" />

      {/* Material-specific pattern overlay */}
      <div className={`absolute inset-0 rounded-inherit transition-opacity duration-500 ${
        material === 'stone' ? 'bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="stone" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="2" cy="2" r="1" fill="%2336312f" opacity="0.03"/%3E%3Ccircle cx="22" cy="18" r="1" fill="%2336312f" opacity="0.03"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23stone)" /%3E%3C/svg%3E")]' :
        material === 'silk' ? 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="silk" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M0 30h30M30 0v60" stroke="%237a8b7a" stroke-width="0.5" opacity="0.08"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23silk)" /%3E%3C/svg%3E")]' :
        'bg-[url("data:image/svg+xml,%3Csvg width="50" height="50" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="linen" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse"%3E%3Cpath d="M0 25h25M25 0v50" stroke="%239a8f86" stroke-width="0.3" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23linen)" /%3E%3C/svg%3E")]'
      } ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Floating hover glow effect */}
      <div
        className={`absolute inset-0 rounded-inherit transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${
            material === 'stone' ? 'rgba(42, 37, 35, 0.05)' :
            material === 'silk' ? 'rgba(122, 139, 122, 0.08)' :
            'rgba(154, 143, 134, 0.06)'
          } 0%, transparent 70%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with material-specific styling */}
        <div className={`w-20 h-20 ${config.iconBg} rounded-organic flex items-center justify-center mb-6 transition-all duration-500 ${
          isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
        }`}>
          <div className="text-3xl text-charcoal/80">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-playfair text-2xl md:text-3xl font-bold ${config.textColor} mb-4 transition-colors duration-300 ${
          isHovered ? config.accent : ''
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`font-montserrat text-base md:text-lg ${config.textColor}/80 leading-relaxed mb-6 transition-all duration-500 ${
          isHovered ? 'translate-y-1' : 'translate-y-0'
        }`}>
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 font-montserrat text-sm ${config.textColor}/70 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : 'translate-x-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? config.accent : 'bg-charcoal/30'} transition-colors duration-300`} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA with animated underline */}
        <div className="flex items-center justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCTAClick?.();
            }}
            className={`font-montserrat text-sm font-semibold uppercase tracking-wider ${config.accent} transition-all duration-300 premium-focus cursor-glow py-2 relative group`}
          >
            <span className="relative z-10">{ctaText}</span>
            {/* Animated underline */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 ${config.accent.replace('text', 'bg')} transition-all duration-300 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
              style={{ backgroundColor: 'currentColor' }}
            />
          </button>

          {/* Arrow indicator */}
          <div className={`transform transition-transform duration-300 ${
            isHovered ? 'translate-x-2' : 'translate-x-0'
          }`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={config.accent}
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className={`absolute top-4 right-4 w-8 h-8 ${config.iconBg} rounded-full opacity-0 transition-opacity duration-500 ${
        isHovered ? 'opacity-50' : 'opacity-0'
      }`} />

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;