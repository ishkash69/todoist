import { combineReducers } from "redux";

import products from "./products";
import { reducer } from "./reducer"

const appReducer = combineReducers({
    products,
    reducer
})
export default appReducer