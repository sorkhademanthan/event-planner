import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { label: 'Corporate Events', path: '/services#corporate' },
      { label: 'Weddings', path: '/services#weddings' },
      { label: 'Private Parties', path: '/services#private' },
      { label: 'Virtual Events', path: '/services#virtual' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/elevatevents',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/elevatevents',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/elevatevents',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'Pinterest', 
      url: 'https://pinterest.com/elevatevents',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-charcoal text-soft-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-grain"></div>
      
      {/* Newsletter Section - Premium Cream/Taupe Theme */}
      <div className="relative border-b border-soft-white/10 bg-cream">
        <div className="container-custom py-12 md:py-14">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-script text-2xl md:text-3xl text-taupe mb-3">
              Stay Inspired
            </p>
            <h3 className="font-playfair text-xl md:text-2xl font-bold mb-4 text-charcoal">
              Get Event Planning Tips & Inspiration
            </h3>
            <p className="body-text text-sm md:text-base text-charcoal/70 mb-6 max-w-xl mx-auto">
              Join our newsletter for exclusive insights and behind-the-scenes stories.
            </p>
            
            {/* Newsletter Form */}
            <form className="max-w-md mx-auto mb-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 whitespace-nowrap hover:shadow-xl text-xs"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <p className="text-xs text-charcoal/50 font-montserrat">
              Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container-custom py-10 md:py-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-5 group">
                <span className="font-playfair text-2xl md:text-3xl font-bold text-soft-white transition-colors duration-base group-hover:text-taupe">
                  Elevate Events
                </span>
              </Link>
              <p className="body-text text-sm text-soft-white/70 mb-6 max-w-sm leading-relaxed">
                Creating unforgettable celebrations with meticulous attention to detail since 2008.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm font-montserrat mb-6">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-2 text-soft-white/70 hover:text-taupe transition-colors duration-base"
                >
                  <span className="text-base">📞</span>
                  <span>(555) 123-4567</span>
                </a>
                <a 
                  href="mailto:hello@elevatevents.com" 
                  className="flex items-center gap-2 text-soft-white/70 hover:text-taupe transition-colors duration-base"
                >
                  <span className="text-base">✉️</span>
                  <span>hello@elevatevents.com</span>
                </a>
                <div className="flex items-start gap-2 text-soft-white/70">
                  <span className="text-base">📍</span>
                  <span>123 Event Street, New York, NY 10001</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-soft-white/5 border border-soft-white/10 flex items-center justify-center text-soft-white/70 hover:bg-taupe hover:border-taupe hover:text-soft-white hover:scale-110 transition-all duration-base"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-montserrat text-xs uppercase tracking-widest font-semibold mb-5 text-soft-white">
                Services
              </h4>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className="text-sm text-soft-white/60 hover:text-taupe transition-colors duration-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-montserrat text-xs uppercase tracking-widest font-semibold mb-5 text-soft-white">
                Company
              </h4>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className="text-sm text-soft-white/60 hover:text-taupe transition-colors duration-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-montserrat text-xs uppercase tracking-widest font-semibold mb-5 text-soft-white">
                Legal
              </h4>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className="text-sm text-soft-white/60 hover:text-taupe transition-colors duration-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-soft-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p className="text-xs font-montserrat text-soft-white/40">
              © {currentYear} Elevate Events. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs font-montserrat text-soft-white/40">
              <svg className="w-4 h-4 text-taupe" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Certified Event Planner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
