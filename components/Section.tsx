import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'cream' | 'taupe' | 'white';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  id 
}) => {
  const bgColors = {
    cream: 'bg-cream',
    taupe: 'bg-taupe',
    white: 'bg-white',
  };

  return (
    <section 
      id={id}
      className={`section ${bgColors[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
