
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/resposnsiveSize';




const ButtonComp = (

    {
        title
    }
) => {
    return (

        <TouchableOpacity style={styles.container}>
            <Text style={styles.txtStyle}>{title}</Text>
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
