import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Extracurriculars from './Extracurriculars';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer'; // Import the Footer component
import './App.css'; // Import the CSS file

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250 }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
        <IconButton onClick={toggleDrawer(false)}><CloseIcon /></IconButton>
      </div>
      <List>
        <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/experience">
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button component="a" href="/projects">
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component="a" href="/education">
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem button component="a" href="/extracurriculars">
          <ListItemText primary="Extracurriculars" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Router>
      <div className="main-content">
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
            <div>
              <IconButton color="inherit" href="https://github.com/choiwab" target="_blank" rel="noopener">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/in/choiwab/" target="_blank" rel="noopener">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="mailto:j.choi@u.nus.edu">
                <EmailIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
        </Routes>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </Router>
  );
};

export default App;
