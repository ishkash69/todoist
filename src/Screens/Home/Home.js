import React, { cloneElement, useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import { HeaderComp } from "../../Components/HeaderComp";
import colorsPath from "../../constants/colorsPath";
import imagePath from "../../constants/imagePath";
import { moderateScale, moderateScaleVertical } from "../../styles/resposnsiveSize";
import styles from "./Home.style"
import * as Progress from 'react-native-progress';
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../../redux/store";
import { storeData, todo } from "../../redux/actions/actions";


const Home = ({ navigation, route }) => {

    const data = useSelector(myData=> myData.reducer.todoData)
    // console.log("this is data in Home Screen",data)
    

    useEffect(()=>{
      getData()
    },[])
  
    const getData = async ()=>{
      try {
        
        const jsonValue = await AsyncStorage.getItem("reminder")
        
        let value = JSON.parse(jsonValue)
        // console.log(value,"jsonvalue------>")
       
     
  
        if(!!value){
         store.dispatch(storeData(value))
          
        }
      } catch (error) {
        // console.log(error,"error raised in the app.js")
      }
    }
    
    const renderItem = ({ item, index }) => {
        // console.log("item in home screen",item)
        return (
            <View style={styles.flatView}>
                <View style={
                    styles.flatContentView}>
                    <View>
                        <Text style={{color: colorsPath.black}}>{item.title.title}</Text>
                        <Text style={{color: colorsPath.black}}>{item.notes.notes}</Text>

                    </View>
                    <View style={styles.flatContentTimeContainer}>
                        <View style={styles.dateAndTimeStyle}>
                            <Text style={{color: colorsPath.black}}>
                                {item.time}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        style={{ transform: [{ rotate: '180deg' }] }}
                        source={imagePath.icBackward} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderComp
                text={"Hello Lorem!"}
                textStyle={styles.headerText}
                headerStyle={styles.headerStyle}
            />
            <Text style={{ marginTop: moderateScaleVertical(14),color: colorsPath.black }}>
                Let's start with today's task</Text>
            <View style={styles.completedTaskView}>
                <View style={{ paddingLeft: moderateScale(4) }}>
                    <Text style={{ color: colorsPath.purple, }}>Daily tasks</Text>
                    <View
                        style={styles.tickContainer}>
                        <Image
                            style={styles.tickStyle}
                            source={imagePath.icGreenTick} />
                        <Text style={styles.greenText}>5/10
                        </Text>
                        <Text style={{ marginLeft: 3,color: colorsPath.black }}>
                            Task Completed
                        </Text>
                    </View>
                    <ButtonComp
                        buttonStyle={{ marginTop: moderateScale(20) }}
                        title={"View Tasks"}
                        buttonText={{ fontSize: moderateScale(12) }}
                    />
                </View>
                <View style={{alignItems:"center",justifyContent:"center"}}>
                    {/* <Image
                        style={styles.spinnerImage}
                        source={imagePath.icSpinner} /> */}
                        <Progress.Circle 
                        size={100}
                        thickness={moderateScale(15)}
                        color={colorsPath.purple}
                        indeterminate={false}
                        progress={0.5}
                        showsText={true}
                        strokeCap={"round"}
                        unfilledColor={colorsPath.grey}
                        borderWidth={0}
                        textStyle={{color:colorsPath.darkGrey,fontWeight:"bold"}}
                        />
                        
                </View>
            </View>
            <View
                style={styles.toggleBarContainer}
            >
                <Text
                    style={styles.toggleText}

                >Daily</Text>
                <Text
                    style={styles.toggleText}
                >Weekly</Text>
                <Text
                    style={styles.toggleText}
                >Monthly</Text>
                <Text></Text>
            </View>
            <View style={styles.remindersView}>
                <Text style={{ fontWeight: "bold", color: colorsPath.black }} >
                    Reminders
                </Text>
                <Text style={{ fontWeight: "bold", color: colorsPath.purple }} >
                    See all
                </Text>
            </View>
            <View style={{ flex:1, marginTop: moderateScaleVertical(20) }}>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                />

            </View>
        </View>
    )
}
export default Home