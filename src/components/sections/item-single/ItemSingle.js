import React from "react";
import { useParams } from "react-router-dom";

import { data } from "../../../data";

import "./ItemSingle.scss";

const ItemSingle = () => {
  const params = useParams();

  const renderedItem = data
    .find((category) => category.category === params.itemsCategory)
    .items.find((item) => item.name.split(" ").join("-") === params.itemName);

  console.log(renderedItem);

  return (
    <div className="py-5 item-single__container">
      <div className="item-single__image"></div>
      <div className="item-single__content">
        <h2 className="item-single__title"></h2>
        <h5 className="item-single__subtitle"></h5>
        <span className="item-single__availability"></span>
        QUANTITY + BUTTON
      </div>
    </div>
  );
};

export default ItemSingle;
