import React, { useState } from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'For weddings, we recommend booking 12-18 months in advance. For corporate events and private parties, 3-6 months is ideal. However, we can accommodate shorter timelines based on availability.',
    },
    {
      question: 'What is your planning process?',
      answer: 'We begin with a complimentary consultation to understand your vision, followed by a detailed proposal. Once engaged, we guide you through every step—from concept development to vendor coordination to flawless execution.',
    },
    {
      question: 'Do you work with my budget?',
      answer: 'Absolutely. We create custom proposals tailored to your budget and priorities. We\'re transparent about costs and work to maximize value at every price point.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We\'re based in New York City and serve the tri-state area. We also plan destination events nationwide and internationally with advance notice.',
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Elevate Events | Schedule Your Consultation</title>
        <meta 
          name="description" 
          content="Ready to plan your extraordinary event? Contact our luxury event planning team for a complimentary consultation. We respond within 24 hours." 
        />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Contact' }
        ]} 
      />

      {/* Hero Section */}
      <Section background="cream">
        <div className="text-center max-w-3xl mx-auto">
          <p className="accent-text mb-3">Get in Touch</p>
          <h1 className="heading-1 mb-4 text-balance">
            Let's Create Your Extraordinary Event
          </h1>
          <p className="body-text text-charcoal/80 max-w-2xl mx-auto mb-8">
            Share your vision with us. We'll respond within 24 hours to schedule your complimentary consultation.
          </p>
          
          {/* Quick Contact Info - Compact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-montserrat text-charcoal/70">
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-taupe transition-colors">
              <span>📞</span>
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:hello@elevateevents.com" className="flex items-center gap-2 hover:text-taupe transition-colors">
              <span>✉️</span>
              <span>hello@elevateevents.com</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Main Contact Form Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-cream p-8 md:p-10 lg:p-12 rounded-xl">
            <div className="mb-8 text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-3">
                Tell Us About Your Event
              </h2>
              <p className="text-sm text-charcoal/70">
                <span className="font-semibold text-taupe">Response time:</span> Within 24 hours, Monday-Friday
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              {/* Phone & Event Type Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                  >
                    <option value="">Select type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="virtual">Virtual Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Event Date & Guest Count Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventDate" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                  />
                </div>
                <div>
                  <label htmlFor="guestCount" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Guest Count
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                    placeholder="50"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40"
                >
                  <option value="">Select budget</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-montserrat text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                  Your Vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border-2 border-taupe/20 rounded-lg text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-taupe focus:border-taupe transition-all duration-base font-montserrat text-sm hover:border-taupe/40 resize-none"
                  placeholder="Tell us about your event vision, any specific ideas, or questions you have..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full hover:shadow-2xl text-base"
              >
                Send Message
              </button>

              <p className="text-xs text-charcoal/50 font-montserrat text-center">
                By submitting, you agree to our Privacy Policy. We never share your information.
              </p>
            </form>
          </div>

        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="accent-text mb-3">Common Questions</p>
            <h2 className="heading-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white p-6 rounded-lg border border-taupe/10">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-montserrat text-base font-semibold text-charcoal pr-4">
                    {faq.question}
                  </h3>
                  <svg className="w-5 h-5 text-taupe transition-transform duration-base group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-sm text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
               