import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import SmartHome from "./navigation/SmartHome";

class App extends Component {
  render() {
    return (
      <ScrollView>
        <SmartHome/>
      </ScrollView>
    );
  }
}

export default App;
