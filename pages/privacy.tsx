import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Elevate Events LLC';

  return (
    <>
      <Head>
        <title>Privacy Policy - Elevate Events</title>
        <meta 
          name="description" 
          content="Our commitment to protecting your privacy and personal information." 
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
          <h1 className="heading-2 mb-4">Privacy Policy</h1>
          <p className="text-sm font-montserrat text-charcoal/60 mb-3">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-sm text-charcoal/70 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Summary */}
          <div className="bg-taupe/10 p-8 md:p-10 rounded-xl border-l-4 border-taupe mb-12">
            <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
              Summary
            </h2>
            <ul className="space-y-3">
              {[
                'We collect information you provide and basic usage data',
                'We never sell your personal information',
                'You have the right to access, correct, or delete your data',
                'We comply with GDPR, CCPA, and applicable privacy laws',
                'We use industry-standard security measures',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-charcoal/80">
                  <span className="text-taupe text-lg flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-10">
            
            {/* Section 1: Information Collection */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                1. Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-montserrat text-base md:text-lg font-semibold text-charcoal mb-3">
                    1.1 Information You Provide
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 mb-3">
                    We collect information when you:
                  </p>
                  <ul className="text-sm md:text-base text-charcoal/70 space-y-2 ml-6">
                    <li>• Fill out contact or inquiry forms</li>
                    <li>• Schedule consultations or book services</li>
                    <li>• Subscribe to our newsletter</li>
                    <li>• Communicate via email, phone, or in-person</li>
                    <li>• Provide feedback or participate in surveys</li>
                  </ul>
                  <p className="text-sm md:text-base text-charcoal/70 mt-3">
                    This may include: name, email, phone number, address, event details (date, location, type, budget), preferences, and any other information you share.
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-base md:text-lg font-semibold text-charcoal mb-3">
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 mb-3">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="text-sm md:text-base text-charcoal/70 space-y-2 ml-6">
                    <li>• Device information (browser, OS, device type)</li>
                    <li>• Usage data (pages visited, time spent, links clicked)</li>
                    <li>• IP address and approximate location</li>
                    <li>• Referral source</li>
                    <li>• Cookies and tracking technologies data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-montserrat text-base md:text-lg font-semibold text-charcoal mb-3">
                    1.3 Third-Party Information
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70">
                    We may receive information from analytics services (Google Analytics), social media platforms, and business partners who help us provide services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Information */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                2. How We Use Your Information
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p><strong className="text-charcoal">Service Delivery:</strong> Respond to inquiries, provide consultations, plan events, and fulfill contracts.</p>
                <p><strong className="text-charcoal">Communication:</strong> Send confirmations, updates, administrative messages, and respond to requests.</p>
                <p><strong className="text-charcoal">Marketing:</strong> Send newsletters and promotional materials (only with consent or where permitted). You can unsubscribe anytime.</p>
                <p><strong className="text-charcoal">Improvement:</strong> Analyze website usage, improve services, and enhance user experience.</p>
                <p><strong className="text-charcoal">Legal Compliance:</strong> Comply with legal obligations, resolve disputes, and protect our rights.</p>
              </div>
            </div>

            {/* Section 3: Information Sharing */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                3. How We Share Your Information
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4 font-semibold">
                We do not sell your personal information.
              </p>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p><strong className="text-charcoal">Service Providers:</strong> Third-party vendors (hosting, email, analytics, payment processing) bound by confidentiality agreements.</p>
                <p><strong className="text-charcoal">Event Vendors:</strong> With your consent, we share necessary information with venues, caterers, and other vendors for your event.</p>
                <p><strong className="text-charcoal">Legal Requirements:</strong> When required by law, court order, or to protect rights and safety.</p>
                <p><strong className="text-charcoal">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified).</p>
              </div>
            </div>

            {/* Section 4: Cookies */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                4. Cookies and Tracking
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                We use cookies and similar technologies to enhance your experience. Cookies are small text files stored on your device.
              </p>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p><strong className="text-charcoal">Essential Cookies:</strong> Required for website functionality.</p>
                <p><strong className="text-charcoal">Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics).</p>
                <p><strong className="text-charcoal">Marketing Cookies:</strong> Track your preferences for personalized content.</p>
              </div>
              
              <p className="text-sm md:text-base text-charcoal/70 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Section 5: Your Rights */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                5. Your Rights and Choices
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                Depending on your location, you have the following rights:
              </p>
              
              <ul className="space-y-3 text-sm md:text-base text-charcoal/70 ml-6">
                <li><strong className="text-charcoal">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-charcoal">Correction:</strong> Request correction of inaccurate information</li>
                <li><strong className="text-charcoal">Deletion:</strong> Request deletion of your data (with some exceptions)</li>
                <li><strong className="text-charcoal">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong className="text-charcoal">Portability:</strong> Receive your data in a common format</li>
                <li><strong className="text-charcoal">Object:</strong> Object to certain data processing</li>
                <li><strong className="text-charcoal">Restrict:</strong> Request restriction of processing</li>
              </ul>
              
              <p className="text-sm md:text-base text-charcoal/70 mt-6">
                To exercise these rights, email us at{' '}
                <a href="mailto:hello@elevatevents.com" className="text-taupe hover:text-charcoal font-semibold">
                  hello@elevatevents.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* Section 6: Data Security */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                6. Data Security
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                We implement industry-standard security measures:
              </p>
              
              <ul className="text-sm md:text-base text-charcoal/70 space-y-2 ml-6">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• Secure, reputable hosting providers</li>
                <li>• Access controls and authentication</li>
                <li>• Regular security reviews and updates</li>
              </ul>
              
              <p className="text-sm md:text-base text-charcoal/70 mt-4 italic">
                Note: While we take every precaution, no internet transmission is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 7: Data Retention */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                7. Data Retention
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70">
                We retain your information only as long as necessary for the purposes outlined in this policy, to comply with legal obligations, resolve disputes, and enforce agreements. When no longer needed, we securely delete or anonymize your data.
              </p>
            </div>

            {/* Section 8: Children's Privacy */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                8. Children's Privacy
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70">
                Our services are not directed to individuals under 13 years old. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately, and we will delete it.
              </p>
            </div>

            {/* Section 9: International Transfers */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                9. International Data Transfers
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy and applicable laws.
              </p>
            </div>

            {/* Section 10: Third-Party Links */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                10. Third-Party Links
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70">
                Our website may contain links to third-party sites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
              </p>
            </div>

            {/* Section 11: California Privacy Rights */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                11. California Privacy Rights (CCPA)
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                California residents have additional rights:
              </p>
              
              <ul className="text-sm md:text-base text-charcoal/70 space-y-2 ml-6">
                <li>• Right to know what personal information is collected</li>
                <li>• Right to know if personal information is sold or disclosed</li>
                <li>• Right to opt-out of the sale of personal information</li>
                <li>• Right to deletion of personal information</li>
                <li>• Right to non-discrimination for exercising rights</li>
              </ul>
              
              <p className="text-sm md:text-base text-charcoal/70 mt-4">
                We do not sell personal information. To exercise your rights, contact us at{' '}
                <a href="mailto:hello@elevatevents.com" className="text-taupe hover:text-charcoal font-semibold">
                  hello@elevatevents.com
                </a>
              </p>
            </div>

            {/* Section 12: GDPR Rights */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                12. European Privacy Rights (GDPR)
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                If you are in the European Economic Area (EEA), you have the right to:
              </p>
              
              <ul className="text-sm md:text-base text-charcoal/70 space-y-2 ml-6">
                <li>• Access your personal data</li>
                <li>• Rectify inaccurate data</li>
                <li>• Erase your data</li>
                <li>• Restrict processing</li>
                <li>• Data portability</li>
                <li>• Object to processing</li>
                <li>• Lodge a complaint with a supervisory authority</li>
              </ul>
              
              <p className="text-sm md:text-base text-charcoal/70 mt-4">
                Legal basis for processing: Consent, contract performance, legal obligations, and legitimate interests.
              </p>
            </div>

            {/* Section 13: Changes to Policy */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                13. Changes to This Policy
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                We may update this policy to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
              </p>
              
              <ul className="text-sm md:text-base text-charcoal/70 space-y-2 ml-6">
                <li>• Posting the updated policy with a new "Last Updated" date</li>
                <li>• Sending an email if you are on our mailing list</li>
                <li>• Displaying a notice on our website</li>
              </ul>
              
              <p className="text-sm md:text-base text-charcoal/70 mt-4">
                Your continued use of our services after changes indicates acceptance of the updated policy.
              </p>
            </div>

            {/* Section 14: Contact Us */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                14. Contact Us
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                For questions about this Privacy Policy or to exercise your rights:
              </p>
              
              <div className="text-sm md:text-base text-charcoal/70 space-y-2">
                <p><strong className="text-charcoal">{companyName}</strong></p>
                <p>Email: <a href="mailto:hello@elevatevents.com" className="text-taupe hover:text-charcoal font-semibold">hello@elevatevents.com</a></p>
                <p>Phone: <a href="tel:+15551234567" className="text-taupe hover:text-charcoal font-semibold">(555) 123-4567</a></p>
                <p>Address: 123 Event Street, New York, NY 10001</p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 mb-6">
            We are here to help clarify how we handle your information.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
};

export default Privacy;

