import { cartActionTypes } from "../../actions/cart/cart-action-types";
import { addItemToCart } from "./cart-utilities";

const INITIAL_STATE = {
  isCartOpen: false,
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    default:
      return state;
  }
};
