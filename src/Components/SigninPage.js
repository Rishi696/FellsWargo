import React, { useState } from 'react';
import { Container, Paper, Button, CssBaseline, Typography, TextField, Box } from '@mui/material';
import { styled } from '@mui/system';
import NavBar from './NavBar';

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

const PaperStyled = styled(Paper)({
  padding: '32px', // Increase the padding to extend the background
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
});

const SigninPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password || !confirmPassword || !phone.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
      alert('Invalid email format.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!/^[0-9]+$/.test(phone)) {
      alert('Phone number should contain only digits.');
      return;
    }

    // Handle sign in logic here
    console.log('Sign-in data:', {
      name,
      email,
      password,
      phone,
    });
  };

  return (
    <RootContainer>
      <CssBaseline />
      <NavBar />
      <ContentContainer>
        <Container maxWidth="xs">
          <PaperStyled elevation={3}>
            <Typography variant="h4" color="primary" align="center" gutterBottom>
              Sign In
            </Typography>
            <form onSubmit={handleSignIn}>
              <Box>
                <InputStyled
                  label="Customer Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputStyled
                  label="Customer Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputStyled
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputStyled
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <InputStyled
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <StyledButton type="submit" variant="contained" color="secondary" fullWidth>
                Sign In
              </StyledButton>
            </form>
          </PaperStyled>
        </Container>
      </ContentContainer>
    </RootContainer>
  );
};

export default SigninPage;
