import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colorsPath from "./src/constants/colorsPath";
import Routes from "./src/Navigation/Routes";
import { Login, OnBoarding } from "./src/Screens";


const App =()=>{
  return(
    <SafeAreaView style={styles.container}>
      {/* <Routes/> */}
      {/* <Login/> */}
      <OnBoarding/>
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