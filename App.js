import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colorsPath from "./src/constants/colorsPath";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";


const App =()=>{
  return(
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
    <Routes/>
    </Provider>
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