import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Profile = () => {

  function simplefun() {

    console.log(arguments)
  }
  const arrowFun = () => {


    console.log(arguments)

  }

  useEffect(() => {
    simplefun(1, 2, 3, 4)
    arrowFun(1, 2, 3)
  })

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})