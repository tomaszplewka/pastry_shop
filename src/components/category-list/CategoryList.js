import React from "react";
import { connect } from "react-redux";

import CategoryItem from "../category-item/CategoryItem";

import "./CategoryList.scss";

const CategoryList = ({ data }) => {
  const renderedCategories = Object.keys(data).map((category, index) => {
    return (
      <CategoryItem
        key={index}
        title={category}
        imageUrl={data[category].cat_photo}
      />
    );
  });

  return (
    <div className=" py-5 category-list__container">{renderedCategories}</div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.categories,
});

export default connect(mapStateToProps)(CategoryList);
