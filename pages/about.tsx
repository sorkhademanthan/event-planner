import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'About' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>About Us</h1>

        {/* Company Story */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Company Story</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="wireframe-box" style={{ minHeight: '300px' }}>[Image]</div>
            <div className="wireframe-box" style={{ minHeight: '300px' }}>[Text Content]<br/>Our story and mission</div>
          </div>
        </section>

        {/* Team Members */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Team Members</h2>
          <div className="wireframe-grid wireframe-grid-3">
            <div className="wireframe-card">
              [Photo]<br/>
              Name<br/>
              Role
            </div>
            <div className="wireframe-card">
              [Photo]<br/>
              Name<br/>
              Role
            </div>
            <div className="wireframe-card">
              [Photo]<br/>
              Name<br/>
              Role
            </div>
          </div>
        </section>

        {/* Values & Mission */}
        <section className="wireframe-section" style={{ background: '#f5f5f5', padding: '40px 20px', margin: '40px -20px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Values & Mission</h2>
          <div className="wireframe-box" style={{ minHeight: '200px' }}>
            Our core values and mission statement
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Awards & Recognition</h2>
          <div className="wireframe-grid wireframe-grid-4">
            <div className="wireframe-box">Award 1</div>
            <div className="wireframe-box">Award 2</div>
            <div className="wireframe-box">Award 3</div>
            <div className="wireframe-box">Award 4</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
