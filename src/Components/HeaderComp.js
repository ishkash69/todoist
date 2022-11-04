import React from "react";
import { View ,Text, StyleSheet} from "react-native";
import colorsPath from "../constants/colorsPath";
import { moderateScale } from "../styles/resposnsiveSize";

export const HeaderComp =({
    text
})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.textStyles}>{text}</Text>

        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center"
    },
    textStyles:{
        fontSize:34,
        fontWeight:"bold",
        color:colorsPath.purple
    }
})