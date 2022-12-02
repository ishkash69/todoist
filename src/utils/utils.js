import axios from "axios";
import store from "../redux/store";
import types from "../redux/types";

export async function apiReq(
    endPoint,
    data,
    method,
) {
    return new Promise((resolve, reject) => {
        if (method === "get" || method === 'delete') {
            data = {
                ...data
            }
        }

        axios[method](endPoint, data)
            .then(result => {
                const { data } = result;

                if (data.status === false) {
                    return reject(data);
                }
                return resolve(data);
            })
            .catch(error => {
                console.log(error)
                console.log(error && error.response, 'the error response')

            })
    })
}

export function apiGet(endPoint, data = {}) {
    return apiReq(endPoint, data, 'get')
}
export function apiDelete(endPoint,data = {}){
    return apiReq(endPoint, data, 'get')
}