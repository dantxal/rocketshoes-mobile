import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import colors from './styles/colors';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        // eslint-disable-next-line react/jsx-props-no-spreading
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
