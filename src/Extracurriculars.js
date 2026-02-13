import React from 'react';
import { Container, Typography, Grid, Paper, Link } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import optiver from './public/extracurriculars/optiver.jpg';
import hackad from './public/extracurriculars/hackad.jpg';
import roka from './public/extracurriculars/roka.jpg';
import mma from './public/extracurriculars/nusmma.jpg';
import aiClub from './public/extracurriculars/aiclub.jpg';
import nusfintech from './public/extracurriculars/Nusfintech.jpg';
import singhacks from './public/singhacks/singhacks.png';

const accentLink = { color: '#818cf8', textDecoration: 'none', '&:hover': { color: '#a5b4fc', textDecoration: 'none' } };
const timelineHeader = {
  fontWeight: 600,
  color: '#818cf8',
  borderBottom: '1px solid rgba(129,140,248,0.3)',
  paddingBottom: '4px',
  marginTop: '12px',
  marginBottom: '6px',
  fontSize: '0.8rem',
  letterSpacing: '0.02em',
};

const Extracurriculars = () => {
  const extracurriculars = [
    {
      activity: 'Singhacks 2025 | Singapore',
      role: '1st Place',
      period: 'October - November 2025',
      details: [
        'Built a blockchain-based decentralized multi-agent research platform, securing first place among 200+ participants at Singhacks 2025',
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
          ▪ Presented the solution to 100+ industry leaders at{' '}
          <Link href="https://www.fintechfestival.sg/" target="_blank" rel="noopener noreferrer" sx={accentLink}>
            Singapore Fintech Festival
          </Link>
          {' '}2025
        </Typography>
      ],
      image: singhacks,
      link: 'https://singhacks.com/'
    },
    {
      activity: 'NUS Fintech Society | Singapore',
      role: 'Tech Lead',
      period: 'August 2024 - Present',
      details: [
        <>
          <Typography variant="subtitle2" sx={timelineHeader}>
            📅 Aug 2025 - Present
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            • Leading a team to develop a multi-agent AI platform automating equity research using LLMs, LangChain, Langraph, and financial APIs; overseeing architecture, agent orchestration with real-time news scraping, sentiment analysis, and sector insights.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            • Utilized Docker, MongoDB, Airflow for ETL pipeline, extracting data from FinnHub API
          </Typography>
        </>,
        <>
          <Typography variant="subtitle2" sx={timelineHeader}>
            📅 Jan 2025 - May 2025
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>• Developed a stock price prediction model using time series analysis on candlestick patterns and technical indicators, leveraging pattern recognition to enhance forecasting accuracy.</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>• Paramters used: candlestick patterns (Doji, Hammer, Shooting Star) and technical indicators (RSI, MACD, ATR, OBV).</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}> • Models used: Implemented Logistic Regression, Random Forest, XGBoost, LSTM, and Temporal Fusion Transformer (TFT) to enhance forecasting accuracy, leveraging feature engineering and hyperparameter tuning for optimized performance.</Typography>
        </>,
        <>
          <Typography variant="subtitle2" sx={timelineHeader}>
            📅 Aug 2024 - Dec 2024
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '4px', color: 'rgba(255,255,255,0.6)' }}>
            • Worked for machine learning team of{' '}
            <Link href="https://lenorai.com/" target="_blank" rel="noopener noreferrer" sx={accentLink}>
              Lenor
            </Link>{' '}
            (Financial Literacy Tutor Startup)
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>• Designed a structured workflow for data generation and evaluation leveraging LLMs, focusing on scalability and accuracy.</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>• Performed data generation and exploratory data analysis using open-source LLMs like Llama-3, employing a dual-model filtering technique (e.g. Llama and Gemini) for cross-validation and consistency checks to ensure data quality and reliability.</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>• Developed a zero-shot classification pipeline utilizing the facebook/bart-large-mnli model to predict and assign relevance scores for each conversation dataset, optimizing performance through threshold calibration, confidence scoring, and comprehensive error analysis.</Typography>
        </>
      ],
      image: nusfintech,
      link: 'https://fintechsociety.comp.nus.edu.sg/'
    },
    {
      activity: 'NUS OPTIVER ALGORITHMIC TRADING CHALLENGE | Singapore',
      role: 'Leader',
      period: 'January 2024',
      details: [
        'Directed a team of three in developing a Python algorithm on AWS to optimize market making in stock options and manage portfolio hedging strategies, securing 3rd place among competing teams',
        'Developed a Python-based arbitrage trading algorithm in Jupyter Notebook, targeting dual-listed stocks, which increased trading profits by 15% and executed over 500 successful trades on the Optibook trading platform'
      ],
      image: optiver,
      link: 'https://www.optiver.com'
    },
    {
      activity: 'HACKAD | Abu Dhabi, United Arab Emirates',
      role: 'Vice President',
      period: 'February 2023 - May 2023',
      details: [
        'Executed a LeetCode workshop for over 20 students, crafting and customizing computational problem-solving materials and in-depth lectures, while also securing funding and orchestrating team-building activities',
        'Coordinated a networking initiative to the Hub71 seminar in Abu Dhabi, connecting with over 20 professionals including startup founders and investors, initiating 5 follow-up collaborative meetings to explore tech innovation opportunities',
        'Managed communication with external organizations, supervised and executed event advertisement strategies utilizing social media platforms to maximize outreach and engagement'
      ],
      image: hackad,
      link: 'https://hackad-nyuad.github.io/website/'
    },
    {
      activity: '10X AI Club | Seoul, Republic of Korea',
      role: 'Core Member',
      period: 'December 2023 - February 2024',
      details: [
        'Placed 1st among 15 teams in internal hackathon with Easy Read Generator (See more in Projects)',
        'Spearheaded the development of an innovative AI model utilizing GPT API and Zapier, specifically designed to automatically send out Emails to clients using company-specific datasets',
        'Developed an AI model utilizing LangChain and GPT API to generate accessible reading materials for individuals with mental disabilities, integrating web scraping tools to process various resource formats including URLs and PDFs'
      ],
      image: aiClub,
      link: 'https://www.10xaiclub.com/'
    },
    {
      activity: 'Republic Of Korea Army, 11th Infantry Division | Yangpyeong, Republic of Korea',
      role: 'Fire Direction Officer / Squad Leader / Barrack Representative / Sergeant',
      period: 'December 2020 - May 2022',
      details: [
        'Led over 15 soldiers as acting squad leader, supervising soldiers in training and in-base activities',
        'Worked in fire direction center within command center, computed firing data, and announced fire commands',
        'Elected as Squad Leader and Barrack Representative, overseeing soldier training and delivering effective peer counseling',
        'Awarded for Merit by Division Commander (Major General) for leading squad and conducting successful mortar fire accuracy in combat shooting training at Hongcheon, South Korea',
        'Awarded for Excellence (Lieutenant Colonel) for passing rigorous testing on military law, physical ability, and field tactics with top marks to achieve Special Warrior status and finish top of class at Leadership Training Camp'
      ],
      image: roka,
      link: 'https://www.army.mil.kr/english/index..do'
    },
    {
      activity: 'NUS MMA | Singapore',
      role: 'Vice Captain',
      period: 'May 2024 - Dec 2024',
      details: [
        'Led weekly Brazilian Jiu-Jitsu training sessions, developing and delivering structured training plans for over 100 members',
        'Fostered team spirit through participation in internal and external competitions',
        'Efficiently managed club operations, including communication with stakeholders and resource allocation'
      ],
      image: mma,
      link: 'https://www.facebook.com/nusmma/'
    },
  ];

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4, fontWeight: 600, letterSpacing: '-0.02em' }}>
        <GroupIcon sx={{ marginRight: 1, color: '#818cf8' }} />
        Extracurriculars
      </Typography>
      {extracurriculars.map((extracurricular, index) => (
        <Paper key={index} elevation={0} sx={{
          padding: 3,
          marginBottom: 3,
          backgroundColor: '#141414',
          color: '#f5f5f5',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          transition: 'border-color 0.2s ease',
          '&:hover': { borderColor: 'rgba(255,255,255,0.16)' },
        }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img src={extracurricular.image} alt={extracurricular.activity} style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                <Link href={extracurricular.link} target="_blank" rel="noopener" sx={accentLink}>
                  {extracurricular.activity}
                </Link>
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)' }}>{extracurricular.role}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>{extracurricular.period}</Typography>
              {extracurricular.details && extracurricular.details.map((detail, idx) => (
                typeof detail === 'string' ? (
                  <Typography key={idx} variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>▪ {detail}</Typography>
                ) : (
                  <React.Fragment key={idx}>{detail}</React.Fragment>
                )
              ))}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Extracurriculars;
