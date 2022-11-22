import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer";

const middlewares = [thunk]


const store = createStore(appReducer, applyMiddleware(...middlewares))

export default store;