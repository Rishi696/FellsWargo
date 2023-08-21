import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage'; // Create this component
import SigninPage from './Components/SigninPage'; // Create this component
import AdminloginPage from './Components/AdminloginPage'; // Create this component
import UserDashboard from './Components/UserDashboard';
import CreateAccount from './Components/CreateAccount';
import TransferFunds from './Components/TransferFunds';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme

// const theme = createTheme({
//   // Define your theme properties here
//   palette: {
//     primary: {
//       main: '#00A99D',
//       dark: '#001F3F',
//     },
//     secondary: {
//       main: '#141414',
//     },
//   },
//   // Add other theme properties
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={< SigninPage />} />
      <Route path="/admin" element={< AdminloginPage />} />
      <Route path="/userdashboard" element={< UserDashboard />} />
      <Route path="/userdashboard/create-account" element={< CreateAccount />} />
      <Route path="/userdashboard/transfer-without-beneficiary" element={< TransferFunds/>} />
      </Routes>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
