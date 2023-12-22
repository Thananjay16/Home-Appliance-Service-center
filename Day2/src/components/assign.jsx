import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './assign.css';
import TemporaryDrawer from './Drawer';

const MyAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={toggleDrawer} sx={{width:30}}>
          <TemporaryDrawer open={isDrawerOpen} onClose={toggleDrawer} />
        </Button>
        <Typography variant="h6"  sx={{ marginLeft: 3}}>
          Home Applince Service Center
        </Typography>
        <Button color="inherit" component={Link} to="/home" sx={{ marginLeft: 73 }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/Menu" sx={{ marginRight: 1 }}>
          Service
        </Button>
        <Button color="inherit" component={Link} to="/about" sx={{ marginRight: 1 }}>
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/contact" sx={{ marginRight: 1 }}>
          Contact Us
        </Button>
        <Button color="inherit" component={Link} to="/">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
