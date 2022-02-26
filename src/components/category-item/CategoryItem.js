import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./CategoryItem.scss";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryItemClick = () =>
    navigate(`${location.pathname === "/" ? "/our-offer/" : "/"}${title}`);

  return (
    <div className="m-2 position-relative  category-item__container">
      <div
        className="position-relative d-flex justify-content-center align-items-center flex-row category-item"
        onClick={handleCategoryItemClick}
      >
        <div
          className="w-100 h-100 category-item__bg-img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="d-flex justify-content-center flex-column align-items-center position-absolute category-item__content">
          <h3 className="m-0 position-relative fw-bolder text-lowercase category-item__title">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
