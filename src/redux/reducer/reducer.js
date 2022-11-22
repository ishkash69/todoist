import types from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage';

let initial_state = {
    todoData:[]
}

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem("reminder",jsonValue)
      console.log("data stored in reducer",jsonValue)
    } catch (e) {
     console.log('error in storing data',e)
    }
  }




export function reducer(state = initial_state, action) {
    console.log("data in reducer", action.payload)
    switch (action.type) {
        case types.TODO: {
            let data = action.payload
            console.log("action payload", data)
            let arr = [...state.todoData, data]
            storeData(arr)

            return {
                ...state, todoData: arr
            }

        }
        // case types.STORE_DATA: {
        //     let data = action.payload
        //     console.log("stored data in reducer", data)

        //     return{...state,todoData:data}
        // }


        default:
            return { ...state }
    }
}