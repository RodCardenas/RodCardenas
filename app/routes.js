import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import TriathlonsIcon from '@material-ui/icons/AccessibilityNew';

import Home from './components/Home/Home';
import Triathlons from './components/Triathlons/Triathlons';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    icon: <HomeIcon />,
  },
  {
    path: '/Triathlons',
    name: 'Triathlons',
    component: Triathlons,
    icon: <TriathlonsIcon />,
  },
];

export default routes;
