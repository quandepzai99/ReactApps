import React, {Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

var click = 0
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      customFont: ""
    }
  }

  changeFont = () => {
      click += 1
    switch (click) {
      case 1:
        this.setState({customFont: "AlexBrush-Regular"})
        break;
      case 2:
        this.setState({customFont: "Amatic-Bold"})
        break;
      case 3:
        this.setState({customFont: "AmaticSC-Regular"})
        break;
      case 4:
        this.setState({customFont: "Pacifico"})
        break;
      case 5:
        this.setState({customFont: "Windsong"})
        click = 0
        break;

      default:
        break;
    } {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, {fontFamily: this.state.customFont}]}>Welcome to Vietnam</Text>
        <TouchableOpacity style={styles.button}
          onPress={this.changeFont.bind(this)}
        >
            <Text style={styles.text}>Change Font</Text>
        </TouchableOpacity>
      </View>
  )
    ;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'AlexBrush-Regular',
    color: '#FF00CC'
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#484848',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10
  }
})



