import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome'


export default class Screen extends Component {
  render() {
    return (
      <View syle={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity style={{alignItems: 'flex-end',margin: 16}} onPress={this.props.navigation.openDrawer}>
            <FontAwesome name={'bars'} size={24} color='#161294' />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.text}>{this.props.name} Screen</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500'
  }
})

