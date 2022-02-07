import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./CategoryItem.scss";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="category-item__container">
      <div
        className="category-item"
        onClick={() => navigate(`${location.pathname}${title}`)}
      >
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
