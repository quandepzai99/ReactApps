import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, StatusBar, ScrollView} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from "../../colors";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import CardShoopping from "./components/CardShoopping";
import images from "../../Common/images";

function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <StatusBar barStyle={'light-content'} />
        <Header />
        <Banner />
        <Product />
        <Product />
      </ScrollView>
      <CardShoopping />
    </View>
  );
}

function VoucherScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>aa!</Text>
    </View>
  );
}

function Vicuatoi() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>bb!</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>cc!</Text>
    </View>
  );
}

function UserScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>dd!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={images.home}/>
          ),
        }}
      />
      <Tab.Screen
        name="Voucher"
        component={VoucherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={images.voucher}/>
          ),
        }}
      />
      <Tab.Screen
        name="Vi của tôi"
        component={Vicuatoi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={images.wallet}/>
          ),
        }}
      />
      <Tab.Screen
        name="Hỗ trợ"
        component={HelpScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={images.help}/>
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={images.user}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default class index extends Component {
  render() {
    return (
      <NavigationContainer >
        <MyTabs/>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

})
