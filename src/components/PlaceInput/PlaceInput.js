import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'

const PlaceInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput 
      value={props.placeName}
      placeholder="Placeholder"
      onChangeText={props.placeNameChangedHandler}
      style={styles.placeInput}
      />
    <Button style={styles.placeButton} onPress={props.placeSubmitHandler} title="Add"/>
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
})

export default PlaceInput