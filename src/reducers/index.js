import { combineReducers } from "redux";

import { userReducer, isRegisterActiveReducer } from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
  isRegisterActive: isRegisterActiveReducer,
});
