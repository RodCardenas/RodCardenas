// Browser Coverage
import '@babel/polyfill';

// React
import React from 'react';
import ReactDOM from 'react-dom';

import App from './setup/app';

const REACT_MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, REACT_MOUNT_NODE);

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./setup/app', () => {
    ReactDOM.unmountComponentAtNode(REACT_MOUNT_NODE);
    ReactDOM.render(<App />, REACT_MOUNT_NODE);
  });
}
