import React from "react";
import { View ,Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import colorsPath from "../constants/colorsPath";
import { moderateScale } from "../styles/resposnsiveSize";

export const HeaderComp =({
    text,
    image,
    headerStyle,
    textStyle,
    onPress=()=>{}
})=>{
    return(
        <View style={{...styles.container,...headerStyle}}>

          <TouchableOpacity
          
          onPress={onPress}>
          <Image
            source={image}
            />
          </TouchableOpacity>
            <Text style={{...styles.textStyles,...textStyle}}>{text}</Text>

        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        paddingHorizontal: moderateScale(15)
    },
    textStyles:{
        fontSize:34,
        fontWeight:"bold",
        color:colorsPath.purple
    }
})