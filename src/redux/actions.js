import  types  from './types'

export function todo(data){
    return{
        type:types.TODO,
        payload:data
    }
}