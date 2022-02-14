export const addItemToCart = (cart, newItem) => {
  const itemDuplicate = cart.find((item) => item.id === newItem.id);

  if (itemDuplicate) {
    return cart.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    return [...cart, { ...newItem, quantity: 1 }];
  }
};

export const removeFromCartDirectly = (cart, itemToRemove) =>
  cart.filter((item) => item.id !== itemToRemove.id);

export const decreaseItemQty = (cart, itemToDecrease) => {
  const itemQtyDecrease = cart.find((item) => item.id === itemToDecrease.id);

  if (itemQtyDecrease.quantity === 1) {
    return cart.filter((item) => item.id !== itemQtyDecrease.id);
  } else {
    return cart.map((item) => {
      return item.id === itemQtyDecrease.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
};
