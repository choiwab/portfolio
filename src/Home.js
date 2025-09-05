import React from 'react';
import { Container, Typography, Avatar, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Element, Link } from 'react-scroll';
import ProfilePic from './public/Jaehyeok-Choi Profile Photo.jpg'; // replace with your profile picture path
import bjjpic from './public/bjj.jpg';
import './App.css'; // Import the CSS file
import MapComponent from './MapComponent';

const Home = () => {
  return (
    <div className="home-container" style={{ scrollSnapType: 'y mandatory' }}>
      <Element name="welcome" className="snap-section">
        <Box sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2 // Add some padding for mobile
        }}>
          <Avatar src={ProfilePic} alt="Profile Picture" sx={{ width: 150, height: 150, margin: 'auto' }} />
          <Typography variant="h2" align="center" sx={{ marginTop: 2 }}>Welcome to My Page!</Typography>
          <Typography variant="h4" align="center" sx={{ marginTop: 1 }}>My name is Jae</Typography>
          <IconButton href="/">
            <HomeIcon sx={{ fontSize: 40, marginTop: 2 }} />
          </IconButton>
          <Link to="about" smooth={true} duration={500}>
            <IconButton className="bounce-arrow">
              <ExpandMoreIcon sx={{ fontSize: 50, marginTop: 2, color: 'white' }} />
            </IconButton>
          </Link>
        </Box>
      </Element>

      <Element name="about" className="snap-section">
        <Container maxWidth="md">
          <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 2
          }}>
            <Typography variant="h2" align="center" sx={{ marginTop: 2 }}>About Me</Typography>
            <Typography variant="body1" align="left" sx={{ marginTop: 2, maxWidth: 600, whiteSpace: 'pre-line' }}>
              I am a computer science student passionate about technology and developing innovative solutions. My interest lies in AI, software development, data science, and machine learning.{"\n\n"}
              I am always eager to not only deep dive into my interests but also explore new technologies.{"\n\n"}
              {/* I am currently looking for <span style={{ textDecoration: 'underline' }}>Software Engineering</span>, <span style={{ textDecoration: 'underline' }}>Data Science</span>, <span style={{ textDecoration: 'underline' }}>Machine Learning</span> internship for 2025. */}
            </Typography>
            <Link to="fun-facts" smooth={true} duration={500}>
              <IconButton className="bounce-arrow">
                <ExpandMoreIcon sx={{ fontSize: 50, marginTop: 2, color: 'white' }} />
              </IconButton>
            </Link>
          </Box>
        </Container>
      </Element>

      <Element name="fun-facts" className="snap-section">
        <Container maxWidth="lg">
          <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 2
          }}>
            <Typography variant="h2" align="center" sx={{ marginTop: 2 }}>Fun Facts</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 2,
              width: '100%',
              flexWrap: 'wrap'
            }}>
              <Box sx={{
                flex: '1 1 300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 1
              }}>
                <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
                  I am from Seoul, South Korea. And I have lived in Seoul, Beijing, Abu Dhabi, and Singapore. I can speak Korean, English, and a little Chinese.
                </Typography>
                <MapComponent /> {/* Insert the MapComponent */}
              </Box>
              <Box sx={{
                flex: '1 1 300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 1
              }}>
                <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
                  I like jiujitsu. (I got second place here)
                </Typography>
                <img src={bjjpic} alt="Jiujitsu" style={{ maxWidth: '100%', maxHeight: '50vh', borderRadius: '8px' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Element>
    </div>
  );
};

export default Home;