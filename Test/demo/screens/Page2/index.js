import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import Header from "./components/Header";
import PinCode from "./components/PinCode";
import Footer from "./components/Footer";

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PinCode />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})

