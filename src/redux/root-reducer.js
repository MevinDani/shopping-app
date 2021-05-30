import { combineReducers } from "redux";
import  cartReducer  from "../redux/cart/cart.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
