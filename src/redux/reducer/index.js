import { combineReducers } from "redux";

import products from "./products";
import { reducer } from "./reducer"
import loginReducer from "./loginReducer";
const appReducer = combineReducers({
    products,
    reducer,
    loginReducer,
})
export default appReducer