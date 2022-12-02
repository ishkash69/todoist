import types from '../types'

export function todo(data) {
    return {
        type: types.TODO,
        payload: data
    }
}
export function storeData(data){
    return{
        type: types.STORE_DATA,
        payload: data
    }
}