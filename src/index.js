import React, { Component } from 'react';
import styles from './LoadingBar.css';

class SimpleLoadingBar extends Component {

    constructor(props, context) {
        super(props, context);
    };

    render() {
        return (
            <div className="loading__container">
                <div className={'loading__bar ' + (this.props.isInitiated ? 'loading__bar--start ' : '') + (this.props.activeRequests === 0 ? 'loading__bar--done ' : '')} style={{backgroundColor: this.props.color}}></div>
            </div>
        );
    };
}


export default SimpleLoadingBar;