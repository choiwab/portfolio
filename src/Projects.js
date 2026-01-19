import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Link, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import eatwise from './public/project logos/Eatwise.jpg';
import easyread from './public/project logos/easyread.jpg';
import ufc from './public/project logos/ufc.jpg';
import character from './public/ufc/character.jpg';
import gameplay from './public/ufc/gameplay.jpg';
import leaderboard from './public/ufc/leaderboard.jpg';
import main from './public/ufc/main.jpg';
import stage from './public/ufc/stage.jpg';
import erhome from './public/easyread/erhome.jpg';
import input from './public/easyread/input.jpg';
import paste from './public/easyread/paste.jpg';
import image from './public/easyread/image.jpg';
import pdf from './public/easyread/pdf.jpg';
import ewmain from './public/eatwise/Eatwisehome.jpg';
import ewbody from './public/eatwise/Eatwisebody.jpg';
import ewfood from './public/eatwise/Eatwisefood.jpg';
import ewcom from './public/eatwise/Eatwisecom.jpg';
import ewchart from './public/eatwise/Eatwisechart.jpg';
import agenticfinLogo from './public/agenticfin/ai-in-finance-icon-vector.jpg';
import agenticfin from './public/agenticfin/agentic-equity-research.png';
import synapticaLogo from './public/synaptica/synaptica-logo.png';
import synaptica1 from './public/synaptica/Synaptica1.png';
import synaptica2 from './public/synaptica/Synaptica2.png';
import synaptica3 from './public/synaptica/Synaptia3.png';
import pmvLogo from './public/polymarket-visualiser/pmv-logo.png';
import pmv1 from './public/polymarket-visualiser/pmv-1.png';
import leet99Logo from './public/leet99/icon.png';
import leet99Screenshot from './public/leet99/leet99.png';

const Projects = () => {
  const projects = [
    {
      title: 'Leet 99',
      description: 'A fast-paced real-time battle royale where 2-99 players race to solve bite-sized coding problems. Players compete to solve problems while deploying debuffs like Vim Lock, Flashbang, or DDOS attacks on opponents. Last coder standing wins! Inspired by Tetris 99, this project turns the solitary LeetCode grind into a multiplayer showdown.',
      link: 'https://leetcode-99-web-9ed8.vercel.app/',
      repoLink: 'https://github.com/Tien-Cheng/leetcode-99',
      devpostLink: 'https://devpost.com/software/leet-99',
      logo: leet99Logo,
      images: [leet99Screenshot],
      languages: ['Next.js', 'Tailwind CSS', 'daisyUI', 'Monaco Editor', 'PartyKit', 'Judge0 CE', 'Supabase', 'Python']
    },
    {
      title: 'Synaptica',
      description: 'A multi-agent marketplace built on Hedera Hashgraph for orchestrating research tasks across specialized AI agents with autonomous negotiation, execution, and payment.',
      link: 'https://synaptica-ai.vercel.app/',
      repoLink: 'https://github.com/ProvidAI/SynapticaWeb',
      videoLink: 'https://www.youtube.com/watch?v=yMustp3eNXw',
      pitchDeckLink: 'https://drive.google.com/file/d/1M6NUxfYQf7GqnETLo9S6jWGW2O60yNze/view?usp=sharing',
      logo: synapticaLogo,
      images: [synaptica1, synaptica2, synaptica3],
      languages: ['Python', 'Node.js', 'React', 'PostgreSQL', 'SQLite', 'OpenAI API'],
      protocols: ['ERC-8004: Agent Discovery', 'x402: Payment Protocol'],
      descriptionLinks: {
        Hedera: 'https://hedera.com/',
        Hashgraph: 'https://www.hashgraph.com/'
      }
    },
    {
      title: 'Agentic Investment Research Analyst',
      description: 'Agentic Investment Research Analyst is an AI-powered multi-agent system designed to automate the end-to-end equity research process, collecting real-time financial news, extracting key metrics and sentiment, and compiling actionable, sector-specific investment reports and trade ideas.',
      link: 'https://agentic-investment-research-analyst.vercel.app/',
      repoLink: 'https://github.com/choiwab/agentic-investment-research-analyst',
      videoLink: 'https://www.youtube.com/watch?v=EiD2VaJAxtw',
      logo: agenticfinLogo,
      images: [agenticfin],
      languages: ['Langgraph', 'Langchain', 'React', 'MongoDB', 'Airflow', 'FinnHub API', 'FastAPI']
    },
    {
      title: 'Polymarket Visualiser (In Progress)',
      description: 'A real-time visualizer for Polymarket prediction markets. This project provides an interactive treemap visualization of market data, enabling users to explore and analyze prediction market trends with live updates.',
      link: 'https://poly-viz.vercel.app/',
      repoLink: 'https://github.com/choiwab/polymarket-visual',
      logo: pmvLogo,
      images: [pmv1],
      languages: ['Next.js', 'TypeScript', 'D3.js', 'SWR', 'Tailwind CSS', 'Lucide React']
    },
    {
      title: 'Eatwise',
      description: 'My friend Javier Tan and I developed Eatwise, a diet tracking web app. We used React, CSS, and Next.js to build a dynamic frontend, while Firebase and Node.js powered the backend. We deployed Eatwise on Vercel.\nWe integrated the FatSecret Platform REST API to provide accurate food data. We also added features like body type assessments, personalized calorie and nutrition goals, and historical data visualization. Thorough unit, manual, and integration testing ensured the app\'s reliability.',
      link: 'https://eatwise.vercel.app/protected/Home',
      repoLink: 'https://github.com/Incogdino/EatWise', // Add GitHub repo link
      readmeLink: 'https://docs.google.com/document/d/1jGK9rGxmfrxFYeRkWvg3JMLQygjcFFpXhwCW8a1Kddg/edit',
      logo: eatwise,
      images: [ewmain, ewfood, ewbody, ewcom, ewchart], // replace with your project images
      languages: ['React', 'CSS', 'Next.js', 'Firebase', 'Node.js']
    },
    {
      title: 'Easy Read Generator',
      description: 'I engineered a Python-based AI application called Easy Read Generator using Streamlit. This app integrates LangChain and the GPT API to produce accessible reading content for individuals with mental disabilities.\nIt includes web and text scraping tools to process and export resources, such as URLs and PDFs. This feature significantly enhances the app\'s adaptability and reach.',
      //link: 'https://easyread-mpmn4dn5gvyu77x6k6nqq5.streamlit.app/',
      repoLink: 'https://github.com/choiwab/Easy_Read', // Add GitHub repo link
      readmeLink: 'https://docs.google.com/document/d/1gGGssixoUiZYSGmtBh4g9TQB3A6xMpVU2vPgZ1XFwes/edit?usp=sharing', // Add README file link
      logo: easyread,
      images: [erhome, input, paste, image, pdf],
      languages: ['Python', 'Streamlit', 'LangChain', 'GPT API']
    },
    {
      title: 'Octagon Frenzy',
      description: 'I created Octagon Frenzy, a Python-based 2D fighting game for two players using Processing. I designed the UI and GUI elements, including sprite animations and interactive buttons, to enhance the user experience and gameplay mechanics.',
      //link: 'http://link-to-octagon-frenzy.com',
      repoLink: 'https://github.com/choiwab/Octagon-Frenzy', // Add GitHub repo link
      logo: ufc,
      images: [main, character, gameplay, stage, leaderboard],
      languages: ['Python', 'Processing']
    },
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
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                  {projects[selectedProject].descriptionLinks ? (
                    <>
                      A multi-agent marketplace built on <Link href={projects[selectedProject].descriptionLinks.Hedera} target="_blank" rel="noopener" sx={{ color: '#61dafb' }}>Hedera</Link> <Link href={projects[selectedProject].descriptionLinks.Hashgraph} target="_blank" rel="noopener" sx={{ color: '#61dafb' }}>Hashgraph</Link> for orchestrating research tasks across specialized AI agents with autonomous negotiation, execution, and payment.
                    </>
                  ) : (
                    projects[selectedProject].description
                  )}
                </Typography>
                <Link href={projects[selectedProject].link} target="_blank" rel="noopener" sx={{ color: '#61dafb', display: 'block' }}>
                  Visit Project
                </Link>
                <Link href={projects[selectedProject].repoLink} target="_blank" rel="noopener" sx={{ color: '#61dafb', display: 'block' }}>
                  GitHub Repository
                </Link>
                {projects[selectedProject].readmeLink && (
                  <Link href={projects[selectedProject].readmeLink} target="_blank" rel="noopener" sx={{ color: '#61dafb', display: 'block' }}>
                    Project Report
                  </Link>
                )}
                {projects[selectedProject].videoLink && (
                  <Link href={projects[selectedProject].videoLink} target="_blank" rel="noopener" sx={{ color: '#61dafb', display: 'block' }}>
                    Video Demo
                  </Link>
                )}
                {projects[selectedProject].pitchDeckLink && (
                  <Link href={projects[selectedProject].pitchDeckLink} target="_blank" rel="noopener" sx={{ color: '#61dafb', display: 'block' }}>
                    Pitch Deck
                  </Link>
                )}
                {projects[selectedProject].devpostLink && (
                  <Link href={projects[selectedProject].devpostLink} target="_blank" rel="noopener" sx={{ color: '#61dafb', display: 'block' }}>
                    Devpost
                  </Link>
                )}
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <strong>Programming Languages & Tools:</strong> {projects[selectedProject].languages.join(', ')}
                </Typography>
                {projects[selectedProject].protocols && (
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    <strong>Protocols:</strong> {projects[selectedProject].protocols.join(', ')}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  modules={[Navigation]}
                >
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
