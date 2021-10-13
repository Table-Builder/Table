import React, { Component } from 'react';
import { AppBar, Box, Toolbar, Button, Paper } from '@mui/material';

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} component='nav'>
                <AppBar position='static' style={{ background: '#009933' }}>
                    <Toolbar
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flex: 3,
                            }}
                        >
                            <Button color='inherit'>Home</Button>
                            <Button color='inherit'>Dashboard</Button>
                            <Button color='inherit'>Button3</Button>
                            <Button color='inherit'>Button4</Button>
                        </Box>
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                flex: 1,
                            }}
                        >
                            <Button color='inherit'>Log in</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbar;
