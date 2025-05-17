import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      slug: 'optimizing-hil-testing',
      title: 'Optimizing HIL Testing with LabVIEW for Automotive',
      excerpt: 'Learn how LabVIEW streamlines hardware-in-the-loop testing for ECUs, enhancing reliability and reducing costs in electric vehicle development.',
      author: 'Amit Sharma',
      date: 'May 10, 2025',
      tags: ['LabVIEW', 'HIL Testing', 'Automotive', 'Automation'],
    },
    {
      id: 2,
      slug: 'scalable-ecommerce-platforms',
      title: 'Building Scalable E-commerce Platforms with React',
      excerpt: 'Discover how modern web frameworks like React and Node.js power secure, high-performance e-commerce solutions for retail businesses.',
      author: 'Priya Patel',
      date: 'May 8, 2025',
      tags: ['React', 'E-commerce', 'Web Development', 'AWS'],
    },
    {
      id: 3,
      slug: 'ai-automation-industry-4.0',
      title: 'AI-Powered Automation in Industry 4.0 with LabVIEW',
      excerpt: 'Explore how LabVIEW and AI tools like DeepLTK drive smart manufacturing through digital twins and real-time analytics.',
      author: 'Ravi Kumar',
      date: 'May 5, 2025',
      tags: ['LabVIEW', 'Industry 4.0', 'AI', 'Digital Twin'],
    },
    {
      id: 4,
      slug: 'future-telehealth-apps',
      title: 'The Future of Telehealth Web Applications',
      excerpt: 'Dive into the design of secure, responsive telehealth platforms that enhance patient care with Vue.js and HIPAA-compliant APIs.',
      author: 'Sneha Gupta',
      date: 'May 2, 2025',
      tags: ['Vue.js', 'Telehealth', 'Web Development', 'Healthcare'],
    },
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-container">
          <h1 className="hero-heading">VIWEBSYNC Insights</h1>
          <p className="hero-subtitle">
            Explore our latest thoughts on LabVIEW automation, AI integration, and modern web development for industries like automotive, healthcare, and e-commerce.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts-section">
        <div className="container">
          <h2 className="section-heading">Recent Posts</h2>
          <div className="blog-grid">
            {posts.map((post) => (
              <div className="blog-card" key={post.id}>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-meta">
                  By {post.author} | {post.date}
                </p>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-tags">
                  {post.tags.map((tag, index) => (
                    <span className="blog-tag" key={index}>{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="cta-container">
          <h2 className="cta-heading">Stay Updated</h2>
          <p className="cta-text">
            Subscribe to our blog or reach out to discuss how our LabVIEW and web solutions can transform your business.
          </p>
          <Link to="/connect" className="cta-button">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;