import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload/index';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

export default function Routes(){
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  )
}
