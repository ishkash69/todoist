import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import store from '../../redux/store'
import actions from '../../redux/actions'
import colorsPath from '../../constants/colorsPath'
import { moderateScale, width } from '../../styles/resposnsiveSize'

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
      style={styles.touchableHighlight}
      onPress={()=>{
        store.dispatch(actions.login(false))
      }}
      >
      <Text style={{color: colorsPath.white}}>Log out</Text>
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
  },
  touchableHighlight: {
    height: moderateScale(40),
    width: width/1.1,
    backgroundColor: colorsPath.purple,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(8)
  }
})