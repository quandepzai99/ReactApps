import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, ToastAndroid} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{flex: 1, flexDirection: 'row', marginBottom: 3}} onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
        <Image style={{width: 100, height: 100, margin: 5}}
          source={{uri: item.image}}/>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.text1}>
            {item.book_title}
          </Text>
          <Text style={styles.text2}>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
      )

  }



  componentDidMount() {
    const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
            dataSource: responseJson.book_array,
            isLoading: false
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderSeparator = () => {
    return(
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}}>

      </View>
    )
  }

  render() {
    return (
      // this.state.isLoading
      //   ?
      //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //     <ActivityIndicator size="Large" color="#330066" animating />
      //   </View>
      //   :
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff'
  },
  text1: {
    fontSize: 20,
    color:'green',
    marginBottom: 15
  },
  text2: {
    fontSize: 17
  }
})

