'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  height?: 'small' | 'medium' | 'large';
}

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  categories?: string[];
  onItemClick?: (item: PortfolioItem) => void;
  showLightbox?: boolean;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  items,
  categories = [],
  onItemClick,
  showLightbox = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  // Calculate masonry layout positions
  const calculateMasonryLayout = () => {
    const columns = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 :
                    typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;

    const heights = new Array(columns).fill(0);
    const positions = filteredItems.map((item, index) => {
      const minHeight = item.height === 'small' ? 200 : item.height === 'large' ? 400 : 300;
      const columnIndex = heights.indexOf(Math.min(...heights));
      const row = Math.floor(index / columns);
      const top = heights[columnIndex];
      const left = (100 / columns) * columnIndex;

      heights[columnIndex] += minHeight + 24; // 24px gap

      return {
        ...item,
        style: {
          position: 'absolute' as const,
          top: `${top}px`,
          left: `${left}%`,
          width: `${100 / columns}%`,
          height: `${minHeight}px`,
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hoveredItem === item.id ? 'scale(1.02)' : 'scale(1)',
          zIndex: hoveredItem === item.id ? 20 : 1
        }
      };
    });

    const totalHeight = Math.max(...heights);
    return { positions, totalHeight };
  };

  const [layout, setLayout] = useState(() => calculateMasonryLayout());

  useEffect(() => {
    const handleResize = () => {
      setLayout(calculateMasonryLayout());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [filteredItems, hoveredItem]);

  const openLightbox = (item: PortfolioItem) => {
    if (showLightbox) {
      setLightboxImage(item);
      document.body.style.overflow = 'hidden';
    } else {
      onItemClick?.(item);
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-organic cursor-glow ${
              selectedCategory === 'all'
                ? 'bg-charcoal text-soft-white'
                : 'glass-premium text-charcoal hover:bg-charcoal hover:text-soft-white'
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-montserrat text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-organic cursor-glow ${
                selectedCategory === category
                  ? 'bg-charcoal text-soft-white'
                  : 'glass-premium text-charcoal hover:bg-charcoal hover:text-soft-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Gallery */}
      <div
        ref={galleryRef}
        className="relative mx-auto"
        style={{ height: `${layout.totalHeight}px`, maxWidth: '1200px' }}
      >
        {layout.positions.map((item) => (
          <div
            key={item.id}
            className="absolute p-2 md:p-3"
            style={item.style}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              className={`relative w-full h-full rounded-organic overflow-hidden cursor-pointer group ${
                item.featured ? 'ring-2 ring-warm-taupe/30' : ''
              }`}
              onClick={() => openLightbox(item)}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Premium overlay with glassmorphism */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Content overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                    hoveredItem === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="glass-premium rounded-organic p-4">
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-soft-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-sm text-soft-white/80 mb-3">
                      {item.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-script text-warm-taupe text-lg">
                        {item.description}
                      </span>
                      <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-soft-white"
                        >
                          <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner accent for featured items */}
                {item.featured && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-warm-taupe rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-soft-white"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                )}

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 rounded-organic pointer-events-none transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    boxShadow: 'inset 0 0 0 2px rgba(250, 248, 245, 0.3)',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && showLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-soft-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-soft-white hover:bg-soft-white/20 transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-full max-w-4xl max-h-[80vh] rounded-organic overflow-hidden">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Lightbox caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/80 to-transparent">
                <div className="max-w-4xl mx-auto">
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-soft-white mb-3">
                    {lightboxImage.title}
                  </h3>
                  <p className="font-montserrat text-lg text-soft-white/80 mb-4">
                    {lightboxImage.category} • {lightboxImage.description}
                  </p>
                  {onItemClick && (
                    <button
                      onClick={() => {
                        onItemClick(lightboxImage);
                        closeLightbox();
                      }}
                      className="glass-premium text-soft-white px-8 py-3 font-montserrat text-sm font-semibold uppercase tracking-wider rounded-organic hover-lift cursor-glow"
                    >
                      View Project Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioGallery;