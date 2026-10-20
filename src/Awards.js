import React, { useEffect } from 'react';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import singhacksPhoto from './public/awards/Singhacks Photo.jpeg';
import openaiSeaPhoto from './public/awards/OpenAI X Sea Hackathon Photo.png';
import nusEnterpriseLogo from './public/awards/NUS-Enterprise.png';
import './Awards.css';

const Awards = () => {
  useEffect(() => {
    document.title = 'Awards | Jaehyeok Choi';
  }, []);

  return (
    <main className="awards-page">
      <header className="awards-header">
        <span className="awards-eyebrow"><EmojiEventsOutlinedIcon fontSize="small" /> Selected achievements</span>
        <h1>Awards &amp; recognition</h1>
        <p>Hackathon wins and venture milestones across AI, fintech, and entrepreneurship.</p>
      </header>

      <section className="awards-grid" aria-label="Hackathon awards">
        <article className="award-card" aria-labelledby="singhacks-title">
          <figure className="award-photo">
            <img src={singhacksPhoto} alt="The SingHacks 2025 team receiving the Grand Winner award at Singapore FinTech Festival" />
            <figcaption>Singapore FinTech Festival · 2025</figcaption>
          </figure>
          <div className="award-body">
            <div className="award-meta">
              <span className="award-badge"><EmojiEventsOutlinedIcon fontSize="small" /> 1st Place</span>
              <span>Oct – Nov 2025 · Singapore</span>
            </div>
            <h2 id="singhacks-title">SingHacks 2025</h2>
            <p className="award-project">Decentralized multi-agent research</p>
            <p>Built a blockchain-based, decentralized multi-agent research platform, taking first place among 200+ participants.</p>
            <p>Presented the solution to 100+ industry leaders at the Singapore FinTech Festival 2025, bringing the prototype from the hackathon to an industry audience.</p>
            <div className="award-links">
              <a href="https://singhacks.com/" target="_blank" rel="noopener noreferrer">SingHacks <ArrowOutwardIcon fontSize="small" /></a>
              <a href="https://www.fintechfestival.sg/" target="_blank" rel="noopener noreferrer">FinTech Festival <ArrowOutwardIcon fontSize="small" /></a>
            </div>
          </div>
        </article>

        <article className="award-card" aria-labelledby="openai-sea-title">
          <figure className="award-photo">
            <img src={openaiSeaPhoto} alt="Presenting Synthetic Shoppers at the OpenAI and Sea Regional Codex Hackathon" />
            <figcaption>Live project presentation · Singapore</figcaption>
          </figure>
          <div className="award-body">
            <div className="award-meta">
              <span className="award-badge"><EmojiEventsOutlinedIcon fontSize="small" /> Top 5</span>
              <span>6 June 2026 · Singapore</span>
            </div>
            <h2 id="openai-sea-title">OpenAI × Sea Regional Codex Hackathon</h2>
            <p className="award-project">Synthetic Shoppers</p>
            <p>Built Synthetic Shoppers with the team: an AI focus group that simulates buyer personas browsing a Shopee-style storefront, helping sellers test product listings before launch.</p>
            <p>Paired browser-use shopper agents and a FastAPI simulation engine with a live React dashboard to surface buyer objections, funnel drop-offs, and simulated conversion changes across listing experiments.</p>
            <div className="award-links">
              <a href="https://github.com/choiwab/synth-shoppers" target="_blank" rel="noopener noreferrer">Explore the project <ArrowOutwardIcon fontSize="small" /></a>
              <a href="https://www.sea.com/news/407" target="_blank" rel="noopener noreferrer">About the event <ArrowOutwardIcon fontSize="small" /></a>
            </div>
          </div>
        </article>
      </section>

      <section className="awards-venture" aria-label="Venture recognition">
        <article className="award-card award-card--venture" aria-labelledby="nus-vip-title">
          <div className="award-brand">
            <img src={nusEnterpriseLogo} alt="NUS Enterprise" loading="lazy" />
            <span>Venture Initiation Programme</span>
          </div>
          <div className="award-body">
            <div className="award-meta">
              <span className="award-badge award-badge--venture">S$10,000 Award</span>
              <span>2026 · NUS Enterprise &amp; NUS Computing</span>
            </div>
            <h2 id="nus-vip-title">NUS SoC Venture Initiation Programme</h2>
            <p className="award-project">BrandCodes · CEO &amp; Founder</p>
            <p>One of 4 teams selected from 150 for the Venture Initiation Programme Award, securing S$10,000 in qualifying support from NUS Enterprise and the School of Computing for BrandCodes.</p>
            <p>Leading a digital product identity venture from product strategy to engineering and customer acquisition, with GS1 2D barcodes, Digital Link routing, dynamic product experiences, and 3 B2B customers.</p>
            <div className="award-links">
              <a href="https://brandcodes.io/" target="_blank" rel="noopener noreferrer">Visit BrandCodes <ArrowOutwardIcon fontSize="small" /></a>
              <a href="https://www.comp.nus.edu.sg/entrepreneurship/awards/iepsoc/" target="_blank" rel="noopener noreferrer">About VIP@SoC <ArrowOutwardIcon fontSize="small" /></a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Awards;
