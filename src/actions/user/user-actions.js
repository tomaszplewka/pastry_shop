import { userActionTypes } from "./user-action-types";

export const setUser = (user) => {
  return {
    type: userActionTypes.SET_USER,
    payload: user,
  };
};

export const setIsRegisterActive = (isActive) => {
  return {
    type: userActionTypes.SET_IS_REGISTER_ACTIVE,
    payload: isActive,
  };
};
