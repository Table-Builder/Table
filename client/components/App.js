import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './Home';
import Navbar from './Navbar';

const myTheme = createTheme({
    palette: {
        primary: {
            main: '#222629',
            light: '#909aa2',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#86C232',
            light: '#a3d55d',
            dark: '#385115',
            contrastText: '#000000',
        },
    },
});

class App extends Component {
    // initially set up a local state
    constructor() {
        super();
        this.state = {
            // some state here
        };
    }

    render() {
        return (
            <ThemeProvider theme={myTheme}>
                <Router>
                    <Navbar />
                    <Route exact path='/' component={Home} />
                </Router>
            </ThemeProvider>
        );
    }
}

export default App;
