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
                    <Typography>Hello i am backgroundColor</Typography>
                    <Background sx={backgroundImage} />
                </Container>
                {/* <Paper color='primary'> */}
                {/* <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Paper
                            sx={{
                                variant: 'rounded',
                                position: 'relative',
                                backgroundColor: 'grey.800',
                                color: '#fff',
                                mb: 4,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${faker.image.imageUrl()})`,
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 3,
                                marginRight: '1rem',
                                alignItems: 'flex-end',
                            }}
                        >
                            <h1>We help you stay organised</h1>
                            <p>{faker.fake('{{lorem.paragraph}}')}</p>
                        </Paper>
                        <Paper
                            sx={{
                                variant: 'rounded',
                                backgroundSize: 'cover',
                                backgroundImage: `url(${faker.image.imageUrl()})`,
                            }}
                            style={{
                                flex: 1,
                            }}
                        />
                    </Box>
                </Box> */}
                {/* </Paper> */}
            </HomeRoot>
        );
    }
}

export default Home;
