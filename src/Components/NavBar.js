// import React from 'react';
// import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import { Link } from 'react-router-dom';

// const AppBarStyled = styled(AppBar)({
//   background: 'transparent',
//   boxShadow: 'none',
// });

// const TitleLink = styled(Link)({
//   flexGrow: 1,
//   textDecoration: 'none',
//   display: 'flex', // Display flex to align items horizontally
//   alignItems: 'center', // Center items vertically
//   color: 'inherit',
// });

// const NavigationButtons = styled('nav')({
//   display: 'flex',
//   flexDirection: 'row', // Align buttons horizontally
//   alignItems: 'center',
// });

// const ButtonStyled = styled(Button)({
//   margin: '0 8px',
//   backgroundColor: 'rgba(255, 255, 255, 0.15)',
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.25)',
//   },
// });

// const RedText = styled(Typography)({
//   color: '#FF4136', // Red color
// });

// const YellowText = styled(Typography)({
//   color: '#FFDC00', // Yellow color
// });

// const NavBar = () => {
//   return (
//     <AppBarStyled position="static">
//       <Toolbar>
//         <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <TitleLink to="/" className="title">
//             <RedText variant="h1" style={{ marginRight: '8px' }}>
//               Wells
//             </RedText>
//             <YellowText variant="h1">Fargo</YellowText>
//           </TitleLink>
//           <NavigationButtons>
//             <ButtonStyled component={Link} to="/login" color="inherit">
//               Login
//             </ButtonStyled>
//             <ButtonStyled component={Link} to="/signin" color="inherit">
//               Sign Up
//             </ButtonStyled>
//             <ButtonStyled component={Link} to="/admin" color="inherit">
//               Admin Login
//             </ButtonStyled>
//           </NavigationButtons>
//         </Container>
//       </Toolbar>
//     </AppBarStyled>
//   );
// };

// export default NavBar;
import React from 'react';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const AppBarStyled = styled(AppBar)({
  background: 'transparent',
  boxShadow: 'none',
});

const TitleLink = styled(Link)({
  flexGrow: 1,
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center', // Align vertically
});

const NavigationButtons = styled('nav')({
  display: 'flex',
  flexDirection: 'row', // Align buttons horizontally
  alignItems: 'center',
});

const ButtonStyled = styled(Button)({
  margin: '0 8px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
});

const RedText = styled(Typography)({
  color: '#FF4136', // Red color
});

const YellowText = styled(Typography)({
  color: '#FFDC00', // Yellow color
});

const NavBar = () => {
  return (
    <AppBarStyled position="static">
      <Toolbar>
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TitleLink to="/" className="title">
            <RedText variant="h1">Wells</RedText>
            <YellowText variant="h1">Fargo</YellowText>
          </TitleLink>
          <NavigationButtons>
            <ButtonStyled component={Link} to="/login" color="inherit">
              Login
            </ButtonStyled>
            <ButtonStyled component={Link} to="/signin" color="inherit">
              Sign Up
            </ButtonStyled>
            <ButtonStyled component={Link} to="/admin" color="inherit">
              Admin Login
            </ButtonStyled>
          </NavigationButtons>
        </Container>
      </Toolbar>
    </AppBarStyled>
  );
};

export default NavBar;
