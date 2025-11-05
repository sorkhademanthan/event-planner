import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Contact' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>Contact Us</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Contact Form */}
          <div className="wireframe-card">
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Contact Form</h2>
            <div className="wireframe-box" style={{ minHeight: '400px', textAlign: 'left' }}>
              <p>Name [___________]</p>
              <p>Email [___________]</p>
              <p>Phone [___________]</p>
              <p>Event Type [___________]</p>
              <p>Message<br/>[________________]</p>
              <div style={{ marginTop: '20px' }} className="wireframe-box">[Submit]</div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="wireframe-card">
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Contact Details</h2>
            <div style={{ textAlign: 'left' }}>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> info@eventplanner.com</p>
              <p><strong>Address:</strong><br/>123 Event Street<br/>City, State 12345</p>
              <div style={{ marginTop: '30px' }}>
                <strong>Office Hours:</strong><br/>
                Monday - Friday: 9am - 6pm<br/>
                Saturday: 10am - 4pm<br/>
                Sunday: Closed
              </div>
              <div style={{ marginTop: '30px' }}>
                <strong>Social Media:</strong><br/>
                [Instagram] [Facebook] [LinkedIn]
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <section className="wireframe-section">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Find Us</h2>
          <div className="wireframe-box" style={{ minHeight: '400px' }}>
            [Google Maps Embed]
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
