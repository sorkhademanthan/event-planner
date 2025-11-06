import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="bg-cream border-b border-taupe/10">
      <div className="container-custom py-4">
        <nav className="flex items-center text-sm">
          {items.map((item, index) => (
            <span key={index} className="flex items-center">
              {item.path ? (
                <Link 
                  href={item.path}
                  className="font-montserrat text-charcoal/60 hover:text-taupe transition-colors duration-fast"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-montserrat text-charcoal font-medium">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <svg className="w-4 h-4 mx-2 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
