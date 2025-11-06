import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import TeamCard from '@/components/TeamCard';
import ValueCard from '@/components/ValueCard';
import StatCard from '@/components/StatCard';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      bio: 'With 15 years of experience crafting unforgettable events, Sarah brings vision and meticulous attention to every celebration.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Event Coordinator',
      bio: 'Michael\'s expertise in logistics and vendor relations ensures flawless execution from concept to completion.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Design Specialist',
      bio: 'Elena transforms spaces into breathtaking environments that perfectly capture each client\'s unique story.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&q=80',
    },
  ];

  const values = [
    {
      icon: '✨',
      title: 'Excellence',
      description: 'We pursue perfection in every detail, creating experiences that exceed expectations and leave lasting impressions.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Your vision becomes our mission. We collaborate closely to bring your dreams to life with personalized attention.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We blend timeless elegance with fresh creativity, ensuring each event is both sophisticated and uniquely memorable.',
    },
    {
      icon: '🎯',
      title: 'Integrity',
      description: 'Transparent communication and honest guidance build the trust that makes extraordinary events possible.',
    },
  ];

  const stats = [
    { number: '200', suffix: '+', label: 'Events Planned' },
    { number: '15', suffix: '+', label: 'Years Experience' },
    { number: '98', suffix: '%', label: 'Client Satisfaction' },
    { number: '50', suffix: '+', label: 'Industry Awards' },
  ];

  return (
    <>
      <Head>
        <title>About Us - Elevate Events | Luxury Event Planning</title>
        <meta 
          name="description" 
          content="Meet the team behind unforgettable celebrations. With 15+ years of experience, we craft luxury events that exceed expectations." 
        />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'About' }
        ]} 
      />

      {/* Hero Section */}
      <Section background="cream">
        <div className="text-center max-w-4xl mx-auto">
          <p className="accent-text mb-4">About Us</p>
          <h1 className="heading-1 mb-6 text-balance">
            Where Vision Meets Flawless Execution
          </h1>
          <p className="body-text text-lg text-charcoal/80 max-w-prose mx-auto">
            For over 15 years, we've been transforming dreams into reality—crafting celebrations that don't just meet expectations, but create moments that linger in memory long after the last guest departs.
          </p>
        </div>
      </Section>

      {/* Company Story - FIXED */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image - Equal weight on desktop */}
          <div className="relative w-full overflow-hidden rounded-lg order-2 lg:order-1">
            <div className="aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop&q=90"
                alt="Luxury wedding reception with elegant table settings and floral arrangements"
                className="w-full h-full object-cover"
                loading="eager"
                width="1200"
                height="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Content - Equal weight on desktop */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <p className="accent-text mb-3 text-left">Our Story</p>
              <h2 className="heading-2 mb-6 text-left">
                Passion Refined by Experience
              </h2>
              <div className="space-y-4 body-text">
                <p>
                  It began with a simple belief: every celebration deserves to be extraordinary. What started as a passion project in 2008 has grown into a full-service luxury event planning firm, but our commitment remains unchanged.
                </p>
                <p>
                  We understand that behind every event is a story waiting to be told—a love story, a milestone, a vision brought to life. Our approach combines meticulous planning with creative artistry, ensuring that every detail serves a purpose and contributes to an unforgettable experience.
                </p>
                <p>
                  Today, we're proud to have orchestrated over 200 celebrations across the country, from intimate gatherings to grand galas. But the number we're most proud of? The 98% of clients who say their event exceeded their wildest expectations.
                </p>
              </div>
              <div className="mt-8">
                <a href="#team" className="btn-secondary">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section background="taupe">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Section>

      {/* Values & Mission */}
      <Section background="cream">
        <SectionHeader 
          accent="Our Values"
          title="The Principles That Guide Us"
          description="These aren't just words on a wall—they're the foundation of every event we create and every relationship we build."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <SectionHeader 
          accent="Our Team"
          title="Meet the Visionaries"
          description="A dedicated team of creatives, coordinators, and perfectionists who share one goal: making your event extraordinary."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </Section>

      {/* Awards & Recognition */}
      <Section background="cream">
        <SectionHeader 
          accent="Recognition"
          title="Industry Excellence"
          description="Our commitment to perfection has been recognized by industry leaders and, more importantly, by the clients we serve."
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {[
            { year: '2023', award: 'Best Luxury Planner' },
            { year: '2022', award: 'Innovation Award' },
            { year: '2021', award: 'Top 10 Planners' },
            { year: '2020', award: 'Excellence Award' },
          ].map((award, index) => (
            <div 
              key={index} 
              className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg transition-all duration-base ease-smooth hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl mb-4 transition-transform duration-base ease-smooth group-hover:scale-110">
                🏆
              </div>
              <div className="font-playfair text-3xl font-bold text-charcoal mb-2">
                {award.year}
              </div>
              <p className="font-montserrat text-sm font-medium text-charcoal/70">
                {award.award}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <p className="accent-text mb-4">Let's Create Together</p>
          <h2 className="heading-2 mb-6 text-balance">
            Ready to Start Planning Your Extraordinary Event?
          </h2>
          <p className="body-text mb-8 text-charcoal/80">
            Whether you're envisioning an intimate gathering or a grand celebration, we're here to bring your vision to life with the same passion and precision we bring to every event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="/portfolio" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
