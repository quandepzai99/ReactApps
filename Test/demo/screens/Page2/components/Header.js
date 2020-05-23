import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class Header extends Component {
  render() {
    return (
        <LinearGradient
          colors={['rgb(125,37,129)', 'rgb(247,105,30)', 'transparent']}
          style={styles.container}
          startPoint={[0, 0]}
          endPoint={[1, 1]}
        >
          <Text style={styles.text}>Đổi mật khẩu</Text>
        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    height: 300,


  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  }
})

