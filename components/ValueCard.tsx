import React from 'react';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group text-center">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl bg-white rounded-full shadow-sm transition-all duration-base ease-smooth group-hover:scale-110 group-hover:shadow-lg">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="body-text text-sm md:text-base text-charcoal/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
