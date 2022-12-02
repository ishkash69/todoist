//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import colorsPath from '../../constants/colorsPath';

// create a component
const FacebookSignIn = ({navigation,route}) => {
    const[fbUser,setFbUser]=useState()

    let userInfo = route
    console.log(userInfo,"userInfo_____+)_+_")
    return (
        <View style={styles.container}>
             <View style={{
                flexDirection:"row",
                width:"100%",
                backgroundColor:colorsPath.black,
                height:1,
                marginTop:30,marginBottom:20}}/>
                  <Text>
                Facebook integration
            </Text>
            {/* <Image source={{uri:userInfo.picture.data.url}} style={{height:100,width:100,borderRadius:50,marginTop:20}}/> */}
            {/* <Text>{`${userInfo.name}`}</Text> */}

            <TouchableOpacity style={{marginTop:20,borderWidth:1,padding:14}}>
                <Text>LogOut from Facebook</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection:"row",
                width:"100%",
                backgroundColor:colorsPath.black,
                height:1,
                marginTop:30}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default FacebookSignIn;
