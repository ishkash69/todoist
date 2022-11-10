import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import * as Screens from '../Screens'


const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen  name={navigationStrings.ONBOARDING}  component={Screens.OnBoarding} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Screens.SignUp} />
      <Stack.Screen  name={navigationStrings.REMINDER} component={Screens.Reminder}/>
    </>
  )
}

export default AuthStack