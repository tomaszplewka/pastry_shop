import React from "react";

import "./CardItem.scss";

const CardItem = ({ item, addToCard }) => {
  const { name, price, photo, quantity } = item;
  return (
    <div className="card-item">
      <div className="card-item__img-wrapper">
        <div
          className="card-item__img"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></div>
      </div>
      <div className="card-item__body">
        <span className="name">{name}</span>
        <span className="price">{`$${price} / ${quantity}`}</span>
      </div>
      {/* {addToCard ? <Btn inverted onClick={() => addItemToCart(item)}>
        add to cart
      </Btn> : null} */}
    </div>
  );
};

export default CardItem;
