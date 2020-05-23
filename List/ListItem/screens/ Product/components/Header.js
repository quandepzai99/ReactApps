import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from "../../../colors";

export default class Header extends Component {
  render() {
    return (
        <ImageBackground source={require('../../../assets/header.png')} style={{height: 88}}>
          <View style={styles.container}>


            {/*<View style={styles.bottom}>*/}
              <AntDesign name={'left'} size={20} color={colors.paleGrey} />
              <Text style={styles.text}>Phụ kiện - Thiết bị số</Text>
              <Image source={require('../../../assets/shipment.png')} />
            {/*</View>*/}
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems:"flex-end",
    flex:1,
    flexDirection: "row",
    bottom: 10,
    marginHorizontal: 18
  },
  text: {
    fontSize: 17,
    color: colors.while,
    fontWeight: '200'
  }
})

