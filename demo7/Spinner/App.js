import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import Spinner from 'react-native-spinkit'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      color: 'red',
      size: 100,
      types: [
        'RotatingPlane'	,
        'WordPress',
        'Wave',
        'WanderingCubes',
        'Pulse',
        'ChasingDots'	,
        'ThreeBounce'	,
        'Circle',
        '9CubeGrid',
        'FadingCircle',
        'FoldingCube',
        'RotatingCircle'
      ]
    }
  }

  changColor = () => {
    this.setState({
      color: '#' + Math.floor(Math.random()*16777215).toString(16)
    })
  }
  increaseSize = () => {
    this.setState({
      size: this.state.size + 15
    })
  }
  next = () => {
    if (this.state.index ++ >= this.state.types.length) {
      this.setState({index: 0})
    }else {
      this.setState({index: this.state.index ++})
    }
  }

  render() {
    const type = this.state.types[this.state.index]
    return (
      <View style={styles.container}>
        <Spinner style={styles.spinner} color={this.state.color} size={this.state.size} type={type}/>
        <Text style={styles.text}>Type: {type}</Text>
        <TouchableOpacity style={styles.button} onPress={this.changColor}>
          <Text style={styles.text}>Change color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.increaseSize}>
          <Text style={styles.text}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.next}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0A0A0'
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#484848',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  spinner: {
    marginBottom: 50
  }
})

