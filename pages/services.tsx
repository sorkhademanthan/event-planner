import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';

const Services: React.FC = () => {
  const services = [
    {
      id: 'corporate',
      icon: '🏢',
      title: 'Corporate Events',
      tagline: 'Where Business Meets Brilliance',
      description: 'Elevate your brand presence with corporate events that inspire, engage, and leave lasting impressions on clients and employees alike.',
      features: [
        'Product launches and brand activations',
        'Executive conferences and summits',
        'Team building experiences',
        'Award ceremonies and galas',
        'Client appreciation events',
        'Holiday parties and celebrations',
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your brand and objectives' },
        { step: 'Strategy', description: 'Crafting a tailored event concept' },
        { step: 'Execution', description: 'Flawless delivery from start to finish' },
        { step: 'Follow-Up', description: 'Post-event analysis and insights' },
      ],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=90',
    },
    {
      id: 'weddings',
      icon: '💍',
      title: 'Weddings',
      tagline: 'Your Love Story, Beautifully Told',
      description: 'From intimate ceremonies to grand celebrations, we create wedding experiences that reflect your unique love story with elegance and sophistication.',
      features: [
        'Full-service wedding planning',
        'Partial planning and coordination',
        'Day-of coordination',
        'Destination wedding planning',
        'Rehearsal dinner coordination',
        'Vendor sourcing and management',
      ],
      process: [
        { step: 'Vision Session', description: 'Discovering your wedding dreams' },
        { step: 'Design', description: 'Creating your aesthetic and atmosphere' },
        { step: 'Coordination', description: 'Managing every vendor and detail' },
        { step: 'Celebration', description: 'Ensuring your day is flawless' },
      ],
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=800&fit=crop&q=90',
    },
    {
      id: 'private',
      icon: '🎉',
      title: 'Private Parties',
      tagline: 'Celebrations Worth Remembering',
      description: 'Whether it\'s a milestone birthday, anniversary, or intimate gathering, we create private celebrations that capture your personality and wow your guests.',
      features: [
        'Milestone birthday celebrations',
        'Anniversary parties',
        'Engagement parties',
        'Baby showers and gender reveals',
        'Retirement celebrations',
        'Holiday gatherings',
      ],
      process: [
        { step: 'Consultation', description: 'Understanding your vision' },
        { step: 'Planning', description: 'Designing every detail' },
        { step: 'Production', description: 'Bringing it all together' },
        { step: 'Hosting', description: 'You enjoy, we handle everything' },
      ],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&q=90',
    },
    {
      id: 'virtual',
      icon: '💻',
      title: 'Virtual Events',
      tagline: 'Connected Experiences, Anywhere',
      description: 'Engage remote audiences with virtual events that feel personal, professional, and polished—from webinars to full-scale digital conferences.',
      features: [
        'Virtual conferences and summits',
        'Webinars and workshops',
        'Hybrid event production',
        'Live streaming coordination',
        'Virtual networking experiences',
        'Technical production support',
      ],
      process: [
        { step: 'Platform Selection', description: 'Choosing the right technology' },
        { step: 'Content Strategy', description: 'Creating engaging experiences' },
        { step: 'Technical Setup', description: 'Ensuring flawless execution' },
        { step: 'Live Support', description: 'Managing the event in real-time' },
      ],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=90',
    },
  ];

  return (
    <>
      <Head>
        <title>Services - Elevate Events | Luxury Event Planning</title>
        <meta 
          name="description" 
          content="From corporate events to dream weddings, discover our comprehensive event planning services designed to create unforgettable experiences." 
        />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Services' }
        ]} 
      />

      {/* Hero Section */}
      <Section background="cream">
        <div className="text-center max-w-4xl mx-auto">
          <p className="accent-text mb-4">Our Services</p>
          <h1 className="heading-1 mb-6 text-balance">
            Crafting Extraordinary Experiences for Every Occasion
          </h1>
          <p className="body-text text-lg text-charcoal/80 max-w-prose mx-auto">
            From intimate gatherings to grand celebrations, we bring unparalleled expertise, creative vision, and meticulous attention to every event we touch.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      {services.map((service, index) => (
        <Section 
          key={service.id} 
          id={service.id}
          background={index % 2 === 0 ? 'white' : 'cream'}
        >
          <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image */}
            <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3]">
                <img 
                  src={service.image}
                  alt={`${service.title} - Luxury event planning`}
                  className="w-full h-full object-cover transition-transform duration-slow ease-smooth hover:scale-105"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
              
              {/* Floating Icon */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl shadow-lg">
                {service.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="mb-6">
                <h2 className="heading-2 mb-3">{service.title}</h2>
                <p className="font-script text-xl md:text-2xl text-taupe">
                  {service.tagline}
                </p>
              </div>
              
              <p className="body-text text-charcoal/80 mb-8">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="font-montserrat text-xs uppercase tracking-widest font-semibold text-charcoal mb-4">
                  What's Included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <span className="text-taupe mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Process */}
              <div className="mb-8">
                <h3 className="font-montserrat text-xs uppercase tracking-widest font-semibold text-charcoal mb-4">
                  Our Process
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.process.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-taupe/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-taupe">{idx + 1}</span>
                      </div>
                      <div>
                        <div className="font-montserrat text-sm font-semibold text-charcoal mb-1">
                          {item.step}
                        </div>
                        <div className="text-xs text-charcoal/60">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <Link 
                href="/contact"
                className="btn-primary"
              >
                Plan Your {service.title}
              </Link>
            </div>
          </div>
        </Section>
      ))}

      {/* Why Choose Us Section */}
      <Section background="taupe">
        <SectionHeader 
          accent="Why Choose Us"
          title="The Elevate Events Difference"
        />
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {[
            {
              icon: '🎯',
              title: 'Tailored Approach',
              description: 'No two events are alike. We customize every detail to reflect your unique vision and goals.',
            },
            {
              icon: '⚡',
              title: 'Seamless Execution',
              description: 'From concept to completion, our meticulous planning ensures flawless delivery every time.',
            },
            {
              icon: '💎',
              title: 'Premium Network',
              description: 'Access our curated roster of top-tier vendors, venues, and creative partners.',
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-4xl bg-soft-white rounded-full shadow-sm transition-all duration-base group-hover:scale-110 group-hover:shadow-lg">
                {benefit.icon}
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-soft-white mb-4">
                {benefit.title}
              </h3>
              <p className="body-text text-sm md:text-base text-soft-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment Section */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="accent-text mb-4">Investment</p>
          <h2 className="heading-2 mb-6">
            Transparent Pricing, Exceptional Value
          </h2>
          <p className="body-text text-charcoal/80 mb-8">
            Every event is unique, which is why we create custom proposals tailored to your specific needs and budget. Our comprehensive planning services start at $5,000 and scale based on your event's size, complexity, and requirements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-2xl font-playfair font-bold text-charcoal mb-2">$5K+</div>
              <div className="text-sm font-montserrat text-charcoal/60">Starting Investment</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-2xl font-playfair font-bold text-charcoal mb-2">24hr</div>
              <div className="text-sm font-montserrat text-charcoal/60">Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-2xl font-playfair font-bold text-charcoal mb-2">100%</div>
              <div className="text-sm font-montserrat text-charcoal/60">Satisfaction Guarantee</div>
            </div>
          </div>
          
          <Link href="/contact" className="btn-primary">
            Request a Custom Proposal
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="accent-text mb-4">Ready to Begin?</p>
          <h2 className="heading-2 mb-6 text-balance">
            Let's Create Your Extraordinary Event
          </h2>
          <p className="body-text mb-8 text-charcoal/80">
            Schedule a complimentary consultation to discuss your vision, explore possibilities, and discover how we can bring your event to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
