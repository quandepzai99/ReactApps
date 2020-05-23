import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Product from "./screens/ Product"
import Home from './screens/Home';
import Category from './screens/Categorys';

export default class App extends Component {
  render() {
    return (
      // <Product/>
      // <Home />
      <Category />
    );
  }
}

