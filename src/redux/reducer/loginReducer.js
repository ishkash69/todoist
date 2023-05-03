import types from "../types";

let init_state ={
    userData : false
}

export default function (state = init_state, action){
    switch(action.type){
        case types.USER_DATA:{
            let data = action.payload
            console.log('login reducer called', data)
            return{...state,userData:data}
        }
        default:{
            return {
                ...state
            }
        }
    }
}