import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './NavBar'; // Import the Navbar component


const RootContainer = styled('div')({
  background: 'linear-gradient(135deg, #00A99D 0%, #141414 50%, #001F3F 100%)',
  backgroundSize: 'cover',
  minHeight: '100vh',
});

const HomePage = () => {
  return (
    <RootContainer>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md" sx={{ paddingTop: '20vh' }}>
        <Typography variant="h4" gutterBottom color="primary">
          Welcome to Wells Fargo Bank
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Your trusted banking partner.
        </Typography>
      </Container>
    </RootContainer>
  );
};

export default HomePage;
