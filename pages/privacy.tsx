import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      title: 'What We Collect',
      icon: '📝',
      content: [
        {
          subtitle: 'Information You Give Us',
          text: 'When you fill out our contact form, schedule a consultation, or reach out via email, we collect:',
          list: [
            'Your name and contact details (email, phone)',
            'Event details (type, date, guest count, budget)',
            'Your event vision and preferences',
            'Any other information you choose to share',
          ],
        },
        {
          subtitle: 'Information We Collect Automatically',
          text: 'Like most websites, we automatically collect some technical information:',
          list: [
            'Browser type and device information',
            'IP address and general location (city/state level)',
            'Pages you visit and how long you stay',
            'How you found us (search engine, social media, referral)',
          ],
          note: 'We use this to improve your experience and understand how people use our site.',
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: '🎯',
      content: [
        {
          text: 'We use your information to provide you with excellent service:',
          list: [
            'Respond to your inquiries within 24 hours',
            'Prepare custom event proposals',
            'Coordinate with you during event planning',
            'Send you relevant event planning tips (only if you subscribe)',
            'Improve our website and services',
            'Comply with legal obligations',
          ],
        },
        {
          emphasis: 'We will never sell your information to third parties. Ever.',
        },
      ],
    },
    {
      title: 'Who We Share With',
      icon: '🤝',
      content: [
        {
          text: 'We only share your information when absolutely necessary:',
          list: [
            'Vendors we work with for your event (with your permission)',
            'Service providers who help run our website (hosting, email, analytics)',
            'Legal authorities if required by law',
          ],
        },
        {
          note: 'Any third-party service we use is carefully vetted and required to protect your data.',
        },
      ],
    },
    {
      title: 'Cookies & Tracking',
      icon: '🍪',
      content: [
        {
          text: 'We use cookies (small text files) to:',
          list: [
            'Remember your preferences',
            'Understand how you use our site',
            'Show you relevant content',
          ],
        },
        {
          text: 'You can control cookies through your browser settings. Disabling cookies may affect some website features.',
        },
      ],
    },
    {
      title: 'Your Rights & Choices',
      icon: '✅',
      content: [
        {
          text: 'You have complete control over your information:',
          list: [
            'Access: Request a copy of the data we have about you',
            'Correction: Ask us to update incorrect information',
            'Deletion: Request we delete your information (with some legal exceptions)',
            'Opt-Out: Unsubscribe from marketing emails anytime',
            'Portability: Request your data in a common format',
          ],
        },
        {
          cta: {
            text: 'To exercise any of these rights, simply email us at',
            link: 'hello@elevatevents.com',
          },
        },
      ],
    },
    {
      title: 'How We Protect Your Data',
      icon: '🔒',
      content: [
        {
          text: 'We take security seriously:',
          list: [
            'All data transmission is encrypted (SSL/TLS)',
            'We use secure, reputable hosting providers',
            'Access to your information is limited to authorized personnel only',
            'We regularly review and update our security practices',
          ],
        },
        {
          note: 'While we do everything we can to protect your data, no method of internet transmission is 100% secure. We cannot guarantee absolute security.',
        },
      ],
    },
    {
      title: 'Children\'s Privacy',
      icon: '👶',
      content: [
        {
          text: 'Our services are not intended for children under 13. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.',
        },
      ],
    },
    {
      title: 'Changes to This Policy',
      icon: '📅',
      content: [
        {
          text: 'We may update this policy occasionally to reflect changes in our practices or legal requirements. We\'ll notify you of significant changes by:',
          list: [
            'Posting the updated policy with a new "Last Updated" date',
            'Sending an email if you\'re on our mailing list',
            'Displaying a notice on our website',
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Elevate Events</title>
        <meta 
          name="description" 
          content="How we collect, use, and protect your information. Read our transparent privacy policy." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Privacy Policy' }
        ]} 
      />

      {/* Hero Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="accent-text mb-3">Privacy Policy</p>
          <h1 className="heading-1 mb-4">
            Your Privacy Matters to Us
          </h1>
          <p className="body-text text-charcoal/80 max-w-2xl mx-auto mb-6">
            We believe in being transparent about how we collect and use your information. This policy explains everything in plain English—no legal jargon.
          </p>
          <p className="text-sm font-montserrat text-charcoal/60">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </Section>

      {/* Quick Summary */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-taupe/10 p-8 md:p-10 rounded-xl border-l-4 border-taupe">
            <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">
              The Quick Version
            </h2>
            <div className="space-y-3 body-text text-charcoal/80">
              <p className="flex items-start gap-3">
                <span className="text-taupe text-xl flex-shrink-0">✓</span>
                <span>We collect only what we need to serve you better</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-taupe text-xl flex-shrink-0">✓</span>
                <span>We never sell your information to anyone</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-taupe text-xl flex-shrink-0">✓</span>
                <span>You can request your data or ask us to delete it anytime</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-taupe text-xl flex-shrink-0">✓</span>
                <span>We protect your information with industry-standard security</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Content */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.subtitle && (
                        <h3 className="font-montserrat text-lg font-semibold text-charcoal mb-3">
                          {item.subtitle}
                        </h3>
                      )}
                      
                      {item.text && (
                        <p className="body-text text-charcoal/80 mb-3">
                          {item.text}
                        </p>
                      )}

                      {item.list && (
                        <ul className="space-y-2 ml-4">
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex} className="flex items-start gap-3 text-charcoal/70">
                              <span className="text-taupe mt-1">•</span>
                              <span className="body-text text-sm">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.emphasis && (
                        <div className="bg-taupe/5 p-4 rounded-lg border-l-4 border-taupe mt-4">
                          <p className="font-montserrat text-sm font-semibold text-charcoal">
                            {item.emphasis}
                          </p>
                        </div>
                      )}

                      {item.note && (
                        <p className="text-sm text-charcoal/60 italic mt-3 pl-4 border-l-2 border-taupe/30">
                          {item.note}
                        </p>
                      )}

                      {item.cta && (
                        <p className="mt-4 text-sm">
                          <span className="text-charcoal/70">{item.cta.text} </span>
                          <a 
                            href={`mailto:${item.cta.link}`}
                            className="font-semibold text-taupe hover:text-charcoal transition-colors"
                          >
                            {item.cta.link}
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-cream p-8 md:p-10 rounded-xl">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Questions About Privacy?
            </h2>
            <p className="body-text text-charcoal/80 mb-6">
              We're here to help. If you have any questions about how we handle your information, we'd be happy to clarify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@elevatevents.com"
                className="btn-primary"
              >
                Email Us
              </a>
              <a 
                href="/contact"
                className="btn-secondary"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Privacy;
