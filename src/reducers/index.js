import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { userReducer, isRegisterActiveReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  isRegisterActive: isRegisterActiveReducer,
  cart: cartReducer,
  form: formReducer,
});
