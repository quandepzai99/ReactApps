import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import Header from "./components/Header";
import colors from '../../colors';
import ListProduct from "./components/ListProduct";


class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <ListProduct />
        </ScrollView>
      </View>

    );
  }
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.paleGrey,
  }
})
