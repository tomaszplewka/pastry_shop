import { combineReducers } from "redux";

import { userReducer, isRegisterActiveReducer } from "./user/user-reducer";
import { toggleCart } from "./cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  isRegisterActive: isRegisterActiveReducer,
  isCartOpen: toggleCart,
});
