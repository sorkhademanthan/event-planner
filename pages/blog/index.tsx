import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const Blog: React.FC = () => {
  const blogPosts = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Head>
        <title>Blog - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Blog' }
      ]} />

      <div className="wireframe-container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center', padding: '40px 0' }}>Blog</h1>

        {/* Search and Categories */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div className="wireframe-box" style={{ display: 'inline-block', marginBottom: '20px', minWidth: '300px' }}>
            [Search Bar]
          </div>
          <div className="wireframe-box" style={{ display: 'inline-flex', gap: '10px', flexWrap: 'wrap' }}>
            <span>[All]</span>
            <span>[Tips]</span>
            <span>[Trends]</span>
            <span>[Case Studies]</span>
          </div>
        </div>

        {/* Blog Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {blogPosts.map((post) => (
            <Link href={`/blog/${post}`} key={post} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="wireframe-card" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <div className="wireframe-box" style={{ minHeight: '200px' }}>[Featured Image]</div>
                  <div style={{ padding: '10px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Post Title {post}</h3>
                    <p style={{ color: '#666', marginBottom: '10px' }}>
                      Author | Date | Category
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                      Excerpt of the blog post content goes here. This gives readers a preview of what the article is about...
                    </p>
                    <div className="wireframe-box" style={{ display: 'inline-block' }}>[Read More]</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div className="wireframe-box" style={{ display: 'inline-flex', gap: '10px' }}>
            <span>[&lt;]</span>
            <span>[1]</span>
            <span>[2]</span>
            <span>[3]</span>
            <span>[&gt;]</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
