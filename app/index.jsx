// Browser Coverage
import '@babel/polyfill';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// CSS Reset
import 'sanitize.css/sanitize.css';
import App from './setup/app';
import reducer from './setup/reducer';

const history = createHashHistory();

let store = createStore(
  reducer(history),
  compose(applyMiddleware(routerMiddleware(history), thunk)),
);

if (process.env.NODE_ENV === 'development') {
  const isChrome =
    typeof window.chrome === 'object' &&
    navigator.appVersion.indexOf('Edge') === -1;

  if (isChrome) {
    store = createStore(
      reducer(history),
      composeWithDevTools(applyMiddleware(thunk, logger)),
    );
  } else {
    store = createStore(
      reducer(history),
      compose(applyMiddleware(thunk, logger)),
    );
  }
}

const REACT_MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App store={store} />, REACT_MOUNT_NODE);

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./setup/app', () => {
    ReactDOM.unmountComponentAtNode(REACT_MOUNT_NODE);
    ReactDOM.render(<App store={store} />, REACT_MOUNT_NODE);
  });
}
