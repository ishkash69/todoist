import types from '../types'

export function login(data) {
    console.log(data,'logindata>>>')
    return {
        type: types.USER_DATA,
        payload: data
    }
}