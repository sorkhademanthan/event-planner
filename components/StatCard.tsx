import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, suffix = '' }) => {
  return (
    <div className="text-center group">
      <div className="mb-3">
        <span className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-soft-white transition-all duration-base ease-smooth group-hover:scale-105 inline-block">
          {number}
        </span>
        {suffix && (
          <span className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-soft-white/70">
            {suffix}
          </span>
        )}
      </div>
      <p className="font-montserrat text-xs md:text-sm uppercase tracking-widest text-soft-white/80 font-semibold">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
