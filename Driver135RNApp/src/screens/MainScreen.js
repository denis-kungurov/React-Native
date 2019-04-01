import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Dimensions} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { SECOND_SCREEN } from '../routes'

const window = Dimensions.get('window')

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: 53.904245,
              longitude: 27.557210,
              latitudeDelta: 0.15,
              longitudeDelta: 0.15
            }}
          />
        </View>
        <View style={styles.freeOrdersContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate(SECOND_SCREEN)
          }}
          >
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  mapContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: window.width
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  freeOrdersContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: window.width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default MainScreen
