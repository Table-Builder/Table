import React, { Component } from 'react';
import faker from 'faker';
import { AppBar, Box, Toolbar, Button, Paper } from '@mui/material';

class Home extends Component {
    render() {
        return (
            <Box>
                <Box
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
                </Box>
            </Box>
        );
    }
}

export default Home;
