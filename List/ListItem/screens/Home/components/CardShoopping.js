import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from "../../../colors";

export default class CardShoopping extends Component {
  render() {
    return (
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.container}>
          <View style={styles.viewText}>
            <Text style={styles.text}>99</Text>
          </View>
          <View style={styles.ellip}>
            <AntDesign name={'shoppingcart'} size={26} color={colors.velvet} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 76,
    height: 76,
    borderRadius: 40,
    bottom: 90,
    right: 7,
    backgroundColor: "rgba(114, 13, 93, 0.1)",

  },
  ellip: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: colors.paleGreyThree
  },
  viewText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: colors.velvet,
    zIndex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    bottom: 45,
    left: 48
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.paleGrey
  }
})

