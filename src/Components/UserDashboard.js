// 
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './NavBar'; // Import the Navbar component
import SideNav from './SideNav'; // Import the SideNav component

const RootContainer = styled('div')({
  background: 'linear-gradient(135deg, #00A99D 0%, #141414 50%, #001F3F 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const DashboardContainer = styled(Container)({
  marginTop: '64px', // Adjust as needed
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
});

const WelcomeText = styled(Typography)({
  marginTop: '24px',
  fontSize: '24px',
});

const UserDashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve user's name from session storage
    const storedUserName = sessionStorage.getItem('userId');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <RootContainer>
      <DashboardContainer>
        <SideNav />
        <WelcomeText variant="h4" color="primary" align="center">
          Welcome, {userName}!
        </WelcomeText>
        {/* Add other dashboard content here */}
      </DashboardContainer>
    </RootContainer>
  );
};

export default UserDashboard;
