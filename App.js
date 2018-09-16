import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

import ListContainer from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import { 
  addPlace, 
  deletePlace, 
  selectPlace, 
  deselectPlace 
} from './src/store/actions'

class App extends React.Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }

  modalCloseHandler = () => {
    this.props.onDeselectPlace()
  }
 
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClose={this.modalCloseHandler}
        />
        <PlaceInput 
          onPlaceAdded={this.placeAddedHandler}
          placeName={this.props.placeName}
        />
        <ListContainer 
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)