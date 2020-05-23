import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require("./assets/home.png")}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>HomeScreen</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Music', {
              userName: 'Cat',
              action: 'i am a man!'
            })
          }}
        >
          <Text style={{color: '#fff'}}>Go to the music Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {borderColor: '#23a6d9', borderWidth: 1, marginTop: 12, backgroundColor: '#fff'}]}
          onPress={() => {
            navigation.navigate('Setting')
          }}
        >
            <Text style={{color: '#23a6d9'}}>go to Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MusicScreen({route, navigation}) {
  const {userName, action} = route.params;
  const [liked, setLiked] = React.useState(false)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <FontAwesome name={liked ? 'heart' : 'heart-o'} size={24} color={'#FFF'} style={{marginRight: 16}}/>
        </TouchableOpacity>
      )
    })
  })
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require("./assets/music.png")}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>Music Screen</Text>
        <Text style={{fontWeight: '600', marginVertical: 32}}>
          {userName} to say {action}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <Text style={{color: '#fff'}}>Go to the Home Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {borderColor: '#23a6d9', borderWidth: 1, marginTop: 12, backgroundColor: '#fff'}]}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Text style={{color: '#23a6d9'}}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CustomHeader() {
  return <FontAwesome name={'music'} size={24} color={'#fff'}/>
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('./assets/setting.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>Setting Screen</Text>
      </View>
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('./assets/detail.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>Detail Screen</Text>
      </View>
    </View>
  )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingsTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'SettingsScreen') {
            return <FontAwesome name={'cog'} color={color} size={size} />
          }
          return <FontAwesome name={'paperclip'} color={color} size={size} />

        },
      })}
      tabBarOptions={{
        activeColor: '#23a6d9',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  )
}

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <StatusBar barStyle={'light-content'} />
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#23a6d9'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: "200",
              fontSize: 30
            }
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Music"
              component={MusicScreen}
              options={{
                headerTitle: (props) => <CustomHeader {...props} />
              }}
            />
            <Stack.Screen name={'Setting'} component={SettingsTab} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 32,
    backgroundColor: '#23a6d9',
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: 'center'
  }
})

