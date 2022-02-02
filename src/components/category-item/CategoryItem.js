import React from "react";

import "./CategoryItem.scss";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className="category__item--container">
      <div className="category__item">
        <div
          className="category__item--bg-img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="category__item--content">
          <h3 className="category__item--title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
