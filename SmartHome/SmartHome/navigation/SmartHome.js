// In App.js in a new project

import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

export default class SmartHome extends Component {
  render() {
    return (
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


