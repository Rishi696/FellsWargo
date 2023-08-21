import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

const CreateAccountContainer = styled(Container)({
  marginTop: '0',
  marginRight: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #00A99D 0%, #141414 50%, #001F3F 100%)',
  minHeight: '100vh',
  overflow: 'hidden',
  padding: '0',
});

const CreateAccountForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
  padding: '20px',
  backgroundColor: 'black', // Black background color
  borderRadius: '10px',
});

const CreateAccountButton = styled(Button)({
  marginTop: '16px',
  backgroundColor: '#FF69B4', // Pink background color
  '&:hover': {
    backgroundColor: '#FF1493', // Darker pink on hover
  },
});

const StyledTextField = styled(TextField)({
  '& input::placeholder': {
    color: 'white', // White placeholder text color
  },
  '& .MuiInputBase-root': {
    color: 'white', // White text color
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

const CreateAccount = () => {
  const [accountInfo, setAccountInfo] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    aadharNumber: '',
    email: '',
    dob: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccountInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission logic
    console.log('Account info:', accountInfo);
    // Reset the form
    setAccountInfo({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      aadharNumber: '',
      email: '',
      dob: '',
      address: '',
    });
  };

  return (
    <CreateAccountContainer>
      <SideNav />
      <Typography variant="h4" gutterBottom color="primary">
        Create a New Account
      </Typography>
      <CreateAccountForm onSubmit={handleSubmit}>
        <StyledTextField
          name="firstName"
          label="First Name"
          value={accountInfo.firstName}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <StyledTextField
          name="lastName"
          label="Last Name"
          value={accountInfo.lastName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <StyledTextField
          name="mobileNumber"
          label="Mobile Number"
          value={accountInfo.mobileNumber}
          onChange={handleChange}
          margin="normal"
          required
        />
        <StyledTextField
          name="aadharNumber"
          label="Aadhar Number"
          value={accountInfo.aadharNumber}
          onChange={handleChange}
          margin="normal"
          required
        />
        <StyledTextField
          name="email"
          label="Email"
          type="email"
          value={accountInfo.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <StyledTextField
          name="dob"
          label="Date of Birth"
          type="date"
          value={accountInfo.dob}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <StyledTextField
          name="address"
          label="Address"
          multiline
          rows={4}
          value={accountInfo.address}
          onChange={handleChange}
          margin="normal"
          required
        />
        <CreateAccountButton type="submit" variant="contained" color="primary">
          Create Account
        </CreateAccountButton>
      </CreateAccountForm>
    </CreateAccountContainer>
  );
};

export default CreateAccount;
