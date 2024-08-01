import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Link, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import eatwise from './public/Eatwise.jpg'
import easyread from './public/easyread.jpg'
import ufc from './public/ufc.jpg'
import character from './public/ufc/character.jpg'
import gameplay from './public/ufc/gameplay.jpg'
import leaderboard from './public/ufc/leaderboard.jpg'
import main from './public/ufc/main.jpg'
import stage from './public/ufc/stage.jpg'
import erhome from './public/easyread/erhome.jpg'
import input from './public/easyread/input.jpg'
import paste from './public/easyread/paste.jpg'
import image from './public/easyread/image.jpg'
import pdf from './public/easyread/pdf.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Eatwise',
      description: 'Developed Eatwise, a diet tracking web app using React, CSS, and Next.js for a dynamic frontend, and Firebase and Node.js for robust backend functionality; deployed on Vercel. Integrated the FatSecret Platform REST API for food data, implemented body type assessments, personalized calorie and nutrition goals, and historical data visualization, ensuring thorough unit, manual, and integration testing.',
      link: 'https://eatwise.vercel.app/protected/Home',
      logo: eatwise,
      images: ['./path-to-eatwise-image1.png', './path-to-eatwise-image2.png'], // replace with your project images
      languages: ['React', 'CSS', 'Next.js', 'Firebase', 'Node.js']
    },
    {
      title: 'Easy Read Generator',
      description: 'Engineered a Python-based AI application using Streamlit, integrated with LangChain and GPT API to produce accessible reading content for individuals with mental disabilities, incorporating web/text scraping tools to process and export resources, including URLs and PDFs, enhancing the app\'s adaptability and reach.',
      link: 'http://link-to-easy-read-generator.com',
      logo: easyread,
      images: [erhome, input, paste, image,], 
      languages: ['Python', 'Streamlit', 'LangChain', 'GPT API']
    },
    {
      title: 'Octagon Frenzy',
      description: 'Created a Python-based two player 2D fighting game using Processing, crafting UI and GUI elements, including sprite animations and interactive buttons to enhance user experience and gameplay mechanics.',
      link: 'http://link-to-octagon-frenzy.com',
      logo: ufc,
      images: [main, character, gameplay, stage, leaderboard], 
      languages: ['Python', 'Processing']
    },
    {
      title: 'Flight Management System',
      description: 'Built a C++-based Flight Management System program, capable of processing 100,000 data points, with customizable options for data storage, including selectable hash methods, data input/output, and tailored data display functionalities.',
      link: 'http://link-to-flight-management-system.com',
      logo: './path-to-flight-management-system-logo.png', // replace with your project logo path
      images: ['./path-to-flight-management-system-image1.png', './path-to-flight-management-system-image2.png'], // replace with your project images
      languages: ['C++']
    }
  ];

  const [selectedProject, setSelectedProject] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', marginBottom: 4, justifyContent: 'center' }}>
        <LightbulbIcon sx={{ marginRight: 1 }} />
        My Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List>
            {projects.map((project, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  selected={selectedProject === index}
                  onClick={() => handleProjectClick(index)}
                  sx={{
                    marginBottom: 1,
                    backgroundColor: selectedProject === index ? '#666666' : 'transparent',
                    color: selectedProject === index ? '#FFFFFF' : 'inherit',
                    borderRadius: '8px',
                    padding: '10px',
                    '&:hover': {
                      backgroundColor: selectedProject === index ? '#666666' : '#666666',
                      color: selectedProject === index ? '#FFFFFF' : '#FFFFFF',
                    },
                  }}
                >
                  <ListItemText primary={project.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: '#1c1c1c', color: '#fff' }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img src={projects[selectedProject].logo} alt={projects[selectedProject].title} style={{ width: '100%', borderRadius: '8px' }} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6">{projects[selectedProject].title}</Typography>
                <Typography variant="body1">{projects[selectedProject].description}</Typography>
                <Link href={projects[selectedProject].link} target="_blank" rel="noopener" sx={{ color: '#61dafb' }}>
                  Visit Project
                </Link>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <strong>Programming Languages & Tools:</strong> {projects[selectedProject].languages.join(', ')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Swiper spaceBetween={50} slidesPerView={1}>
                  {projects[selectedProject].images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={image} alt={`slide ${idx}`} style={{ width: '100%', borderRadius: '8px' }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
