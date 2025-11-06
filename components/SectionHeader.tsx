import React from 'react';

interface SectionHeaderProps {
  accent?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  accent, 
  title, 
  description,
  centered = true 
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {accent && (
        <p className={`accent-text mb-3 md:mb-4 ${!centered ? 'text-left' : ''}`}>
          {accent}
        </p>
      )}
      <h2 className="heading-2 mb-4 md:mb-6 text-balance">
        {title}
      </h2>
      {description && (
        <p className={`body-text text-charcoal/80 ${centered ? 'max-w-prose mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
