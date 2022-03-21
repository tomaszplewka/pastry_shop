import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import CardItem from "../../card-item/CardItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import "./CategoryPreview.scss";

const itemsToShow =
  window.screen.width < 768 ? (window.screen.width < 500 ? 1 : 2) : 3;

const CategoryPreview = ({ data }) => {
  const location = useLocation();

  const renderedCategories = useMemo(
    () =>
      Object.keys(data).map((category, index) => (
        <div key={index} className="pt-sm-5 pt-3 category-preview__container">
          <div className="d-flex justify-content-between align-items-center category-preview__content">
            <h2 className="text-uppercase fw-bold category-preview__title">
              {category}
            </h2>
            <span className="text-decoration-underline text-uppercase">
              <Link to={`${location.pathname}/${category}`}>see more</Link>
            </span>
          </div>
          <div className="d-flex justify-content-evenly align-items-center category-preview__items__container">
            {data[category].items
              .filter((item, index) => index < itemsToShow)
              .map((item, index) => (
                <CardItem key={index} item={item} category={category} cartBtn />
              ))}
          </div>
        </div>
      )),
    [data, location.pathname]
  );

  return (
    <section
      className="py-5 position-relative category-preview__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)"
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

const mapStateToProps = (state) => ({
  data: state.data.categories
});

export default connect(mapStateToProps)(CategoryPreview);
