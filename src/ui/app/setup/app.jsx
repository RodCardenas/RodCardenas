import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route, Switch } from 'react-router-dom';

// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducer';

import theme from '../util/theme';

import Layout from '../components/Layout/Layout';

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

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </MuiThemeProvider>
    </Provider>
  </Router>
);

export default App;
