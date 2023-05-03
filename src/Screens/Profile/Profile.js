import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import store from '../../redux/store'
import actions from '../../redux/actions'
import colorsPath from '../../constants/colorsPath'

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
      <TouchableHighlight
      onPress={()=>{
        store.dispatch(actions.login(false))
      }}
      >
      <Text style={{color: colorsPath.black}}>Log out</Text>
      </TouchableHighlight>
   
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