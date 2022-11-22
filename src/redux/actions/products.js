import { PRODUCTS, PRODUCTDETAILS } from "../../config/urls";
import { apiGet } from "../../utils/utils";

export const allProducts = (query = "") => {
    return new Promise((resolve, reject) => {
        apiGet(PRODUCTS + query)
            .then((response) => {
                console.log(response, "response in the action")
                return resolve(response)
            }).catch((error) => {
                return reject(error)
            })
    })
}
export const productDetails = (id) => {
    return new Promise((resolve, reject) => {
        apiGet(PRODUCTS + `/${id}`)
            .then((response) => {
                console.log(response, "productDetails response++++++++++")
                return resolve(response)
            }).catch((error) => {
                return reject(error)
            })
    })
}