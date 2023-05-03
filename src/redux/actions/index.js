import * as products from "./products"
import { todo,storeData } from "./actions"
import * as login from './loginAction'

export default {
    ...products,
    ...todo,
    ...storeData,
    ...login,

}