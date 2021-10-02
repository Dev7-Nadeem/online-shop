import { combineReducers } from "redux";
import product from "./product";
import loginReducer from "./login";
import cartReducer from "./cart";

export default combineReducers({
  product,
  login: loginReducer,
  cart: cartReducer,
});
