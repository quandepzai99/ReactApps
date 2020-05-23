import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from "../../../Common/images";

export default class Banner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.banner} style={styles.banner}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -85,
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  },
  banner: {
    width: 382,
    height: 160,
    borderRadius: 12,
  }
})

