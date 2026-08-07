import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import peahiWave from './public/blog/peahi-wave.jpg';
import deepAgentsHarness from './public/blog/deep-agents-harness.png';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog | Jaehyeok Choi';
  }, []);

  return (
    <main className="blog-index">
      <header className="blog-index__header">
        <h1>Blog</h1>
        <p>
          Notes on AI engineering, production software, and what I learned while
          building both.
        </p>
      </header>

      <section className="blog-grid" aria-label="Blog posts">
        <article className="post-card">
          <img
            className="post-card__image"
            src={deepAgentsHarness}
            alt="A central AI agent connected to planning, specialist agents, files, and an execution interface"
          />
          <div className="post-card__body">
            <div className="post-card__meta">
              <span>Agent Architecture</span>
              <span>11 min read</span>
            </div>
            <h2>I Gave the Agent a Harness. It Still Needed Boundaries.</h2>
            <p>
              What I learned experimenting with Deep Agents, specialist subagents,
              MCP tool contracts, and multi-step underwriting workflows.
            </p>
            <Link className="post-card__link" to="/blog/deep-agents-mcp-harness">
              Read the field notes <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </article>

        <article className="post-card">
          <img
            className="post-card__image"
            src={peahiWave}
            alt="A surfer riding through a large blue wave"
          />
          <div className="post-card__body">
            <div className="post-card__meta">
              <span>AI Engineering</span>
              <span>12 min read</span>
            </div>
            <h2>Riding the Agentic Wave: What I Learned Building Pe’ahi</h2>
            <p>
              An internship story about agentic workflows, messy company names,
              production infrastructure, stubborn Word documents, and where AI should stop.
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
