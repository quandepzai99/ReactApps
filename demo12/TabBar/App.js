import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import {JournalScreen, ProfileScreen, MeasuresScreen, TreatmentScreen} from "./screens";
import AddButton from "./components/AddButton";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Journal"
          component={JournalScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="book" color={'#000'} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Measures"
          component={MeasuresScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heartbeat" color={'#000'} size={24} />
            ),
          }}
        />
          <Tab.Screen
            name="AddButton"
            component={AddButton}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AddButton />
              ),
            }}
          />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="band-aid" color={'#000'} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Treatment"
          component={TreatmentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={'#000'} size={24} />
            ),
          }}
        />

        

      </Tab.Navigator>
    </NavigationContainer>
  );
}
