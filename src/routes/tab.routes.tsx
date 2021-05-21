import React, {useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TopTabRoutes from './topTab.routes';
import Search from '../screens/Search/index';
import Orders from '../screens/Orders/index';
import Profile from '../screens/Profile/index';

const Tab = createBottomTabNavigator();

const Icons = {
  TopTabRoutes: {
    name: 'home',
    lib: AntDesign
  },
  Search: {
    name: 'search',
    lib: Feather
  },
  Order: {
    name: 'list-alt',
    lib: MaterialIcons
  },
  Profile: {
    name: 'user',
    lib: Feather
  },
};

export default function TabRoutes() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (<AntDesign name="qrcode" size={28} color="#ff0000" style={{marginRight: 15}} />)
    })
  }, []);

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
            height: 60,
          },
          labelStyle:{
            marginBottom: 5
          },
          iconStyle: {
            marginTop: 5
          },
          activeTintColor: '#ea1d2c',
          inactiveTintColor: '#999'
        }}
      >
        <Tab.Screen
          name="TopTabRoutes"
          options={{title: 'Início'}}
          component={TopTabRoutes}
        />
        <Tab.Screen
          name="Search"
          options={{title: 'Busca'}}
          component={Search}
        />
        <Tab.Screen
          name="Order"
          options={{title: 'Pedidos'}}
          component={Orders}
        />
        <Tab.Screen
          name="Profile"
          options={{title: 'Perfil'}}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
}
