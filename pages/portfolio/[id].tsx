import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

interface PortfolioDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  date: string;
  guestCount: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  gallery: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const PortfolioDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState(0);

  // Portfolio data - would come from API/CMS in production
  const portfolioData: { [key: string]: PortfolioDetail } = {
    '1': {
      id: '1',
      title: 'The Anderson Wedding',
      subtitle: 'A Garden Romance',
      category: 'Wedding',
      location: 'The Hamptons, NY',
      date: 'June 2023',
      guestCount: '150',
      description: 'An enchanting garden celebration that transformed a private estate into a floral paradise. Every element was carefully curated to reflect Sarah and Michael\'s love story.',
      challenge: 'Create an intimate garden atmosphere for 150 guests while managing unpredictable June weather in the Hamptons.',
      solution: 'We designed a stunning clear-top tent adorned with hanging gardens and thousands of fairy lights. A sophisticated weather contingency plan felt intentional rather than improvised, featuring elegant side panels that could be deployed seamlessly.',
      result: 'A flawless celebration where guests danced under the stars until midnight. The couple received countless messages calling it "the most beautiful wedding we\'ve ever attended."',
      gallery: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&h=1280&fit=crop&q=90',
      ],
      testimonial: {
        quote: 'From our first meeting, we knew we were in the right hands. Every detail was more beautiful than we imagined, and we actually got to enjoy our own wedding. That\'s priceless.',
        author: 'Sarah & Michael Anderson',
        role: 'Bride & Groom',
      },
    },
    '2': {
      id: '2',
      title: 'TechCorp Annual Gala',
      subtitle: 'Innovation Meets Elegance',
      category: 'Corporate Event',
      location: 'Metropolitan Museum, NYC',
      date: 'September 2023',
      guestCount: '500',
      description: 'A sophisticated corporate gala celebrating 20 years of innovation with interactive tech displays, branded experiences, and world-class entertainment.',
      challenge: 'Balance corporate professionalism with creative flair while managing 500 VIP guests, live-streamed presentations to 10,000 remote attendees, and strict venue restrictions.',
      solution: 'We created distinct branded zones throughout the museum, each showcasing a different era of company innovation. Seamless AV integration allowed for flawless transitions between in-person and virtual content.',
      result: 'The CEO called it "the best company event in our 20-year history." Post-event surveys showed 95% positive feedback, and the live stream had 12,000+ viewers.',
      gallery: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&h=1280&fit=crop&q=90',
      ],
      testimonial: {
        quote: 'Flawless execution from start to finish. Our team looked like rockstars, and the event perfectly reflected our brand values. I can\'t imagine working with anyone else.',
        author: 'Jennifer Martinez',
        role: 'VP of Marketing, TechCorp',
      },
    },
    '3': {
      id: '3',
      title: 'The Martinez Anniversary',
      subtitle: 'Five Decades Celebrated',
      category: 'Private Party',
      location: 'Private Estate, Connecticut',
      date: 'August 2023',
      guestCount: '80',
      description: 'An elegant celebration honoring 50 years of marriage, bringing together three generations for a day of love, laughter, and cherished memories.',
      challenge: 'Create a sophisticated celebration that honored the couple\'s history while feeling fresh and modern, appealing to guests aged 8 to 85.',
      solution: 'We incorporated family photos spanning five decades throughout the venue, curated a custom soundtrack representing each era of their marriage, and surprised guests with an intimate vow renewal ceremony.',
      result: 'A deeply moving celebration that brought generations together. The couple\'s daughter said, "You captured who they are perfectly."',
      gallery: [
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1519167758481-83f29da8c2b6?w=1920&h=1280&fit=crop&q=90',
      ],
      testimonial: {
        quote: 'They captured our love story in a way that touched every single guest. It was perfect - elegant, meaningful, and deeply personal.',
        author: 'Maria & Carlos Martinez',
        role: 'Celebrated Couple',
      },
    },
    '4': {
      id: '4',
      title: 'Bryant Corporate Launch',
      subtitle: 'Product Reveal Experience',
      category: 'Corporate Event',
      location: 'Hudson Yards, NYC',
      date: 'October 2023',
      guestCount: '300',
      description: 'A high-energy product launch featuring immersive brand activations, interactive demos, and a dramatic reveal that captivated both in-person and virtual audiences.',
      challenge: 'Generate buzz and media coverage for a competitive product launch while creating an Instagram-worthy experience that would drive organic social sharing.',
      solution: 'We designed five immersive brand zones, each telling part of the product story. A dramatic reveal using projection mapping and live performers created a show-stopping moment streamed to global audiences.',
      result: 'The event generated 50M+ social media impressions and was covered by major tech publications. Product pre-orders exceeded projections by 300%.',
      gallery: [
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&h=1280&fit=crop&q=90',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1280&fit=crop&q=90',
      ],
      testimonial: {
        quote: 'This wasn\'t just a product launch—it was a cultural moment. The team exceeded every expectation and delivered results that impacted our entire year.',
        author: 'David Bryant',
        role: 'CEO, Bryant Tech',
      },
    },
  };

  const project = id ? portfolioData[id as string] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Portfolio - Elevate Events</title>
        <meta name="description" content={project.description} />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio', path: '/portfolio' },
          { label: project.title }
        ]} 
      />

      {/* Hero Image with Better Proportions */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-6">
            <img 
              src={project.gallery[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="w-full h-full object-cover"
              width="1920"
              height="823"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
            
            {/* Title Overlay - Better Typography */}
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
              <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-montserrat font-semibold text-charcoal uppercase tracking-wider mb-3">
                {project.category}
              </span>
              <p className="font-script text-xl md:text-2xl lg:text-3xl mb-2 text-soft-white/90">
                {project.subtitle}
              </p>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Gallery Thumbnails - Improved Responsiveness */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {project.gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-base ${
                  selectedImage === index 
                    ? 'ring-4 ring-taupe shadow-xl scale-105' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img 
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Event Overview - New Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
            About This Event
          </h2>
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-10">
            {project.description}
          </p>
          
          {/* Event Stats - Premium Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">📍</div>
              <div className="font-montserrat text-xs uppercase tracking-wider text-charcoal/60 mb-1">Location</div>
              <div className="font-semibold text-charcoal">{project.location}</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-montserrat text-xs uppercase tracking-wider text-charcoal/60 mb-1">Date</div>
              <div className="font-semibold text-charcoal">{project.date}</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">👥</div>
              <div className="font-montserrat text-xs uppercase tracking-wider text-charcoal/60 mb-1">Guests</div>
              <div className="font-semibold text-charcoal">{project.guestCount}</div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-montserrat text-xs uppercase tracking-wider text-charcoal/60 mb-1">Category</div>
              <div className="font-semibold text-charcoal">{project.category}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Story - Redesigned */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
              The Story Behind the Event
            </h2>
            <p className="text-charcoal/70">
              Every great event starts with a challenge and a vision
            </p>
          </div>

          <div className="space-y-10">
            {/* Challenge */}
            <div className="bg-cream p-8 md:p-10 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-taupe/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
                    The Challenge
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-lg">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-taupe/10 p-8 md:p-10 rounded-2xl border-l-4 border-taupe">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-taupe/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
                    Our Approach
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-taupe to-taupe/90 p-8 md:p-10 rounded-2xl text-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold mb-3">
                    The Result
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial - Premium Design */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-xl relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-16 h-16 bg-taupe rounded-full flex items-center justify-center text-white text-4xl">
              "
            </div>
            
            <div className="pt-6">
              <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-charcoal italic mb-8 leading-relaxed">
                {project.testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-taupe to-taupe/70 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-playfair text-xl font-bold text-charcoal">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-charcoal/60 font-montserrat">
                    {project.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section - Enhanced */}
      <Section background="taupe">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">✨</div>
          <p className="font-script text-3xl md:text-4xl text-soft-white mb-4">
            Love What You See?
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-soft-white mb-6">
            Let's Create Your Story
          </h2>
          <p className="text-base md:text-lg text-soft-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every project in our portfolio started with a conversation. Ready to start yours? Schedule a complimentary consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-white text-taupe font-montserrat font-bold text-base rounded-xl hover:bg-soft-white hover:shadow-2xl hover:scale-105 transition-all duration-base"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/portfolio" 
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-montserrat font-bold text-base rounded-xl hover:bg-white hover:text-taupe transition-all duration-base"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PortfolioDetail;
