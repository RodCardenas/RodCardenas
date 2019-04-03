import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import Home from './components/Home/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    icon: <HomeIcon />,
  },
];

export default routes;
