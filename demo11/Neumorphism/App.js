import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Slider} from 'react-native'
import { Icon, Avatar} from 'react-native-elements'
import AntDesign from "react-native-vector-icons/AntDesign";

// FontAwesome5.readLoad();


const gray = '#91a1bd'


export default class App extends Component {

  render() {
    return (

      <View style={styles.container}>
        <SafeAreaView style={{alignSelf: 'stretch'}}>
          <View style={{marginHorizontal: 32, marginTop: 32}}>
            <View style={styles.topContainer}>
              <NeuMorph size={48}>
                <Icon name="arrow-back" size={24} color={gray}/>
              </NeuMorph>
              <View>
                <Text style={styles.playing}>PLAYING NOW</Text>
              </View>
              <NeuMorph size={48}>
              <Icon name={'menu'} size={24} color={gray}/>
              </NeuMorph>
            </View>
            <View style={styles.songArtContainer}>
              <NeuMorph size={350}>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                 size={300}
                  containerStyle={{borderColor: '#d7e3f1', borderRadius: 150, borderWidth: 10}}
                />
              </NeuMorph>
            </View>
            <View style={styles.songContainer}>
              <Text style={styles.title}>Lost it</Text>
              <Text style={styles.artist}>Flume if. WizK'laid</Text>
            </View>
            <View style={styles.trackContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.time}>1:21</Text>
                <Text style={styles.time}>3:40</Text>
              </View>
              <Slider minimumValue={0} maximumValue={1} minimumTrackTintColor={'#8aaaff'} thumbTintColor={'#7b9bff'}/>
            </View>
            <View style={styles.controlsContainer}>
              <NeuMorph size={80}>
                <AntDesign name={'banckward'} size={24} color={gray}/>
              </NeuMorph>
              <NeuMorph size={80} style={{backgroundColor: '#8aaaff', borderColor: '#8aaaff'}}>
                <AntDesign name={'pause'} size={24} color={'#ffffff'}/>
              </NeuMorph>
              <NeuMorph size={80}>
                <AntDesign name={'forward'} size={24} color={gray}/>
              </NeuMorph>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const NeuMorph = ({children, size, style}) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View
          style={[
            styles.inner,
            {width: size || 40, height: size || 40, borderRadius: size / 2 || 40  / 2},
            style
          ]}
        >
          {children}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DEE9FD'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2ecfd',
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF'
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#b7c4dd'
  },
  playing: {
    color: gray,
    fontWeight: '800'
  },
   songContainer: {
    alignItems: 'center'
   },
  title: {
    fontSize: 30,
    color: '#6c7a93'
  },
  artist: {
    fontSize: 16,
    marginTop: 6,
    color: gray,
    fontWeight: '500'
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64
  },
  time: {
    fontSize: 18,
    color: gray,
    fontWeight: '700'
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})


