import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/Breadcrumb';

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Blog Post {id} - Event Planner</title>
      </Head>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: `Post ${id}` }
      ]} />

      <div className="wireframe-container">
        <article style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '10px', textAlign: 'center', padding: '40px 0 10px' }}>
            Post Title {id}
          </h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
            Author | Date | Category
          </p>

          {/* Featured Image */}
          <div className="wireframe-box" style={{ minHeight: '400px', marginBottom: '40px' }}>
            [Featured Image]
          </div>

          {/* Article Content */}
          <section className="wireframe-section">
            <div className="wireframe-box" style={{ minHeight: '600px', textAlign: 'left' }}>
              <p><strong>Article Content</strong></p>
              <p style={{ marginTop: '20px' }}>
                Paragraphs of content...<br/><br/>
                With proper formatting...<br/><br/>
                Including headings, lists, images...<br/><br/>
                And embedded media...
              </p>
            </div>
          </section>

          {/* Author Bio */}
          <section className="wireframe-section" style={{ background: '#f5f5f5', padding: '40px 20px', margin: '40px -20px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>About the Author</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'center' }}>
              <div className="wireframe-box" style={{ width: '80px', height: '80px', borderRadius: '50%' }}>[Photo]</div>
              <div>
                <strong>Author Name</strong><br/>
                Short bio and description of the author&apos;s expertise
              </div>
            </div>
          </section>

          {/* Related Posts */}
          <section className="wireframe-section">
            <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Related Posts</h2>
            <div className="wireframe-grid wireframe-grid-2">
              <div className="wireframe-card">Post 1<br/>[Image]<br/>Title</div>
              <div className="wireframe-card">Post 2<br/>[Image]<br/>Title</div>
            </div>
          </section>

          {/* Comments Section */}
          <section className="wireframe-section">
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Comments</h2>
            <div className="wireframe-box" style={{ minHeight: '300px' }}>
              [Comment Form]<br/><br/>
              Name<br/>
              Email<br/>
              Message<br/>
              [Submit]
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
