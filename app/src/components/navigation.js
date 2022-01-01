// import {createStackNavigator} from 'react-navigation';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './login';
import SignUp from './signup';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';
export const LoginStack = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false, headerShown: false}}>
    <Stack.Screen name="Home" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export const DashboardStack = () => (
  <Stack.Navigator screenOptions={{gestureEnabled: false, headerShown: false}}>
    <Stack.Screen name="Chats" component={Dashboard} />
    <Stack.Screen
      name="UpdateProfile"
      component={UpdateProfile}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);
