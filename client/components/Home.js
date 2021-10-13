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
                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h1>We help you stay organised</h1>
                            <p>{faker.fake('{{lorem.paragraph}}')}</p>
                        </Box>
                    </Box>
                </Box>
                <Paper
                    sx={{
                        elevation: 3,
                        position: 'relative',
                        backgroundColor: 'grey.800',
                        color: '#fff',
                        mb: 4,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://source.unsplash.com/random)`,
                    }}
                ></Paper>
            </Box>
        );
    }
}

export default Home;
