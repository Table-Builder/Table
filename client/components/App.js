import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';

import Home from './Home';
import Navbar from './Navbar';

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
            <Router>
                <Navbar />
                <Route exact path='/' component={Home} />
            </Router>
        );
    }
}

export default App;
