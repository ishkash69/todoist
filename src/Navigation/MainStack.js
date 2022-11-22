import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { ItemDetails } from '../Screens'
import BottomTabs from './BottomTabs'
import * as Screens from '../Screens'


const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.BTM} component={BottomTabs} />
      <Stack.Screen name ={navigationStrings.ITEM_DETAILS} component = {Screens.ItemDetails}/>
    </>
  )
}

export default MainStack