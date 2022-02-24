import { userActionTypes } from "./user-action-types";

export const setUserStart = () => ({
  type: userActionTypes.SET_USER_START,
});

export const setUserSuccess = (user) => ({
  type: userActionTypes.SET_USER_SUCCESS,
  payload: user,
});

export const setUserFailure = (error) => ({
  type: userActionTypes.SET_USER_FAILURE,
  payload: error,
});

export const setIsRegisterActive = (isActive) => {
  return {
    type: userActionTypes.SET_IS_REGISTER_ACTIVE,
    payload: isActive,
  };
};
