import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import nus from './public/nus.jpg'
import sghs from './public/sghs.jpg'
import nyuad from './public/nyuad.jpg'

const Education = () => {
  const education = [
    {
      school: 'NATIONAL UNIVERSITY OF SINGAPORE | Singapore',
      degree: 'Bachelor of Computing: Major in Computer Science',
      period: 'August 2023 - May 2027',
      logo: nus,
      details: [
        'Relevant Coursework: Programming Methodology II, Data Structures & Algorithms, Introduction to Business Analytics, IT Management and Organisation, Calculus for Computing, Linear Algebra for Computing, Digital Ethics and Data Privacy'
      ]
    },
    {
      school: 'NEW YORK UNIVERSITY | Abu Dhabi, UAE',
      degree: 'Bachelor of Science: Major in Computer Science with Minor in Applied Mathematics',
      period: 'August 2022 - June 2023',
      logo: nyuad,
      details: [
        'Relevant Coursework: Introduction to Computer Science, Discrete Math, Human-Centered Data Science, Algorithms, Data Structures, Multivariable Calculus'
      ]
    },
    {
      school: 'Seoul Global High School | Republic of Korea',
      degree: 'High School Diploma',
      period: 'April 2017 - February 2020',
      logo: sghs,
      details: [
        'SAT 1550/1600',
        'AP Calculus BC 5',
        'AP Statistics 5',
        'AP World History 5',
        'AP Psychology 5',
        'AP Microeconomics 5',
        'AP Macroeconomics 5',
        'TOEFL 119/120'
      ]
    }
  ];

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
        <SchoolIcon sx={{ marginRight: 1 }} />
        Education
      </Typography>
      {education.map((edu, index) => (
        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: '#1c1c1c', color: '#fff' }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={edu.logo} alt={edu.school} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{edu.school}</Typography>
              <Typography variant="subtitle1">{edu.degree}</Typography>
              <Typography variant="body2">{edu.period}</Typography>
              {edu.details && edu.details.map((detail, idx) => (
                <Typography key={idx} variant="body2">▪ {detail}</Typography>
              ))}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Education;
