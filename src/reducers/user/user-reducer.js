import { userActionTypes } from "../../actions/user/user-action-types";

const INITIAL_USER_STATE = {
  user: {
    name: null,
    email: null,
    id: null,
  },
  isFetching: false,
  error: undefined,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.SET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    case userActionTypes.SET_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
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
