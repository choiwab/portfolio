import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link as RouterLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Extracurriculars from './Extracurriculars';
import Blog from './Blog';
import PeahiBlogPost from './PeahiBlogPost';
import DeepAgentsBlogPost from './DeepAgentsBlogPost';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';
import './App.css';

const iconSx = {
  color: 'rgba(255,255,255,0.5)',
  transition: 'all 0.2s ease',
  '&:hover': { color: '#f5f5f5', backgroundColor: 'rgba(255,255,255,0.06)' },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Education', href: '/education' },
    { label: 'Extracurriculars', href: '/extracurriculars' },
    { label: 'Blog', href: '/blog' },
  ];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 280 }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px' }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#f5f5f5' } }}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.href}
              sx={{
                py: 1.5,
                px: 3,
                color: 'rgba(255,255,255,0.6)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#f5f5f5',
                },
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <div className="main-content">
          <AppBar position="sticky" elevation={0} sx={{
            backgroundColor: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto' }}>
              <IconButton
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={iconSx}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: '#141414',
                    borderRight: '1px solid rgba(255,255,255,0.08)',
                  }
                }}
              >
                {list()}
              </Drawer>
              <div>
                <IconButton aria-label="GitHub profile" sx={iconSx} href="https://github.com/choiwab" target="_blank" rel="noopener">
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="LinkedIn profile" sx={iconSx} href="https://www.linkedin.com/in/choiwab/" target="_blank" rel="noopener">
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="Email Jaehyeok" sx={iconSx} href="mailto:j.choi@u.nus.edu">
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/building-reliable-ai-underwriting" element={<PeahiBlogPost />} />
            <Route path="/blog/deep-agents-mcp-harness" element={<DeepAgentsBlogPost />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
