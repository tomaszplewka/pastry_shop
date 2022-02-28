import { shopActionTypes } from "../../actions/shop/shop-action-types";

const INITIAL_STATE = {
  categories: null,
  isFetching: true,
  error: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.payload,
      };
    case shopActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
