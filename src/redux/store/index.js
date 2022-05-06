import { combineReducers, createStore } from "redux";
import { CartReducer } from "../reducers";

const rootReducer = combineReducers({
    cart: CartReducer,
})
const store = createStore(rootReducer);
export default store;