import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from "../../../colors";
import images from "../../../Common/images";

export default class Header extends Component {
  render() {
    return (
      <ImageBackground source={images.header} style={{height: 220}}>

        <View style={styles.searchContainer}>
          <TextInput style={styles.SearchBox}  placeholder={'Thương hiệu'} placeholderTextColor={colors.paleGrey} />
          <AntDesign name={'search1'} size={16} color={colors.paleGrey} style={styles.searchBoxIcon}/>
        </View>

        <View style={styles.container}>
          <Image source={images.show} />
          <Text style={styles.layer}>2.420.000đ</Text>
          <TouchableOpacity style={styles.rectangle2376}>
            <Image source={require('../../../assets/bt+.png')} />
            <Text style={styles.npThUrBox}>Nạp thẻ Urbox</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  container: {
    justifyContent: 'space-between',
    alignItems:"center",
    flexDirection: "row",
    marginHorizontal: 14,
    marginTop: 14
  },
  SearchBox: {
    backgroundColor: "rgba(114, 13, 93, 0.5)",
    elevation: 10,
    borderRadius: 20,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 6,
    paddingLeft: 30,
    padding: 12,
    fontSize: 16,
    opacity: 0.6
  },
  searchBoxIcon: {
    top: 23,
    position: 'absolute',
    left: 10
  },
  layer: {
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.tangerine,
    right: 15
  },
  rectangle2376: {
    flexDirection: 'row',
    width: 116,
    height: 32,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: "rgba(247, 190, 0, 0.2)",
    borderStyle: "solid",
    borderWidth: 1,
    paddingLeft: 6,
    borderColor: colors.tangerine
  },
  npThUrBox: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.tangerine,
    right: 6,
    left: 6
  }
})

