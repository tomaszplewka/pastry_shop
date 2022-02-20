import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import CardItem from "../../card-item/CardItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { data } from "../../../data";

import "./CategoryPreview.scss";

const CategoryPreview = () => {
  const location = useLocation();

  const renderedCategories = data.map((category, index) => {
    return (
      <div key={index} className="pt-5 category-preview__container">
        <div className="category-preview__content">
          <h2 className="category-preview__title">{category.category}</h2>
          <span>
            <Link to={`${location.pathname}/${category.category}`}>
              see more
            </Link>
          </span>
        </div>
        <div className="category-preview__items__container">
          {category.items
            .filter((item, index) => index < 3)
            .map((item, index) => (
              <CardItem key={index} item={item} cartBtn />
            ))}
        </div>
      </div>
    );
  });

  return (
    <section
      className="py-5 position-relative category-preview__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer>
        <SectionTitle title="explore our current offer" />
        {renderedCategories}
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

export default CategoryPreview;
