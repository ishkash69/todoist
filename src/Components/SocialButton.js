import React from "react";
import { StyleSheet, TouchableOpacity, View,Image } from "react-native";
import colorsPath from "../constants/colorsPath";


const SocialComp =({
    socialIcon,
    imageStyle,
})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={{...imageStyle}} source={socialIcon}/>   
            </TouchableOpacity>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flexDirection:"row",
       justifyContent:"space-evenly",
        alignItems:"center"
    }
})
export default SocialComp