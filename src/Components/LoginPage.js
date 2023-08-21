import React, { useState } from 'react';
import { Container, Paper, Button, CssBaseline, Typography, TextField, Box } from '@mui/material';
import { styled } from '@mui/system';
import NavBar from './NavBar';
import {useNavigate} from 'react-router-dom';

const RootContainer = styled('div')({
  background: 'linear-gradient(135deg, #00A99D 0%, #141414 50%, #001F3F 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ContentContainer = styled('div')({
  marginTop: '64px', // Adjust as needed
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
});

const PaperStyled = styled(Paper)({
  padding: '24px', // Increase the padding to extend the background
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
});

const InputStyled = styled(TextField)({
  marginBottom: '16px', // Add margin to the bottom of each input
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const StyledButton = styled(Button)({
  marginTop: '16px',
});

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
   const handleLogin = () => {
    // Handle login logic here
    sessionStorage.setItem('userId', userId);
    navigate("/userdashboard");
  };

  return (
    <RootContainer>
      <CssBaseline />
      <NavBar />
      <ContentContainer>
        <Container maxWidth="xs">
          <PaperStyled elevation={3}>
            <Typography variant="h4" color="primary" align="center" gutterBottom>
              Login
            </Typography>
            <form>
              <InputStyled
                label="User ID"
                variant="outlined"
                fullWidth
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <InputStyled
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <StyledButton variant="contained" color="secondary" fullWidth onClick={handleLogin}>
                Login
              </StyledButton>
            </form>
          </PaperStyled>
        </Container>
      </ContentContainer>
    </RootContainer>
  );
};

export default LoginPage;

