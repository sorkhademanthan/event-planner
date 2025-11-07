import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Elevate Events LLC';

  return (
    <>
      <Head>
        <title>Terms of Service - Elevate Events</title>
        <meta 
          name="description" 
          content="Terms and conditions for using our event planning services." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Terms of Service' }
        ]} 
      />

      {/* Hero Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-2 mb-4">Terms of Service</h1>
          <p className="text-sm font-montserrat text-charcoal/60 mb-3">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-sm text-charcoal/70 max-w-2xl mx-auto">
            These terms govern your use of our services. Please read them carefully before engaging our services.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          
          {/* Quick Summary */}
          <div className="bg-taupe/10 p-8 md:p-10 rounded-xl border-l-4 border-taupe mb-12">
            <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
              Key Points
            </h2>
            <ul className="space-y-3">
              {[
                'By using our services, you agree to these terms',
                'We require deposits to secure your event date',
                'Cancellation policies apply based on timing',
                'We maintain professional liability insurance',
                'Disputes are resolved through binding arbitration',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-charcoal/80">
                  <span className="text-taupe text-lg flex-shrink-0">•</span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-10">
            
            {/* Section 1 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                1. Agreement to Terms
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  By accessing our website or engaging our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and {companyName}. We reserve the right to modify these terms at any time, and changes will be effective immediately upon posting to our website.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                2. Services Overview
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  {companyName} provides professional event planning and coordination services including but not limited to:
                </p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Full-service event planning and design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Partial planning and day-of coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Venue sourcing and vendor management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Event consultation and advisory services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Budget planning and timeline management</span>
                  </li>
                </ul>
                <p>
                  Specific services provided will be outlined in your individual service agreement or contract.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                3. Service Agreements and Contracts
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  <strong className="text-charcoal">Consultation:</strong> Initial consultations are complimentary and do not create a binding agreement.
                </p>
                <p>
                  <strong className="text-charcoal">Proposal:</strong> Following consultation, we will provide a detailed proposal outlining scope of services, fees, and terms.
                </p>
                <p>
                  <strong className="text-charcoal">Agreement:</strong> Services begin only after both parties sign a service agreement and the initial deposit is received.
                </p>
                <p>
                  <strong className="text-charcoal">Scope Changes:</strong> Any changes to the agreed scope of services must be documented in writing and may result in fee adjustments.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                4. Fees and Payment Terms
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  <strong className="text-charcoal">Pricing:</strong> All fees are outlined in your service agreement. Fees may be flat-rate, hourly, or percentage-based depending on the service package.
                </p>
                <p>
                  <strong className="text-charcoal">Deposit:</strong> A non-refundable deposit (typically 25-50% of total fee) is required to secure your event date. This deposit is applied toward your final balance.
                </p>
                <p>
                  <strong className="text-charcoal">Payment Schedule:</strong> Remaining balance is due according to the schedule outlined in your agreement, with final payment due no later than 30 days before your event.
                </p>
                <p>
                  <strong className="text-charcoal">Late Payments:</strong> Late payments may incur a fee of 1.5% per month (18% annually) or the maximum allowed by law.
                </p>
                <p>
                  <strong className="text-charcoal">Additional Costs:</strong> You are responsible for all vendor costs, venue fees, rentals, and other direct event expenses unless otherwise specified in your agreement.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                5. Cancellation and Refund Policy
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  <strong className="text-charcoal">By Client:</strong>
                </p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>More than 6 months before event: 50% of fees paid refunded (minus deposit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>3-6 months before event: 25% of fees paid refunded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Less than 3 months before event: No refund</span>
                  </li>
                </ul>
                <p>
                  <strong className="text-charcoal">By Us:</strong> We reserve the right to terminate services with full refund if we cannot fulfill our obligations due to unforeseen circumstances.
                </p>
                <p>
                  <strong className="text-charcoal">Force Majeure:</strong> Neither party is liable for cancellation due to circumstances beyond reasonable control (natural disasters, pandemic, government restrictions, etc.). Deposits may be transferred to a rescheduled date.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                6. Client Responsibilities
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>You agree to:</p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Respond to requests for information in a timely manner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Review and approve all plans, designs, and vendor contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Make payments according to the agreed schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Inform us immediately of any changes or concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Secure necessary permits, licenses, or insurance as required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Be present or designate a representative on event day</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                7. Our Responsibilities
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>We agree to:</p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Provide services with reasonable skill and care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Act in your best interests within our scope of services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Maintain confidentiality of your information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Coordinate with vendors on your behalf as outlined in your agreement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Provide regular updates on planning progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Be present for agreed-upon planning meetings and event day coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                8. Limitation of Liability
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  <strong className="text-charcoal">Services Only:</strong> We provide planning and coordination services. We are not responsible for the actions, performance, or failures of third-party vendors, venues, or service providers.
                </p>
                <p>
                  <strong className="text-charcoal">Maximum Liability:</strong> Our total liability shall not exceed the amount of fees paid to us for your event.
                </p>
                <p>
                  <strong className="text-charcoal">Excluded Damages:</strong> We are not liable for indirect, incidental, consequential, or special damages including lost profits, emotional distress, or punitive damages.
                </p>
                <p>
                  <strong className="text-charcoal">Insurance:</strong> We maintain professional liability insurance. We recommend clients obtain event insurance to protect against unforeseen circumstances.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                9. Intellectual Property
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  <strong className="text-charcoal">Our Content:</strong> All designs, concepts, proposals, and materials created by us remain our intellectual property unless otherwise agreed in writing.
                </p>
                <p>
                  <strong className="text-charcoal">Portfolio Use:</strong> We reserve the right to photograph events we plan and use images, designs, and event details in our marketing materials unless you expressly opt out in writing.
                </p>
                <p>
                  <strong className="text-charcoal">Your Content:</strong> You grant us a license to use information, images, and feedback you provide for the purpose of planning your event.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                10. Confidentiality
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  We will maintain the confidentiality of your personal and event information except:
                </p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>As necessary to provide our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>As required by law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>For general portfolio use (with identifying details removed if requested)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 11 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                11. Dispute Resolution
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  <strong className="text-charcoal">Negotiation:</strong> Any disputes will first be addressed through good-faith negotiation between parties.
                </p>
                <p>
                  <strong className="text-charcoal">Mediation:</strong> If negotiation fails, parties agree to attempt mediation before pursuing other remedies.
                </p>
                <p>
                  <strong className="text-charcoal">Arbitration:</strong> Any claims not resolved through mediation shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p>
                  <strong className="text-charcoal">Governing Law:</strong> These terms are governed by the laws of the State of New York, without regard to conflict of law principles.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                12. Indemnification
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  You agree to indemnify and hold harmless {companyName}, its employees, and agents from any claims, losses, damages, or expenses (including legal fees) arising from:
                </p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Your breach of these terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Your violation of any law or third-party rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Your event or the conduct of your guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Any false or misleading information you provide</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 13 */}
            <div className="bg-cream p-6 md:p-8 lg:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                13. Website Use
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>When using our website, you agree not to:</p>
                <ul className="space-y-3 ml-0 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Use the site for any unlawful purpose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Interfere with the proper functioning of the site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Copy, reproduce, or distribute our content without permission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-taupe mt-1 flex-shrink-0">•</span>
                    <span>Use automated systems to access the site</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 14 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                14. Severability
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </div>
            </div>

            {/* Section 15 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                15. Entire Agreement
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-charcoal/70">
                <p>
                  These Terms of Service, together with your individual service agreement and our Privacy Policy, constitute the entire agreement between you and {companyName} regarding our services and supersede all prior agreements and understandings.
                </p>
              </div>
            </div>

            {/* Section 16 */}
            <div className="bg-cream p-8 md:p-10 rounded-xl">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-6">
                16. Contact Information
              </h2>
              
              <p className="text-sm md:text-base text-charcoal/70 mb-4">
                Questions about these Terms of Service? Contact us:
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
          <div className="text-4xl mb-4">📋</div>
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 mb-6">
            Review our terms and let us help you create an extraordinary event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="/services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Terms;
