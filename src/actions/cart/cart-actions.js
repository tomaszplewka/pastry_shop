import { cartActionTypes } from "./cart-action-types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART
});

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item
});

export const removeFromCartDirectly = (item) => ({
  type: cartActionTypes.REMOVE_FROM_CART_DIRECTLY,
  payload: item
});

export const decreaseItemQty = (item) => ({
  type: cartActionTypes.DECREASE_ITEM_QTY,
  payload: item
});

export const emptyCart = () => ({
  type: cartActionTypes.EMPTY_CART
});
