import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog | Jaehyeok Choi';
  }, []);

  return (
    <main className="blog-index">
      <header className="blog-index__header">
        <p className="eyebrow">Writing</p>
        <h1>Notes from building AI systems</h1>
        <p>
          Engineering case studies about agentic AI, reliable software, and the
          decisions between a prototype and a production system.
        </p>
      </header>

      <section className="blog-grid" aria-label="Blog posts">
        <article className="post-card post-card--featured">
          <div className="post-card__visual" aria-hidden="true">
            <span className="post-card__node">ambiguous input</span>
            <span className="post-card__line" />
            <span className="post-card__node post-card__node--accent">typed decision</span>
          </div>
          <div className="post-card__body">
            <div className="post-card__meta">
              <span>AI Engineering</span>
              <span>10 min read</span>
            </div>
            <h2>Where AI Stops and Business Rules Begin</h2>
            <p>
              What I learned building financial-research and quotation services for
              an agent-driven commercial underwriting platform at Zurich Insurance.
            </p>
            <Link className="post-card__link" to="/blog/building-reliable-ai-underwriting">
              Read the case study <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Blog;
