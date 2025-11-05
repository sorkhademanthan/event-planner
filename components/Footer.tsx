import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="wireframe-footer">
      <div className="wireframe-container">
        <div className="wireframe-grid wireframe-grid-4">
          <div className="wireframe-box">
            <div>
              <strong>EVENT PLANNER</strong>
              <p style={{ fontSize: '14px', marginTop: '10px' }}>Creating unforgettable moments</p>
            </div>
          </div>
          <div className="wireframe-box">
            <div>
              <strong>Quick Links</strong>
              <ul style={{ listStyle: 'none', marginTop: '10px', fontSize: '14px' }}>
                <li><Link href="/about" style={{ color: 'white' }}>About</Link></li>
                <li><Link href="/services" style={{ color: 'white' }}>Services</Link></li>
                <li><Link href="/portfolio" style={{ color: 'white' }}>Portfolio</Link></li>
              </ul>
            </div>
          </div>
          <div className="wireframe-box">
            <div>
              <strong>Contact</strong>
              <p style={{ fontSize: '14px', marginTop: '10px' }}>
                Phone: (555) 123-4567<br />
                Email: info@eventplanner.com
              </p>
            </div>
          </div>
          <div className="wireframe-box">
            <div>
              <strong>Social Media</strong>
              <p style={{ fontSize: '14px', marginTop: '10px' }}>
                Instagram | Facebook | LinkedIn
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #444' }}>
          <p style={{ fontSize: '14px' }}>© 2024 Event Planner. All rights reserved.</p>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            <Link href="/terms" style={{ color: 'white', marginRight: '15px' }}>Terms of Service</Link>
            <Link href="/privacy" style={{ color: 'white' }}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
