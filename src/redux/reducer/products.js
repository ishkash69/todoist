import types from "../types";

let init_state ={
    productsData : []
}

export default function (state = init_state, action){
    switch(action.type){
        case types.PRODUCT:{
            let data = action.payload
            console.log('products reducer called', data)
            return{...state,productsData:data}
        }
        default:{
            return {
                ...state
            }
        }
    }
}