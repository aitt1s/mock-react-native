import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.placeName}
          placeholder="Placeholder"
          onChangeText={this.placeNameChangedHandler}
          style={{width: 300}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
