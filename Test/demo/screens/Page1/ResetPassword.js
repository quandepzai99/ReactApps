import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView, Text, Image} from 'react-native'

export default class ResetPassword extends Component {

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar   transparent
                     barStyle="light-content"/>
        <Image source={require('../../assets/banner.jpg')} style={{width: '100%'}} />
        <Text style={styles.Text}>Đặt lại mật khẩu</Text>
        <View style={styles.modal}>
          <Image source={require('../../assets/checked.png')} style={{marginBottom: 20}}/>
          <Text style={styles.Text2}>Đặt mật khẩu thành công</Text>
          <View style={styles.modal2}>
            <Text style={{color: '#fff', fontSize: 17}}>Đăng nhập lại</Text>
          </View>
        </View>

      </SafeAreaView>


    );
  }
}

const styles = StyleSheet.create({
  Text: {
    position: 'absolute',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  modal: {
    width: 382,
    height: 264,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 382/2,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Text2: {
    fontSize: 20,
    fontWeight: '100',
    color: 'green',
    marginBottom: 15
  },
  modal2: {
    backgroundColor: 'purple',
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  }
})


