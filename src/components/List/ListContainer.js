import React from 'react'
import { View, StyleSheet } from 'react-native'

import ListItem from './ListItem'

const placesOutput = (places) => {
 return places.map((place, i) => (
    <ListItem key={i} placeName={place} />
  ))
}

const ListContainer = (props) => (
  <View style={styles.listContainer}>
    {placesOutput(props.places)}
  </View>
)

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
})

export default ListContainer