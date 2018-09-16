import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import ListContainer from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'

export default class App extends React.Component {
  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index
        })
      }
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler}
          placeName={this.state.placeName}
        />
        <ListContainer 
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
