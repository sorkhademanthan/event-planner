import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, image }) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-square mb-6 overflow-hidden bg-taupe/5 rounded-lg">
        {image ? (
          <img 
            src={image} 
            alt={`${name} - ${role}`}
            className="w-full h-full object-cover transition-transform duration-slow ease-smooth group-hover:scale-105"
            loading="lazy"
            width="600"
            height="600"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-taupe/30">👤</span>
          </div>
        )}
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-base ease-smooth"></div>
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-2">
          {name}
        </h3>
        <p className="font-montserrat text-xs md:text-sm uppercase tracking-widest text-taupe mb-4 font-semibold">
          {role}
        </p>
        <p className="body-text text-sm md:text-base text-charcoal/70 leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
