import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import optiver from './public/optiver.jpg'
import hackad from './public/hackad.jpg'
import roka from './public/roka.jpg'
import mma from './public/nusmma.jpg'

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
      image: optiver
    },
    {
      activity: 'HACKAD | Abu Dhabi, United Arab Emirates',
      role: 'Vice President',
      period: 'February 2023 - May 2023',
      details: [
        'Executed a LeetCode workshop for over 20 students, crafting and customizing computational problem-solving materials and in-depth lectures, while also securing funding and orchestrating team-building activities',
        'Coordinated a networking initiative to the Hub71 seminar in Abu Dhabi, connecting with over 20 professionals including startup founders and investors, initiating 5 follow-up collaborative meetings to explore tech innovation opportunities'
      ],
      image: hackad
    },
    {
      activity: 'Republic Of Korea Army, 11th Infantry Division | Yangpyeong, Republic of Korea',
      role: 'Fire Direction Officer / Squad Leader / Barrack Representative / Sergeant',
      period: 'December 2020 - May 2022',
      details: [
        'Elected as Squad Leader and Barrack Representative, overseeing soldier training and delivering effective peer counseling',
        'Received Merit Award from Division Commander for exemplary leadership in guiding squad operations and achieving high precision in mortar fire coordination'
      ],
      image: roka
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
      image: mma
    }
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
              <Typography variant="h6">{extracurricular.activity}</Typography>
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
