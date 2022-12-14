import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import * as Screens from '../Screens'
import BottomTabs from './BottomTabs'



const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen  name={navigationStrings.ONBOARDING}  component={Screens.OnBoarding} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Screens.SignUp} />
      <Stack.Screen  name={navigationStrings.REMINDER} component={Screens.Reminder}/>
      <Stack.Screen  name={navigationStrings.GOOGLE_SIGNIN} component={Screens.GoogleSignIn}/>
      <Stack.Screen name ={navigationStrings.FACEBOOK_SIGNIN} component={Screens.FacebookSignIn}/>

      

    </>
  )
}

export default AuthStack