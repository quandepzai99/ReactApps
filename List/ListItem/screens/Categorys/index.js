import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from "../../colors";
import Header from '../Categorys/components/Header'
import TopTab from "./components/TopTab";
import Product from "./components/Product";


class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TopTab />
        <Product />
      </View>
    );
  }
}

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleGrey,
    flex: 1
  }
})
