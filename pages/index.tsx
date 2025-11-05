import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Event Planner - Home</title>
        <meta name="description" content="Professional event planning services" />
      </Head>

      {/* Hero Section */}
      <section className="wireframe-hero">
        <div className="wireframe-container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>HERO SECTION</h1>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>&quot;Plan Your Perfect Event&quot;</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div className="wireframe-box" style={{ minWidth: '150px' }}>[Get Started]</div>
            <div className="wireframe-box" style={{ minWidth: '150px' }}>[View Portfolio]</div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="wireframe-section">
        <div className="wireframe-container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Featured Services</h2>
          <div className="wireframe-grid wireframe-grid-3">
            <div className="wireframe-card">Service 1<br/>Corporate Events</div>
            <div className="wireframe-card">Service 2<br/>Weddings</div>
            <div className="wireframe-card">Service 3<br/>Private Parties</div>
          </div>
        </div>
      </section>

      {/* Recent Portfolio */}
      <section className="wireframe-section" style={{ background: '#f5f5f5' }}>
        <div className="wireframe-container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Recent Portfolio</h2>
          <div className="wireframe-grid wireframe-grid-3">
            <div className="wireframe-card">Event 1<br/>[Image]</div>
            <div className="wireframe-card">Event 2<br/>[Image]</div>
            <div className="wireframe-card">Event 3<br/>[Image]</div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <div className="wireframe-box" style={{ display: 'inline-block' }}>[View All Projects]</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="wireframe-section">
        <div className="wireframe-container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Testimonials Carousel</h2>
          <div className="wireframe-box" style={{ minHeight: '200px' }}>
            &quot;Client testimonial with photo and name&quot;<br/>
            [← Previous] [Next →]
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="wireframe-section" style={{ background: '#f5f5f5' }}>
        <div className="wireframe-container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Latest Blog Posts</h2>
          <div className="wireframe-grid wireframe-grid-2">
            <div className="wireframe-card">
              Post 1<br/>
              [Featured Image]<br/>
              Title & Excerpt<br/>
              [Read More]
            </div>
            <div className="wireframe-card">
              Post 2<br/>
              [Featured Image]<br/>
              Title & Excerpt<br/>
              [Read More]
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
