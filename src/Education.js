import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Education = () => {
  const education = [
    {
      school: 'Your College',
      degree: 'Bachelor of Science in Computer Science',
      period: '2019 - 2023',
      logo: './path-to-college-logo.png' // replace with your college logo path
    },
    {
      school: 'Your High School',
      degree: 'High School Diploma',
      period: '2015 - 2019',
      logo: './path-to-highschool-logo.png' // replace with your high school logo path
    },
    // Add more education details as needed
  ];

  return (
    <Container>
      {education.map((edu, index) => (
        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={edu.logo} alt={edu.school} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{edu.school}</Typography>
              <Typography variant="subtitle1">{edu.degree}</Typography>
              <Typography variant="body2">{edu.period}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Education;
