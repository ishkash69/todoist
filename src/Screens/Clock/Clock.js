import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Clock = () => {
  return (
    <View style={styles.container}>
      <Text>Clock</Text>
    </View>
  )
}

export default Clock
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})