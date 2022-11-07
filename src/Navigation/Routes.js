import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Screens from "../Screens/index"
import navigationStrings from "../constants/navigationStrings";

const Stack = createNativeStackNavigator();
const Routes = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{headerShown:false}}
        initialRouteName={navigationStrings.ONBOARDING}
        >
            <Stack.Screen name ={navigationStrings.SIGNUP} component={Screens.SignUp}/>
            <Stack.Screen name ={navigationStrings.LOGIN} component={Screens.Login}/>
            <Stack.Screen name ={navigationStrings.ONBOARDING} component={Screens.OnBoarding}/>
            <Stack.Screen name ={navigationStrings.REMINDER} component= {Screens.Reminder}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
   
}
export default Routes;
