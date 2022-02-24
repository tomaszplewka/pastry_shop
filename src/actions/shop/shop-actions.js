import { shopActionTypes } from "./shop-action-types";

export const fetchDataStart = () => ({
  type: shopActionTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = (categories) => ({
  type: shopActionTypes.FETCH_DATA_SUCCESS,
  payload: categories,
});

export const fetchDataFailure = (error) => ({
  type: shopActionTypes.FETCH_DATA_FAILURE,
  payload: error,
});
