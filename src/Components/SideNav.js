import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const SideNavDrawer = styled(Drawer)({
  width: '250px',
  background: 'linear-gradient(135deg, #00A99D 0%, #141414 50%, #001F3F 100%)',
});

const CustomButton = styled(Button)({
  color: 'green',
  padding: '10px 20px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.3)',
  },
  // Add background around the text
  background: 'rgba(0, 255, 0, 0.2)',
  backdropFilter: 'blur(5px)',
  transition: 'background 0.3s',
  '&:hover': {
    background: 'rgba(0, 255, 0, 0.3)',
  },
});

const LogoutButton = styled(Button)({
  color: 'red',
  padding: '10px 20px',
  borderRadius: '5px',
  marginTop: 'auto',
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
});

const SideNav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleTransferClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <SideNavDrawer variant="permanent">
      <List>
        <ListItem>
          <CustomButton onClick={handleTransferClick}>
            <ListItemText primary="Transfer Funds" />
          </CustomButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/userdashboard/transfer-with-beneficiary"
            >
              With Beneficiary
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/userdashboard/transfer-without-beneficiary"
            >
              Without Beneficiary
            </MenuItem>
          </Menu>
        </ListItem>
        <ListItem>
          <CustomButton component={Link} to="/userdashboard/account-summary" fullWidth>
            <ListItemText primary="Account Summary" />
          </CustomButton>
        </ListItem>
        <ListItem>
          <CustomButton component={Link} to="/userdashboard/account-statement" fullWidth>
            <ListItemText primary="Account Statement" />
          </CustomButton>
        </ListItem>
        <Divider />
        <ListItem>
          <CustomButton component={Link} to="/userdashboard/change-password" fullWidth>
            <ListItemText primary="Change Password" />
          </CustomButton>
        </ListItem>
        <ListItem>
          <CustomButton component={Link} to="/userdashboard/create-account" fullWidth>
            <ListItemText primary="Create Account" />
          </CustomButton>
        </ListItem>
        <Divider />
        <ListItem>
          <LogoutButton onClick={handleLogout} fullWidth>
            <ListItemText primary="Logout" />
          </LogoutButton>
        </ListItem>
      </List>
    </SideNavDrawer>
  );
};

export default SideNav;





