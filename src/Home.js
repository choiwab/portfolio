import React from 'react';
import { Container, Typography, Avatar } from '@mui/material';
import ProfilePic from './Jaehyeok-Choi Profile Photo.jpg'; // replace with your profile picture path

const Home = () => {
  return (
    <Container>
      <Avatar src={ProfilePic} alt="Profile Picture" sx={{ width: 100, height: 100, margin: 'auto' }} />
      <Typography variant="h4" align="center">Jaehyeok Choi</Typography>
      <Typography variant="h6" align="center">Aspiring Software Developer</Typography>
      <Typography variant="body1" align="center">
        <strong>About Me:</strong> I am a computer science student passionate about technology and developing innovative solutions.
      </Typography>
    </Container>
  );
};

export default Home;
