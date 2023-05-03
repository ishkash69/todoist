import React, { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import colorsPath from "../constants/colorsPath";
import imagePath from "../constants/imagePath";
import { moderateScale, moderateScaleVertical, textScale } from "../styles/resposnsiveSize";


export const TextInputComp =({
   
    inputStyle,
    placeholder,
    image,
    secure,
    secondImage,
    value,
    onChangeText=()=>{},
    keyboardType
})=>{

    const [visible,setVisible]=useState(false)
    const click =(()=>{
        setVisible(!visible)
    })
return(
    <View 
    style={{...styles.container,...inputStyle}}
    >
        <TextInput
        style={{flex:1,color: colorsPath.black}}
        placeholder={placeholder}
        fontSize={textScale(16)}
        secureTextEntry={visible}
        onChangeText={onChangeText}
        placeholderTextColor={colorsPath.black}
        value={value}
        keyboardType={keyboardType}
        // keyboardType="number-pad"
        />
        <TouchableOpacity onPress={click}>
        {!visible?<Image style={styles.imageStyle}
        source={image} 
        />: <Image style={{height:20,width:20,tintColor:'grey'}}
        source={secondImage}
        />}
        </TouchableOpacity>

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
