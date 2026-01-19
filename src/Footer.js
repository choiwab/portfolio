import React from 'react';
import { Container, Typography, Box, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: 3 }} className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="body2">
              Address: National University of Singapore, Singapore 118425
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" align="center">
              &copy; {new Date().getFullYear()} Jaehyeok Choi
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
            <IconButton color="inherit" href="https://github.com/choiwab" target="_blank" rel="noopener">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/choiwab/" target="_blank" rel="noopener">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="mailto:j.choi@u.nus.edu">
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
