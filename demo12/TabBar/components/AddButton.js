import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Animated} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'


class AddButton extends Component {

  buttonSize = new Animated.Value(1);
  mode = new Animated.Value(0);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize,{
        toValue: 0.95,
        duration: 200
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1
      }),
      Animated.timing(this.mode, {
        toValue: this.mode.__value === 0 ? 1 : 0
      })
    ]).start();
  }

  render() {
    const sizeStyle = {
      transform: [{scale: this.buttonSize}]
    };
    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg']
    });
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100]
    });
    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100]
    });
    return (
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Animated.View style={{position: 'absolute', left: thermometerX, top: thermometerY}}>
          <View style={styles.secondaryButton}>
            <Feather name={'thermometer'} size={24} color={'#fff'}/>
          </View>
        </Animated.View>
        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableHighlight onPress={this.handlePress} underlayColor={'#7f58ff'}>
            <Animated.View style={{transform: [{rotate: rotation}]}}>
              <FontAwesome name={'plus'} size={24} color={'#fff'}/>
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7f58ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    top: -60,
    shadowColor: '#7f58ff',
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#fff"
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7e58ff'
  }
})
