import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Routes from '../../routes';

import AppBarAndDrawer from '../AppBarAndDrawer/AppBarAndDrawer';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBarAndDrawer location={this.props.location} />
        <Switch>
          {Routes.map(route => {
            if (route.exact) {
              return (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
};

export default Layout;
