import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Section from '@/components/Section';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Choose the Perfect Wedding Venue in 5 Steps',
      excerpt: 'Finding your dream venue doesn\'t have to be overwhelming. Follow our proven process to discover the perfect setting for your celebration.',
      category: 'Wedding Planning',
      date: 'January 12, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&q=90',
      slug: 'perfect-wedding-venue-guide',
      featured: true,
    },
    {
      id: '2',
      title: '10 Corporate Event Trends Dominating 2024',
      excerpt: 'Stay ahead of the curve with these innovative ideas that are transforming corporate events this year.',
      category: 'Corporate Events',
      date: 'January 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=90',
      slug: 'corporate-event-trends-2024',
      featured: true,
    },
    {
      id: '3',
      title: 'Budget-Friendly Event Ideas That Look Expensive',
      excerpt: 'Create a luxurious experience without breaking the bank. These designer tricks maximize impact while minimizing costs.',
      category: 'Planning Tips',
      date: 'January 8, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&q=90',
      slug: 'budget-friendly-luxury-events',
    },
    {
      id: '4',
      title: 'The Ultimate Event Planning Timeline: 6 Months Out',
      excerpt: 'Master the planning process with our month-by-month checklist. Never miss a deadline or overlook a detail again.',
      category: 'Planning Tips',
      date: 'January 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=1200&h=800&fit=crop&q=90',
      slug: 'event-planning-timeline',
    },
    {
      id: '5',
      title: 'Destination Wedding Planning: What You Need to Know',
      excerpt: 'Taking your celebration abroad? Navigate the unique challenges and opportunities of destination weddings with confidence.',
      category: 'Wedding Planning',
      date: 'January 3, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop&q=90',
      slug: 'destination-wedding-guide',
    },
    {
      id: '6',
      title: 'Sustainable Event Planning: Celebrate Responsibly',
      excerpt: 'Reduce your environmental impact without compromising on style. Discover eco-friendly alternatives for every aspect of your event.',
      category: 'Planning Tips',
      date: 'December 28, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop&q=90',
      slug: 'sustainable-event-planning',
    },
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>Blog - Elevate Events | Event Planning Tips & Inspiration</title>
        <meta 
          name="description" 
          content="Discover expert event planning tips, industry trends, and behind-the-scenes insights from our team of luxury event professionals." 
        />
      </Head>

      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Blog' }
        ]} 
      />

      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="accent-text mb-3">Our Blog</p>
          <h1 className="heading-1 mb-4 text-balance">
            Event Planning Insights & Inspiration
          </h1>
          <p className="body-text text-charcoal/80 max-w-2xl mx-auto">
            Expert tips, industry trends, and creative ideas to help you plan unforgettable celebrations.
          </p>
        </div>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal">
                Featured Articles
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-cream rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-base h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
                        loading="lazy"
                        width="1200"
                        height="750"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-montserrat font-semibold text-charcoal">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-4 text-xs font-montserrat text-charcoal/60 mb-3">
                        <time dateTime={post.date}>{post.date}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-taupe transition-colors duration-base">
                        {post.title}
                      </h3>

                      <p className="text-sm md:text-base text-charcoal/70 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 text-sm font-montserrat font-semibold text-taupe group-hover:gap-3 transition-all duration-base">
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Latest Posts */}
      <Section background="cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal">
              Latest Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-base h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-montserrat font-semibold text-charcoal">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs font-montserrat text-charcoal/60 mb-3">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-playfair text-lg md:text-xl font-bold text-charcoal mb-3 group-hover:text-taupe transition-colors duration-base">
                      {post.title}
                    </h3>

                    <p className="text-sm text-charcoal/70 mb-4 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-montserrat font-semibold text-taupe group-hover:gap-3 transition-all duration-base">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="body-text text-charcoal/80 mb-6">
            Let our expert team bring your vision to life. Schedule your complimentary consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Blog;
