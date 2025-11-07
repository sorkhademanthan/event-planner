import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  guestCount: string;
  description: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'The Anderson Wedding',
      subtitle: 'A Garden Romance',
      category: 'wedding',
      location: 'The Hamptons, NY',
      guestCount: '150',
      description: 'An enchanting garden celebration featuring cascading florals, custom lighting, and an unforgettable reception under the stars.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&q=90',
      testimonial: {
        quote: 'Every detail was more beautiful than we imagined.',
        author: 'Sarah & Michael Anderson',
      },
    },
    {
      id: '2',
      title: 'TechCorp Annual Gala',
      subtitle: 'Innovation Meets Elegance',
      category: 'corporate',
      location: 'Metropolitan Museum, NYC',
      guestCount: '500',
      description: 'A sophisticated corporate gala with interactive displays, branded experiences, and seamless AV integration.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=90',
      testimonial: {
        quote: 'The best company event in our 20-year history.',
        author: 'Jennifer Martinez, VP Marketing',
      },
    },
    {
      id: '3',
      title: 'The Martinez Anniversary',
      subtitle: 'Five Decades Celebrated',
      category: 'private',
      location: 'Private Estate, Connecticut',
      guestCount: '80',
      description: 'An elegant celebration honoring 50 years of marriage with personalized details and a surprise vow renewal.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&q=90',
      testimonial: {
        quote: 'They captured our love story perfectly.',
        author: 'Maria & Carlos Martinez',
      },
    },
    {
      id: '4',
      title: 'Bryant Corporate Launch',
      subtitle: 'Product Reveal Experience',
      category: 'corporate',
      location: 'Hudson Yards, NYC',
      guestCount: '300',
      description: 'A high-energy product launch with immersive brand activations and a live-streamed reveal to global audiences.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop&q=90',
      testimonial: {
        quote: 'Flawless execution that exceeded all expectations.',
        author: 'David Bryant, CEO',
      },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'private', label: 'Private Parties' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>Portfolio - Elevate Events | Our Work Speaks for Itself</title>
        <meta 
          name="description" 
          content="Explore our portfolio of luxury weddings, corporate events, and private celebrations. See how we transform visions into unforgettable experiences." 
        />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio' }
        ]} 
      />

      {/* Hero Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="accent-text mb-3">Our Work</p>
          <h1 className="heading-1 mb-4 text-balance">
            Where Vision Becomes Reality
          </h1>
          <p className="body-text text-charcoal/80 max-w-2xl mx-auto mb-8">
            Every event tells a story. Explore how we've transformed celebrations into extraordinary experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-montserrat text-charcoal/70">
            <div className="flex items-center gap-2">
              <span className="text-taupe text-xl">✓</span>
              <span>200+ Events</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-taupe text-xl">✓</span>
              <span>15+ Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-taupe text-xl">✓</span>
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {portfolioItems.map((item) => (
              <article 
                key={item.id}
                className="group bg-cream rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-base"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-montserrat font-semibold text-charcoal uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-script text-lg mb-1">{item.subtitle}</p>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm font-montserrat opacity-90">
                      <span>📍 {item.location}</span>
                      <span>👥 {item.guestCount} Guests</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-charcoal/70 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Testimonial */}
                  {item.testimonial && (
                    <div className="border-l-4 border-taupe pl-4 mb-6">
                      <p className="text-sm text-charcoal/80 italic mb-2">
                        "{item.testimonial.quote}"
                      </p>
                      <p className="text-xs font-montserrat font-semibold text-charcoal/60">
                        — {item.testimonial.author}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      href={`/portfolio/${item.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-taupe text-white font-montserrat font-semibold text-sm rounded-lg hover:bg-taupe/90 hover:shadow-lg transition-all duration-base"
                    >
                      View More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-taupe text-taupe font-montserrat font-semibold text-sm rounded-lg hover:bg-taupe hover:text-white transition-all duration-base"
                    >
                      Plan Your Event
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="taupe">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-script text-2xl md:text-3xl text-soft-white mb-4">
            Ready for Your Own Story?
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-soft-white mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-sm md:text-base text-soft-white/80 mb-8 max-w-xl mx-auto">
            Schedule your complimentary consultation and start planning your unforgettable event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-taupe font-montserrat font-semibold text-sm rounded-lg hover:bg-soft-white hover:shadow-2xl transition-all duration-base"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-montserrat font-semibold text-sm rounded-lg hover:bg-white hover:text-taupe transition-all duration-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Portfolio;
