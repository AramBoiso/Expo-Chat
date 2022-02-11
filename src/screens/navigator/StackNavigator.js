import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat } from '../Chat';
import { Home } from '../Home';
import { Login } from '../Login';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}