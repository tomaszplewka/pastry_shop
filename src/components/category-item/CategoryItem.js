import React from "react";

import "./CategoryItem.scss";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className="category-item__container">
      <div className="category-item">
        <div
          className="category-item__bg-img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="category-item__content">
          <h3 className="category-item__title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
