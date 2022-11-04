import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import colorsPath from "../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../styles/resposnsiveSize";


export const TextInputComp =({
   
    inputStyle,
    placeholder,
    image,
    onChangeText=()=>{}
})=>{
return(
    <View 
    style={{...styles.container,...inputStyle}}
    >
        <TextInput
        style={{flex:1}}
        placeholder={placeholder}
        fontSize={textScale(16)}
        />
        <Image source={image} style={styles.imageStyle}/>

    </View>
)
}
const styles = StyleSheet.create({
    container:{
        height:moderateScale(42),
        width:"100%",
        backgroundColor:colorsPath.white,
        borderRadius:10,
        paddingHorizontal:moderateScale(14),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    imageStyle:{
        height:moderateScaleVertical(20),
        width:moderateScale(20),
        tintColor:colorsPath.grey 
    }
})
