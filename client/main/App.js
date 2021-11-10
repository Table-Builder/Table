import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Home from './Home';
import Navbar from './Navbar';
import myTheme from '../style/theme';

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
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }
}

export default App;
