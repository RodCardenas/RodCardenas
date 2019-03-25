import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../util/theme';

import './reset.css';
import './layout.css';

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div className="layout-area">Hi!</div>
    </MuiThemeProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
