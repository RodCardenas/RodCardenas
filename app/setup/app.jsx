import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Loadable from 'react-loadable';
import { CircularProgress } from '@material-ui/core';

import theme from '../util/theme';

import './reset.css';
import './layout.css';

const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 140px)',
};

const Loading = () => (
  <div style={loadingStyle}>
    <CircularProgress />
  </div>
);

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <div className="layout-area">
          <Switch>
            <Route path="/" component={<div>Hi!</div>}/>
          </Switch>
          <Notifier />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
