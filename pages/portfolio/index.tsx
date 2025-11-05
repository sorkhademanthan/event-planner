import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const Portfolio: React.FC = () => {
  const portfolioItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Head>
        <title>Portfolio - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Portfolio' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>Portfolio</h1>

        {/* Filters */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="wireframe-box" style={{ display: 'inline-flex', gap: '10px', flexWrap: 'wrap' }}>
            <span>[All]</span>
            <span>[Corporate]</span>
            <span>[Wedding]</span>
            <span>[Private]</span>
            <span>[Virtual]</span>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="wireframe-grid wireframe-grid-3">
          {portfolioItems.map((item) => (
            <Link href={`/portfolio/${item}`} key={item} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="wireframe-card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
                [Event Image]<br/>
                <strong>Event Title {item}</strong><br/>
                Category | Date
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div className="wireframe-box" style={{ display: 'inline-block' }}>[Load More]</div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
