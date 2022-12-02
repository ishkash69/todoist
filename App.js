import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colorsPath from "./src/constants/colorsPath";
import Routes from "./src/Navigation/Routes";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "./src/redux/actions/actions";

import {requestUserPermission,notificationListner} from "./src/utils/notificationService"

const App =()=>{
 
  useEffect(()=>{
    requestUserPermission()
    notificationListner()
  })

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

