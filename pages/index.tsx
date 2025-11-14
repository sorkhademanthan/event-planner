import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServiceCard, { ServiceMaterial } from '../components/ServiceCard';
import PortfolioGallery, { PortfolioItem } from '../components/PortfolioGallery';
import TestimonialCarousel, { Testimonial } from '../components/TestimonialCarousel';
import OrganicDivider from '../components/OrganicDivider';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Service data with material metaphors
  const services = [
    {
      title: 'Corporate Events',
      description: 'Sophisticated corporate gatherings that reflect your brand\'s excellence and leave lasting impressions on clients and colleagues.',
      material: 'stone' as ServiceMaterial,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M3 10h18M3 7l9-4 9 4M5 21v-11M9 21v-11M15 21v-11M19 21v-11"/>
        </svg>
      ),
      features: ['Brand Integration', 'Professional Setup', 'Technical Support', 'Guest Experience Design'],
      delay: 0
    },
    {
      title: 'Weddings',
      description: 'Romantic celebrations crafted with meticulous attention to detail, creating moments of pure magic and timeless memories.',
      material: 'silk' as ServiceMaterial,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      features: ['Ceremony Design', 'Reception Planning', 'Vendor Coordination', 'Timeline Management'],
      delay: 200
    },
    {
      title: 'Private Parties',
      description: 'Intimate celebrations and social gatherings designed to bring people together in warm, welcoming environments.',
      material: 'linen' as ServiceMaterial,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        </svg>
      ),
      features: ['Theme Development', 'Menu Planning', 'Entertainment Booking', 'Atmosphere Creation'],
      delay: 400
    }
  ];

  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Tech Summit 2024',
      category: 'Corporate',
      image: '/api/placeholder/600/400',
      description: 'Innovation showcase',
      featured: true,
      height: 'large'
    },
    {
      id: '2',
      title: 'Garden Wedding',
      category: 'Wedding',
      image: '/api/placeholder/400/500',
      description: 'Romantic outdoor ceremony',
      featured: false,
      height: 'medium'
    },
    {
      id: '3',
      title: 'Product Launch',
      category: 'Corporate',
      image: '/api/placeholder/400/300',
      description: 'Brand unveiling',
      featured: false,
      height: 'small'
    },
    {
      id: '4',
      title: 'Birthday Gala',
      category: 'Private',
      image: '/api/placeholder/400/450',
      description: 'Milestone celebration',
      featured: false,
      height: 'medium'
    },
    {
      id: '5',
      title: 'Charity Ball',
      category: 'Corporate',
      image: '/api/placeholder/600/350',
      description: 'Fundraising excellence',
      featured: true,
      height: 'large'
    },
    {
      id: '6',
      title: 'Beach Ceremony',
      category: 'Wedding',
      image: '/api/placeholder/400/400',
      description: 'Coastal vows',
      featured: false,
      height: 'medium'
    }
  ];

  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechVentures Inc.',
      image: '/api/placeholder/150/150',
      quote: 'Elevate Events transformed our annual summit into an unforgettable experience. Their attention to detail and creative vision exceeded all our expectations.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael & Emma Rodriguez',
      role: 'Newlyweds',
      company: '',
      image: '/api/placeholder/150/150',
      quote: 'Our wedding was everything we dreamed of and more. The team captured our vision perfectly and executed every detail with such grace and professionalism.',
      rating: 5
    },
    {
      id: '3',
      name: 'James Chen',
      role: 'Marketing Director',
      company: 'Luxury Brands Co.',
      image: '/api/placeholder/150/150',
      quote: 'The product launch they orchestrated was nothing short of spectacular. Our guests were impressed, and the media coverage was phenomenal.',
      rating: 5
    }
  ];

  const portfolioCategories = ['Corporate', 'Wedding', 'Private'];

  if (!mounted) {
    return <div className="min-h-screen bg-soft-white" />;
  }

  return (
    <>
      <Head>
        <title>Elevate Events - Award-Winning Event Planning</title>
        <meta name="description" content="Transform your moments into unforgettable experiences through meticulous planning and artistic vision." />
        <meta name="keywords" content="luxury event planning, wedding planning, corporate events, private parties, event design" />
        <meta property="og:title" content="Elevate Events - Award-Winning Event Planning" />
        <meta property="og:description" content="Transform your moments into unforgettable experiences through meticulous planning and artistic vision." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <HeroSection
          title="Elevate Your Events"
          subtitle="Transforming moments into unforgettable experiences through meticulous planning and artistic vision."
          showCTA={true}
        />

        <OrganicDivider type="organic" color="#f8f6f3" position="bottom" />

        {/* Philosophy Section */}
        <section className="section bg-silk" id="philosophy">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto fade-in-up">
              <p className="font-script text-3xl md:text-4xl text-warm-taupe mb-8">
                "Where Dreams Meet Reality"
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-warm-taupe to-transparent mx-auto mb-12" />
              <p className="font-playfair text-2xl md:text-3xl text-charcoal leading-relaxed text-balance-enhanced">
                We believe that every event tells a story. Our passion lies in crafting those stories with elegance,
                creativity, and unwavering attention to detail, ensuring each celebration becomes a cherished memory.
              </p>
            </div>
          </div>
        </section>

        <OrganicDivider type="wave" color="#f4f1ed" position="bottom" />

        {/* Services Section */}
        <section className="section bg-linen" id="services">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Our Craft
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-taupe to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  onCTAClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <OrganicDivider type="curve" color="#e6e2dd" position="bottom" />

        {/* Portfolio Section */}
        <section className="section bg-stone" id="portfolio">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Curated Excellence
              </h2>
              <p className="font-montserrat text-lg text-charcoal/80 max-w-2xl mx-auto">
                Discover our portfolio of extraordinary events, each crafted with unique vision and executed with precision
              </p>
            </div>

            <PortfolioGallery
              items={portfolioItems}
              categories={portfolioCategories}
              onItemClick={(item) => {
                console.log('Portfolio item clicked:', item);
              }}
            />

            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio-page');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glass-premium text-charcoal px-10 py-4 font-montserrat text-sm font-semibold uppercase tracking-wider rounded-organic hover-lift cursor-glow"
              >
                View All Projects
              </button>
            </div>
          </div>
        </section>

        <OrganicDivider type="blob" color="#f8f6f3" position="bottom" />

        {/* Testimonials Section */}
        <TestimonialCarousel
          testimonials={testimonials}
          autoPlay={true}
          interval={6000}
        />

        <OrganicDivider type="organic" color="#f4f1ed" position="bottom" />

        {/* Blog Section */}
        <section className="section bg-linen" id="journal">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Inspired Journal
              </h2>
              <p className="font-script text-2xl text-warm-taupe mb-8">Thoughts & Inspiration</p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-taupe to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Blog Post 1 */}
              <article className="bg-soft-white rounded-organic p-8 hover-lift cursor-pointer">
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-stone to-linen rounded-organic mb-6 flex items-center justify-center">
                    <span className="text-charcoal/40 font-montserrat text-sm">Featured Image</span>
                  </div>
                  <span className="font-montserrat text-xs uppercase tracking-wider text-warm-taupe">Event Design</span>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mt-2 mb-4">
                    The Art of Tablescaping: Creating Memorable Dining Experiences
                  </h3>
                </div>
                <p className="font-montserrat text-charcoal/80 leading-relaxed mb-6">
                  Discover the secrets to creating stunning tablescapes that elevate your dining events from ordinary to extraordinary...
                </p>
                <a href="#" className="font-montserrat text-sm font-semibold uppercase tracking-wider text-warm-taupe group inline-flex items-center gap-2">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-soft-white rounded-organic p-8 hover-lift cursor-pointer">
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-linen to-sand rounded-organic mb-6 flex items-center justify-center">
                    <span className="text-charcoal/40 font-montserrat text-sm">Featured Image</span>
                  </div>
                  <span className="font-montserrat text-xs uppercase tracking-wider text-warm-taupe">Wedding Trends</span>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mt-2 mb-4">
                    Sustainable Celebrations: Eco-Friendly Wedding Planning Guide
                  </h3>
                </div>
                <p className="font-montserrat text-charcoal/80 leading-relaxed mb-6">
                  Learn how to plan a beautiful wedding that honors both your love story and our planet with these sustainable choices...
                </p>
                <a href="#" className="font-montserrat text-sm font-semibold uppercase tracking-wider text-warm-taupe group inline-flex items-center gap-2">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </article>
            </div>

            <div className="text-center mt-12">
              <a
                href="/blog"
                className="glass-premium text-charcoal px-10 py-4 font-montserrat text-sm font-semibold uppercase tracking-wider rounded-organic hover-lift cursor-glow"
              >
                Explore Journal
              </a>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx global>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Home;
