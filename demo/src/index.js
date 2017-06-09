import React, {Component} from 'react'
import {render} from 'react-dom'

import SimpleLoadingBar from '../../src'

class Demo extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { activeRequests: 1, isInitiated: true };
    };

    componentDidMount() {
        setTimeout(function() {
            this.setState({ activeRequests: 2 });
        }.bind(this), 500);
        setTimeout(function() {
            this.setState({ activeRequests: 1 });
        }.bind(this), 1200);
        setTimeout(function() {
            this.setState({ activeRequests: 0 });
        }.bind(this), 1500);
        setTimeout(function() {
            this.setState({ activeRequests: 1 });
        }.bind(this), 5000);
        setTimeout(function() {
            this.setState({ activeRequests: 0 });
        }.bind(this), 7000);
        setTimeout(function() {
            this.setState({ activeRequests: 3 });
        }.bind(this), 10000);
        setTimeout(function() {
            this.setState({ activeRequests: 2 });
        }.bind(this), 12000);
        setTimeout(function() {
            this.setState({ activeRequests: 1 });
        }.bind(this), 13000);
        setTimeout(function() {
            this.setState({ activeRequests: 0 });
        }.bind(this), 14000);
        setTimeout(function() {
            this.setState({ activeRequests: 1 });
        }.bind(this), 17000);
        setTimeout(function() {
            this.setState({ activeRequests: 0 });
        }.bind(this), 17500);
    };

    render() {
        return <div>
            <h1>react-simple-loading-bar</h1>
            <h2>Active Requests: {this.state.activeRequests}</h2>
            <SimpleLoadingBar isInitiated={this.state.isInitiated} activeRequests={this.state.activeRequests}></SimpleLoadingBar>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
