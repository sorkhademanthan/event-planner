import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

const Terms: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Terms of Service' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>
          Terms of Service
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="wireframe-box" style={{ minHeight: '600px', textAlign: 'left' }}>
            <p><strong>Terms of Service Content</strong></p>
            <p style={{ marginTop: '20px' }}>
              1. Introduction<br/>
              2. Services<br/>
              3. User Obligations<br/>
              4. Payment Terms<br/>
              5. Cancellation Policy<br/>
              6. Liability<br/>
              7. Intellectual Property<br/>
              8. Governing Law<br/>
              9. Contact Information
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
