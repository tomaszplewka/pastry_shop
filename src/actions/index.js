import { setUser, setIsRegisterActive } from "./user/user-actions";
import {
  toggleCart,
  addToCart,
  removeFromCartDirectly,
  decreaseItemQty,
} from "./cart/cart-actions";

const actions = {
  setUser,
  setIsRegisterActive,
  toggleCart,
  addToCart,
  removeFromCartDirectly,
  decreaseItemQty,
};

export default actions;
