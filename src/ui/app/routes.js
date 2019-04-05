import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import TriathlonsIcon from '@material-ui/icons/AccessibilityNew';

import HomeContainer from './components/Home/HomeContainer';
import Triathlons from './components/Triathlons/Triathlons';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContainer,
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
