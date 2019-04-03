import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import { NavLink } from 'react-router-dom';

import Routes from '../../routes';

import Logo from '../../../assets/img/logo.png';

class AppBarAndDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.getDrawer = this.getDrawer.bind(this);
    this.manageDrawer = this.manageDrawer.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getRouteName() {
    let name = null;
    Routes.map(route => {
      if (route.path === this.props.location.pathname) {
        name = route.name;
      }
      return null;
    });
    return name;
  }

  manageDrawer() {
    if (window.innerWidth < 993) {
      this.setState({ isOpen: false });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.manageDrawer);
  }

  getDrawer() {
    return (
      <React.Fragment>
        <img id="logo" src={Logo} alt="rodcardenas-logo" />
        <Divider />
        <List>
          {Routes.map(route => (
            <ListItem
              button
              key={route.name}
              component={NavLink}
              to={route.path}
              onClick={this.toggleDrawer}
            >
              {route.icon ? <ListItemIcon>{route.icon}</ListItemIcon> : null}
              <ListItemText primary={route.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" id="header-route-name">
              {this.getRouteName()}
            </Typography>
          </Toolbar>
        </AppBar>

        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.isOpen}
              onClose={this.toggleDrawer}
            >
              {this.getDrawer()}
            </Drawer>
          </Hidden>
        </nav>
      </React.Fragment>
    );
  }
}

AppBarAndDrawer.propTypes = {
  location: PropTypes.object,
};

export default AppBarAndDrawer;
