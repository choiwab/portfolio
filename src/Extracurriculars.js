import React from 'react';
import { Container, Typography, Grid, Paper, Link } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import optiver from './public/optiver.jpg';
import hackad from './public/hackad.jpg';
import roka from './public/roka.jpg';
import mma from './public/nusmma.jpg';
import aiClub from './public/aiclub.jpg';

const Extracurriculars = () => {
  const extracurriculars = [
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
      period: 'May 2024 - Present',
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
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
        <GroupIcon sx={{ marginRight: 1 }} />
        Extracurriculars
      </Typography>
      {extracurriculars.map((extracurricular, index) => (
        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: '#1c1c1c', color: '#fff' }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={extracurricular.image} alt={extracurricular.activity} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">
                <Link href={extracurricular.link} target="_blank" rel="noopener" sx={{ color: '#61dafb', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  {extracurricular.activity}
                </Link>
              </Typography>
              <Typography variant="subtitle1">{extracurricular.role}</Typography>
              <Typography variant="body2">{extracurricular.period}</Typography>
              {extracurricular.details && extracurricular.details.map((detail, idx) => (
                <Typography key={idx} variant="body2">▪ {detail}</Typography>
              ))}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Extracurriculars;
