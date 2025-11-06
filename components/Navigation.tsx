import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-cream border-b border-taupe/20 sticky top-0 z-50 backdrop-blur-sm bg-cream/95">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-playfair text-2xl md:text-3xl font-bold text-charcoal transition-colors duration-fast group-hover:text-taupe">
              Elevate Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`font-montserrat text-xs uppercase tracking-wider font-semibold transition-colors duration-fast hover:text-taupe ${
                    router.pathname === item.path ? 'text-taupe' : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn-primary text-xs py-3 px-6">
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-taupe transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-taupe/20">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block font-montserrat text-sm uppercase tracking-wider font-semibold transition-colors duration-fast hover:text-taupe ${
                      router.pathname === item.path ? 'text-taupe' : 'text-charcoal'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-xs"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
