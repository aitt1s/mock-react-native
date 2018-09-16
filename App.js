import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import ListContainer from './src/components/List/ListContainer'
import PlaceInput from './src/components/PlaceInput/PlaceInput'

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          placeNameChangedHandler={this.placeNameChangedHandler} 
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={this.state.placeName}
        />
        <ListContainer places={this.state.places} />
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
