import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="wireframe-breadcrumb">
      <div className="wireframe-container">
        {items.map((item, index) => (
          <span key={index}>
            {item.path ? (
              <Link href={item.path} style={{ color: '#0070f3' }}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span style={{ margin: '0 8px' }}>&gt;</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
