import React, {Component} from 'react';
import {View} from 'react-native';
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

class Test extends Component {
  render() {
    return (
      <SmoothPinCodeInput password mask="﹡"
                          cellSize={36}
                          codeLength={8}
                          value={'password'}
                          onTextChange={password => this.setState({ password })}/>
    );
  }
}

export default Test;
