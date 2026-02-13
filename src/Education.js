import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import nus from './public/education/nus.jpg'
import sghs from './public/education/sghs.jpg'

const Education = () => {
  const education = [
    {
      school: 'NATIONAL UNIVERSITY OF SINGAPORE | Singapore',
      degree: 'Bachelor of Computing: Major in Computer Science',
      period: 'August 2023 - May 2027',
      logo: nus,
      details: [
        'Relevant Coursework: Database Systems, Software Engineering, Data Structures & Algorithms, Programming Methodology II, Computer Organization, Introduction to Business Analytics, IT Management and Organisation, Calculus for Computing, Linear Algebra for Computing, Digital Ethics and Data Privacy'
      ]
    },
    {
      school: 'Seoul Global High School | Republic of Korea',
      degree: 'High School Diploma',
      period: 'April 2017 - February 2020',
      logo: sghs,
      details: [
        'SAT 1550/1600',
      ]
    }
  ];

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4, fontWeight: 600, letterSpacing: '-0.02em' }}>
        <SchoolIcon sx={{ marginRight: 1, color: '#818cf8' }} />
        Education
      </Typography>
      {education.map((edu, index) => (
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
              <img src={edu.logo} alt={edu.school} style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{edu.school}</Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)' }}>{edu.degree}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>{edu.period}</Typography>
              {edu.details && edu.details.map((detail, idx) => (
                <Typography key={idx} variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, mt: 0.5 }}>▪ {detail}</Typography>
              ))}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Education;
