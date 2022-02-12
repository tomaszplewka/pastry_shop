import { userActionTypes } from "../../actions/user/user-action-types";

const INITIAL_USER_STATE = {
  name: null,
  email: null,
  id: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const isRegisterActiveReducer = (state = false, action) => {
  switch (action.type) {
    case userActionTypes.SET_IS_REGISTER_ACTIVE:
      return {
        ...state,
        isActive: action.payload,
      };
    default:
      return state;
  }
};
