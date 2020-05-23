import React, {Component} from 'react';
import {View} from 'react-native';
import ResetPassword from "./screens/Page1/ResetPassword";
import Page2 from './screens/Page2';
import Test from "./screens/Page2/components/test";

class App extends Component {
  render() {
    return (
      <View barStyle={'light-content'}>
        {/*<ResetPassword />*/}
        <Page2 />
        {/*<Test />*/}
      </View>
    );
  }
}

export default App;
