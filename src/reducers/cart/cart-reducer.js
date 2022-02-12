import { cartActionTypes } from "../../actions/cart/cart-action-types";

export const toggleCart = (state = false, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};
