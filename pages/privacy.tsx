import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

const Privacy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Privacy Policy' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>
          Privacy Policy
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="wireframe-box" style={{ minHeight: '600px', textAlign: 'left' }}>
            <p><strong>Privacy Policy Content</strong></p>
            <p style={{ marginTop: '20px' }}>
              1. Information We Collect<br/>
              2. How We Use Your Information<br/>
              3. Information Sharing<br/>
              4. Data Security<br/>
              5. Cookies<br/>
              6. Your Rights<br/>
              7. Changes to Policy<br/>
              8. Contact Us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
