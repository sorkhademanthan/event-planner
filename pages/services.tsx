import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Services - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Services' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>Our Services</h1>

        {/* Service Categories */}
        <section className="wireframe-section">
          <div className="wireframe-card" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Corporate Events</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>[Icon]</div>
              <div>Description of corporate event services</div>
              <div className="wireframe-box">[Learn More]</div>
            </div>
          </div>

          <div className="wireframe-card" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Weddings</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>[Icon]</div>
              <div>Description of wedding planning services</div>
              <div className="wireframe-box">[Learn More]</div>
            </div>
          </div>

          <div className="wireframe-card" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Private Parties</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>[Icon]</div>
              <div>Description of private party services</div>
              <div className="wireframe-box">[Learn More]</div>
            </div>
          </div>

          <div className="wireframe-card">
            <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>Virtual Events</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>[Icon]</div>
              <div>Description of virtual event services</div>
              <div className="wireframe-box">[Learn More]</div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="wireframe-section" style={{ background: '#f5f5f5', padding: '40px 20px', margin: '40px -20px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Pricing Tiers</h2>
          <div className="wireframe-grid wireframe-grid-3">
            <div className="wireframe-card">
              <strong>Basic</strong><br/>
              $$$<br/>
              • Feature 1<br/>
              • Feature 2<br/>
              • Feature 3<br/>
              <div className="wireframe-box" style={{ marginTop: '20px' }}>[Choose Plan]</div>
            </div>
            <div className="wireframe-card" style={{ border: '3px solid #0070f3' }}>
              <strong>Pro</strong><br/>
              $$$$<br/>
              • Feature 1<br/>
              • Feature 2<br/>
              • Feature 3<br/>
              • Feature 4<br/>
              <div className="wireframe-box" style={{ marginTop: '20px', background: '#0070f3', color: 'white' }}>[Choose Plan]</div>
            </div>
            <div className="wireframe-card">
              <strong>Premium</strong><br/>
              $$$$$<br/>
              • Feature 1<br/>
              • Feature 2<br/>
              • Feature 3<br/>
              • Feature 4<br/>
              • Feature 5<br/>
              <div className="wireframe-box" style={{ marginTop: '20px' }}>[Choose Plan]</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
