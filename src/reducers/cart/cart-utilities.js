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
