
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/resposnsiveSize';




const ButtonComp = (

    {
        title,
        buttonStyle,
        buttonText,
        onPress=()=>{}
    }
) => {
    return (

        <TouchableOpacity onPress={onPress}
        style={{...styles.container,...buttonStyle}}>
            <Text style={{...styles.txtStyle,...buttonText}}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colorsPath.purple,
        height: moderateScaleVertical(40),
        borderRadius: moderateScale(12),
        justifyContent: "center",
        alignItems: "center",
    },
    txtStyle:{
        color: colorsPath.white,
        fontWeight: 'bold',
        fontSize: textScale(16)
    }
});


export default ButtonComp;
