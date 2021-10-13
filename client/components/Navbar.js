import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} component='nav'>
            <AppBar position='static' style={{ background: '#009933' }}>
                <Toolbar
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Dashboard</Button>
                    <Button color='inherit'>Log in</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
