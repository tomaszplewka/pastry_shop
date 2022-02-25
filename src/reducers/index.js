import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer, isRegisterActiveReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { shopReducer } from "./shop/shop-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    isRegisterActive: isRegisterActiveReducer,
    cart: cartReducer,
    form: formReducer,
    data: shopReducer,
  })
);
