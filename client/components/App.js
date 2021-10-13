import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

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
            <div>
                <h1>Hello from the Component</h1>
            </div>
        );
    }
}

export default App;
