import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import telenorpic from './public/company-logos/telenor.jpg';
import paulacademy from './public/company-logos/paulacademy.jpg';
import bondit from './public/company-logos/bondit.jpg';
import continental from './public/company-logos/continental.jpg';

const linkStyle = {
  color: '#818cf8',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

const Experience = () => {
  const experiences = [
    {
      company: (
        <a
          href="https://www.continental.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => e.currentTarget.style.color = '#a5b4fc'}
          onMouseOut={(e) => e.currentTarget.style.color = '#818cf8'}
        >
          CONTINENTAL AG
        </a>
      ),
      title: 'Software Developer Intern',
      period: 'Jan 2025 - August 2025',
      description: (
        <ul>
          <li>Worked for Test Service and Solution Team in UX Department</li>
          <li>Developed an AI-driven Test Design Toolchain using a sequential workflow of LLM agents with fine-tuning and RAG on Azure AI, achieving 92% test case design accuracy</li>
          <li>Engineered full-stack API integrations for an internal test automation platform, leveraging Python, SQL, Azure BlobStorage (backend) and React + TypeScript (frontend) to build an interactive interface for the Test Design AI pipeline, used by 300+ testers and boosting test generation efficiency by 76%</li>
        </ul>
      ),
      languages: ['Azure AI', 'REACT', 'Typescript', 'APIs', 'LLMs', 'Sequential AI Workflow'],
      logo: continental,
    },
    {
      company: (
        <a
          href="https://www.telenor.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => e.currentTarget.style.color = '#a5b4fc'}
          onMouseOut={(e) => e.currentTarget.style.color = '#818cf8'}
        >
          TELENOR
        </a>
      ),
      title: 'Data Engineer Intern',
      period: 'May 2024 - August 2024',
      description: (
        <ul>
          <li>Developed and deployed a data categorization engine using Python, Jupyter Notebook, and Streamlit, enhancing procurement data classification by cleaning and mapping data from databases consisting of over 4 million data points, utilizing XGBoost to predict unclassified data categories, creating comprehensive dictionaries, and leveraging NLTK for keyword analysis to improve data accuracy and usability</li>
          <li>Engineered and implemented a Python-based engine to process and consolidate multiple Excel price books into a single file, featuring color-coded price changes and discount rate analysis</li>
        </ul>
      ),
      languages: ['Python', 'XGBoost', 'NumPy', 'Pandas', 'Jupyter Notebook', 'Streamlit'],
      logo: telenorpic,
    },
    {
      company: (
        <a
          href="https://paulacademy.net/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => e.currentTarget.style.color = '#a5b4fc'}
          onMouseOut={(e) => e.currentTarget.style.color = '#818cf8'}
        >
          PAUL ACADEMY
        </a>
      ),
      title: 'Tech Development Intern',
      period: 'July 2023 - August 2023',
      description: (
        <ul>
          <li>Optimized Excel for systematic organization of a digital question bank, integrating GPT API to automate data handling and generation processes within Excel, enhancing efficiency by 90%</li>
          <li>Refined HTML code to dynamically generate online SAT exams for over 50 students, skillfully handling a diverse range of data including images, texts, and interactive elements, ensuring a seamless and responsive user experience</li>
        </ul>
      ),
      languages: ['Excel', 'GPT API', 'HTML'],
      logo: paulacademy,
    },
    {
      company: (
        <a
          href="https://www.bondit.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => e.currentTarget.style.color = '#a5b4fc'}
          onMouseOut={(e) => e.currentTarget.style.color = '#818cf8'}
        >
          BONDIT
        </a>
      ),
      title: 'Market Analyst Intern (Hybrid)',
      period: 'June 2023 - August 2023',
      description: (
        <ul>
          <li>Identified target demographics by conducting market research, analyzing over 1,000 data points, which contributed to a 25% increase in market reach, while spearheading social media marketing initiatives that attracted over 3,000 new customers</li>
        </ul>
      ),
      languages: ['Excel', 'Market Research'],
      logo: bondit,
    },
  ];

  console.log('Rendering Experience component');

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', marginBottom: 4, fontWeight: 600, letterSpacing: '-0.02em' }}>
            <WorkIcon sx={{ marginRight: 1, color: '#818cf8' }} />
            My Work Experiences
          </Typography>
        </Grid>
      </Grid>
      {experiences.map((exp, index) => (
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
              <img src={exp.logo} alt={exp.company} style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{exp.title}</Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)' }}>{exp.company}</Typography>
              <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{exp.period}</Typography>
              <Typography variant="body1" component="div" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{exp.description}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1.5 }}>
                {exp.languages.map((lang, i) => (
                  <Typography key={i} variant="caption" sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '6px',
                    backgroundColor: 'rgba(129,140,248,0.1)',
                    color: '#818cf8',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    border: '1px solid rgba(129,140,248,0.2)',
                  }}>
                    {lang}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Experience;
