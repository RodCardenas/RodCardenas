import React from 'react';
import PropTypes from 'prop-types';

import AppBarAndDrawer from '../AppBarAndDrawer/AppBarAndDrawer';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBarAndDrawer location={this.props.location} />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
};

export default Layout;
