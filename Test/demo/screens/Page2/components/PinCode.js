import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

export default class PinCode extends Component {

  render() {

    return (
      <View style={styles.container}>


          <SmoothPinCodeInput
            placeholder={<View style={{
              width: 15,
              height: 15,
              borderRadius: 25,
              opacity: 0.3,

              marginBottom: 35,
              borderWidth: 1,
              borderColor: '#424242'
            }}></View>}
            mask={<View style={{
              width: 15,
              height: 15,
              borderRadius: 25,
              backgroundColor: 'blueviolet',
              marginBottom: 35,
              borderWidth: 1,
              borderColor: '#424242'
            }}></View>}
            maskDelay={1000}
            password={true}
            cellStyle={null}
            codeLength={6}
            cellStyleFocused={null}
            value={'code'}
            onTextChange={() => this.setState({  })}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    height: 50,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 18,
  }
})
