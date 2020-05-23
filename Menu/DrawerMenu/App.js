import React from 'react';
import {Navigation} from "react-native-navigation";
import {createDrawerNavigator} from "@react-navigation/stack";
import {AppRegistry} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import {ProfileScreen, ActivityScreen, ListScreen, MessageScreen, SignOutScreen, StatisticScreen} from "./screens";

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  ActivityScreen,
  ListScreen,
  MessageScreen,
  SignOutScreen,
  StatisticScreen
});

export default DrawerNavigator(Navigation)


