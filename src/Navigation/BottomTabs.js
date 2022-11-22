import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens'
import imagePath from '../constants/imagePath';
import colorsPath from '../constants/colorsPath';
import { moderateScale, moderateScaleVertical } from '../styles/resposnsiveSize'
import Home from '../Screens/Home/Home';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={styles.container}>
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagePath.icHome} />
                    )
                }
            }} name={navigationStrings.HOME} component={Screens.Home} />
            <Tab.Screen options={{
                // tabBarStyle: { display: "none" },
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagePath.icAlarm} />
                    )
                }
            }} name={navigationStrings.POST} component={Screens.Post} />
            <Tab.Screen  options={{
                tabBarStyle: { display: "none" }, tabBarIconStyle: { position: 'absolute', bottom: moderateScaleVertical(10) }, tabBarIcon: ({ navigation,route, focused }) => {
                   
                    return (
                        <Image style={{ marginBottom: moderateScaleVertical(60) }} source={imagePath.icPlus} />
                    )
                }
            }}
                name={navigationStrings.REMINDER} component={Screens.Reminder} />
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
            
                    return (
                        <Image style={{ tintColor: focused ? colorsPath.primaryColor : null }} source={imagePath.icCalender} />
                    )
                }
            }} name={navigationStrings.CALENDER} component={Screens.Calender} />
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorsPath.primaryColor : null }} source={imagePath.icProfile} />
                    )
                }
            }} name={navigationStrings.PROFILE} component={Screens.Profile} />
        </Tab.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    container: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: moderateScaleVertical(10),
            borderRadius: moderateScale(10),
            // height: moderateScaleVertical(60),
            marginHorizontal: moderateScale(24),
        },
    }
})