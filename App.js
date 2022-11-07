import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colorsPath from "./src/constants/colorsPath";
import Routes from "./src/Navigation/Routes";
import { Login, OnBoarding, SignUp } from "./src/Screens";


const App =()=>{
  return(
    <SafeAreaView style={styles.container}>
      <Routes/>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colorsPath.backGroundColor
  }
})
export default App