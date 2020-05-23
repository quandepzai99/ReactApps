import React from 'react';
import {createAppContainer, createStackNavigations} from 'react-navigation';
import {Image} from 'react-native';

import Welcome from '../Screens/Welcome';
// import Login  from '../Screens/Login';
// import Explore from '../Screens/Explore';
// import Browse from '../Screens/Browse';
// import Product from '../Screens/Product';
// import Setting from '../Screens/Setting';

import {theme} from '../comstans';

const screens = createStackNavigations(
  {
    Welcome,
    // Login,
    // Explore,
    // Browse,
    // Product,
    // Setting,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: {Image},
      headerBackTitle: null,
      headerLeftContainer: {},
      headerRightContainer: {},
    },
  },
);
