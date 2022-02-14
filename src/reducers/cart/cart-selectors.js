import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cart
);

export const selectIsCartOpen = createSelector(
  [selectCart],
  (cart) => cart.isCartOpen
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (items) => items.reduce((accQty, item) => accQty + item.quantity, 0)
);

export const selectCartItemsTotal = createSelector([selectCartItems], (items) =>
  items.reduce((accQty, item) => accQty + item.quantity * item.price, 0)
);
