# react-simple-loading-bar

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Inspired by react-redux-loading-bar but without the middleware. Handles simultaneous active requests.

Including it:

    import SimpleLoadingBar from 'react-simple-loading-bar'

    <SimpleLoadingBar isInitiated={this.state.isInitiated} activeRequests={this.state.activeRequests}></SimpleLoadingBar>

This is my recommended way of using the loading bar. The important thing is that you need to set activeRequests to a value above 0 when you want to start the loading bar. Set it to 0 when you want the loading bar to finish.

Set these in your state:

    isLoading: state.global.activeRequests,
    isInitiated: state.global.isInitiated



Your actions:

    const GlobalActions = {

        isLoading: function () {
            return {
                type: 'IS_LOADING'
            }
        },

        hasLoaded: function () {
            return {
                type: 'HAS_LOADED'
            }
        }
    }

    export default GlobalActions;



Your reducer:

    const initialState = {
        activeRequests: 0,
        isInitiated: false
    }

    const GlobalReducer = function reducer(state = initialState, action) {
        switch (action.type) {
            case 'IS_LOADING':
                return Object.assign({}, state, { activeRequests: state.activeRequests + 1, isInitiated: true });
            case 'HAS_LOADED':
                return Object.assign({}, state, { activeRequests: state.activeRequests - 1 });
            default:
                return state;
        }
    };

    export default GlobalReducer;




[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
