import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/Breadcrumb';

const PortfolioItem: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Event Case Study {id} - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: `Event ${id}` }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center', padding: '40px 0 10px' }}>
          Event Title {id}
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          Category | Date | Location
        </p>

        {/* Hero Image */}
        <div className="wireframe-box" style={{ minHeight: '400px', marginBottom: '40px' }}>
          [Hero Image]
        </div>

        {/* Project Overview */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Project Overview</h2>
          <div className="wireframe-grid wireframe-grid-2">
            <div className="wireframe-card">
              <strong>Client:</strong><br/>
              Client Name
            </div>
            <div className="wireframe-card">
              <strong>Challenge:</strong><br/>
              Description of the challenge
            </div>
            <div className="wireframe-card">
              <strong>Solution:</strong><br/>
              How we solved it
            </div>
            <div className="wireframe-card">
              <strong>Results:</strong><br/>
              Outcomes and metrics
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Image Gallery</h2>
          <div className="wireframe-grid wireframe-grid-3">
            <div className="wireframe-box" style={{ minHeight: '250px' }}>[Photo 1]</div>
            <div className="wireframe-box" style={{ minHeight: '250px' }}>[Photo 2]</div>
            <div className="wireframe-box" style={{ minHeight: '250px' }}>[Photo 3]</div>
            <div className="wireframe-box" style={{ minHeight: '250px' }}>[Photo 4]</div>
            <div className="wireframe-box" style={{ minHeight: '250px' }}>[Photo 5]</div>
            <div className="wireframe-box" style={{ minHeight: '250px' }}>[Photo 6]</div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="wireframe-section" style={{ background: '#f5f5f5', padding: '40px 20px', margin: '40px -20px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Client Testimonial</h2>
          <div className="wireframe-box" style={{ minHeight: '150px' }}>
            &quot;Detailed client quote and feedback&quot;<br/>
            - Client Name, Position
          </div>
        </section>

        {/* Related Projects */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Related Projects</h2>
          <div className="wireframe-grid wireframe-grid-3">
            <div className="wireframe-card">Related Event 1</div>
            <div className="wireframe-card">Related Event 2</div>
            <div className="wireframe-card">Related Event 3</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioItem;
