import React from 'react';
import { Container, Typography, Box, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const footerIconSx = {
  color: 'rgba(255,255,255,0.4)',
  transition: 'all 0.2s ease',
  '&:hover': { color: '#818cf8', backgroundColor: 'rgba(129,140,248,0.08)' },
};

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0a0a0a', color: 'rgba(255,255,255,0.5)', padding: 4, borderTop: '1px solid rgba(255,255,255,0.08)' }} className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
              Address: National University of Singapore, Singapore 118425
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" align="center" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} Jaehyeok Choi
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
            <IconButton sx={footerIconSx} href="https://github.com/choiwab" target="_blank" rel="noopener">
              <GitHubIcon />
            </IconButton>
            <IconButton sx={footerIconSx} href="https://www.linkedin.com/in/choiwab/" target="_blank" rel="noopener">
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={footerIconSx} href="mailto:j.choi@u.nus.edu">
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
