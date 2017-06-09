# react-simple-loading-bar

[![npm package][npm-badge]][npm]

Inspired by react-redux-loading-bar but without the middleware. Handles simultaneous active requests.

![Demo GIF](https://user-images.githubusercontent.com/1689831/26979122-0c1f73e8-4d2e-11e7-89a3-6f99de87ced3.gif)


## Installation

```bash
npm install --save react-simple-loading-bar
```


## Including it:
```javascript
import SimpleLoadingBar from 'react-simple-loading-bar'

<SimpleLoadingBar isInitiated={this.state.isInitiated} activeRequests={this.state.activeRequests}></SimpleLoadingBar>
```

This is my recommended way of using the loading bar (well, not mine, I read it somewhere but I can't remember the source). The important thing is that you need to set activeRequests to a value above 0 when you want to start the loading bar. Set it to 0 when you want the loading bar to finish.

## Set these in your state:
```javascript
activeRequests: state.global.activeRequests,
isInitiated: state.global.isInitiated
```


## Actions:
```javascript
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
```

## Reducer:
```javascript
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
```

## Settings:

#### Set color:
```
<SimpleLoadingBar isInitiated={this.state.isInitiated} activeRequests={this.state.activeRequests} color={this.state.color}></SimpleLoadingBar>
```

#### Set height:
```
<SimpleLoadingBar isInitiated={this.state.isInitiated} activeRequests={this.state.activeRequests} height={this.state.height}></SimpleLoadingBar>
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-simple-loading-bar
