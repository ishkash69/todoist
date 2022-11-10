import types from "./types";

let initial_state = {
todoData:[]
}

 
 

export function reducer(state = initial_state, action) {
    console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.TODO:{
            let data =action.payload
            console.log("action payload",data)
            let arr = [...state.todoData,data]

            return{
                ...state,todoData:arr
            }
       
        }
     

        default:
            return {...state}
    }
}