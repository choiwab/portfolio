import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import telenorpic from './public/telenor.jpg';
import paulacademy from './public/paulacademy.jpg';
import bondit from './public/bondit.jpg';
import continental from './public/continental.jpg';

const Experience = () => {
  const experiences = [
    {
      company: (
        <a
          href="https://www.continental.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#61dafb',
            textDecoration: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
          TELENOR
        </a>
      ),
      title: 'Software Test Engineer Intern',
      period: 'Jan 2025 - June 2025',
      description: (
        <ul>
          <li>Developed AI model for test automation....(to be continued)</li>
        </ul>
      ),
      languages: ['Python', 'LLM', 'Testing'],
      logo: continental,
    },
    {
      company: (
        <a
          href="https://www.telenor.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#61dafb', // Change this to your desired color
            textDecoration: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
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
          style={{
            color: '#61dafb', // Change this to your desired color
            textDecoration: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
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
          style={{
            color: '#61dafb', // Change this to your desired color
            textDecoration: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
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
          <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <WorkIcon sx={{ marginRight: 1 }} />
            My Work Experiences
          </Typography>
        </Grid>
      </Grid>
      {experiences.map((exp, index) => (
        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: '#1c1c1c', color: '#fff' }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={exp.logo} alt={exp.company} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="subtitle1">{exp.company}</Typography>
              <Typography variant="subtitle2">{exp.period}</Typography>
              <Typography variant="body1">{exp.description}</Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Programming Languages & Tools:</strong> {exp.languages.join(', ')}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Experience;
