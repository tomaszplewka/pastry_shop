import {
  setUserStart,
  setUserSuccess,
  setUserFailure,
  setIsRegisterActive
} from "./user/user-actions";

import {
  toggleCart,
  addToCart,
  removeFromCartDirectly,
  decreaseItemQty,
  emptyCart
} from "./cart/cart-actions";

import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure
} from "./shop/shop-actions";

const actions = {
  setUserStart,
  setUserSuccess,
  setUserFailure,
  setIsRegisterActive,
  toggleCart,
  addToCart,
  removeFromCartDirectly,
  decreaseItemQty,
  emptyCart,
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure
};

export default actions;
