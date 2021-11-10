import React, { Component } from 'react';
import faker from 'faker';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const HomeRoot = styled('section')(({ theme }) => ({
    color: theme.palette.primary.main,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
    },
}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

const backgroundImage = { backgroundImage: `url(${faker.image.imageUrl()})` };

class Home extends Component {
    render() {
        return (
            <HomeRoot>
                <Container
                    sx={{
                        mt: 3,
                        mb: 14,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography>Welcome to the home page</Typography>
                    <Background sx={backgroundImage} />
                </Container>
            </HomeRoot>
        );
    }
}

export default Home;
