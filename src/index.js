import React, { Component } from 'react';
import styles from './LoadingBar.css';

class SimpleLoadingBar extends Component {

    render() {
        return (
            <div className="simple__loading__container">
                <div className={'simple__loading__bar ' + (this.props.activeRequests === 0 ? 'simple__loading__bar--done ' : '')} style={{backgroundColor: this.props.color, height: this.props.height}}></div>
            </div>
        );
    };
}


export default SimpleLoadingBar;