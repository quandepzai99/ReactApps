/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class InputNumberButton extends Component{
  render() {
    const {value, handleOnpress} = this.props;
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleOnpress(value)}>
          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 26,
  }
});

