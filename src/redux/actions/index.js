import * as products from "./products"
import { todo,storeData } from "./actions"

export default {
    ...products,
    ...todo,
    ...storeData
}