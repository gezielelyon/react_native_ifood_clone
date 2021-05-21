import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload/index';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

export default function Routes(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Preload" options={{headerShown: false}} component={Preload} />
      <Stack.Screen name="TabRoutes" options={{title: 'Rua José Antônio Santos'}} component={TabRoutes} />
    </Stack.Navigator>
  )
}
