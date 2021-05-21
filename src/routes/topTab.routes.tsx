import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Restaurant from '../screens/Home/Restaurant/index';
import Supermarkt from '../screens/Home/Supermarkt/index';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
  return(
    <TopTab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Roboto-Bold',
          fontSize: 16,
        },
        activeTintColor: '#ea1d2c',
        inactiveTintColor: '#bbb',
        tabStyle: {
          padding: 0,
          width: 130,
          marginLeft: 15,
          marginRight: -20,
        },
        indicatorStyle: {
          backgroundColor: '#ea1d2c',
          maxWidth: 120,
          width: '100%',
          marginLeft: 20,
        }
      }}
    >
      <TopTab.Screen
        name="Restaurant"
        options={{title: 'Restaurantes'}}
        component={Restaurant}
      />
      <TopTab.Screen
        name="Supermarkt"
        options={{title: 'Mercados'}}
        component={Supermarkt}
      />
    </TopTab.Navigator>
  );
}
