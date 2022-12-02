//import liraries
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colorsPath from '../../constants/colorsPath';

// create a component
const GoogleSignIn = ({navigation,route}) => {
    const[googleInfo,setGoogleInfo]=useState()
    console.log(googleInfo,"googleInfo++++>>>")
    let userInfo = route.params.userInfo.user
    console.log(userInfo,"userinFoooo")


  const  signOut = async () => {
        try {
          await GoogleSignin.signOut();
          setGoogleInfo({userInfo:null})
        } catch (error) {
          console.error(error);
        }
      };
    
    return (
        <View style={styles.container}>
            <Text>
                Google integration
            </Text>
            <Image style={{height:100,width:100,borderRadius:50,marginTop:20}} source={{uri: userInfo.photo}}/> 
             <Text>{`${userInfo.givenName} ${userInfo.familyName}`}</Text>

            <TouchableOpacity
            onPress={()=>{
                signOut()
            }}
            style={{marginTop:20,borderWidth:1,padding:14}}>
                <Text>LogOut from Google</Text>
            </TouchableOpacity>

           


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding:20
       
    },
});

//make this component available to the app
export default GoogleSignIn;
