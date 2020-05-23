import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <AntDesign name={'left'} size={15} color={'#7b7979'}/>
        <Text style={{fontSize: 15, color: '#6c6a6a', marginLeft: 4}}>Quay lại</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  }
})




