import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home/index';

const Tab = createBottomTabNavigator();

const Icons = {
  "Home": {
    name: 'home',
    lib: AntDesign
  },
  "Search": {
    name: 'search',
    lib: Feather
  },
  "Order": {
    name: 'list-alt',
    lib: MaterialIcons
  },
  "Profile": {
    name: 'user',
    lib: Feather
  },
};

export default function TabRoutes() {
  return(
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({color, size, focused}) => {
            const {lib: Icon, name} = Icons[route.name];

            return <Icon name={name} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          style:{
            height: 60
          },
          labelStyle:{
            marginBottom: 5
          },
          iconStyle: {
            marginTop: 5
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Order" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </>
  );
}
