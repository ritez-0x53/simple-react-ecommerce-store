import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import fetchReducer from "./fetchProducts";

const rootReducer = combineReducers({
     cartReducer,
     fetchReducer
})

export default rootReducer;