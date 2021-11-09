import React, { Component } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const ToolbarNav = styled(Toolbar)(({ theme }) => ({
    height: 64,
    [theme.breakpoints.up('sm')]: {
        height: 70,
    },
}));

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

const Navbar = () => {
    return (
        <div>
            <AppBar position='fixed'>
                <AppBar position='fixed' elevation={0}>
                    <ToolbarNav sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ flex: 1 }} />
                        <Link
                            variant='h6'
                            underline='none'
                            color='inherit'
                            href=''
                            sx={{ fontSize: 24 }}
                        >
                            {'Hello World'}
                        </Link>
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Link
                                color='inherit'
                                variant='h6'
                                underline='none'
                                href=''
                                sx={rightLink}
                            >
                                {'Sign In'}
                            </Link>
                            <Link
                                variant='h6'
                                underline='none'
                                href=''
                                sx={{
                                    ...rightLink,
                                    color: 'red',
                                }}
                            >
                                {'Sign Up'}
                            </Link>
                        </Box>
                    </ToolbarNav>
                </AppBar>
            </AppBar>
        </div>
    );
};

export default Navbar;
