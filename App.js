import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/screens/navigator/StackNavigator';
import { Text, View } from 'react-native';

export default function App(){
 return(
  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
 );
}