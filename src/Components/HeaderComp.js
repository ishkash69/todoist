import React from "react";
import { View ,Text, StyleSheet, Image} from "react-native";
import colorsPath from "../constants/colorsPath";
import { moderateScale } from "../styles/resposnsiveSize";

export const HeaderComp =({
    text,
    image,
    headerStyle,
    textStyle
})=>{
    return(
        <View style={{...styles.container,...headerStyle}}>

            <Image
            source={image}
            />
            <Text style={{...styles.textStyles,...textStyle}}>{text}</Text>

        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    textStyles:{
        fontSize:34,
        fontWeight:"bold",
        color:colorsPath.purple
    }
})