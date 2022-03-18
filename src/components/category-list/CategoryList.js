import React, { useMemo } from "react";
import { connect } from "react-redux";

import CategoryItem from "../category-item/CategoryItem";

const CategoryList = ({ data }) => {
  const renderedCategories = useMemo(
    () =>
      Object.keys(data).map((category, index) => (
        <CategoryItem
          key={index}
          title={category}
          imageUrl={data[category].cat_photo}
        />
      )),
    [data]
  );

  return (
    <div className=" py-xl-5 pt-3 pb-5 m-auto d-flex flex-row justify-content-center align-items-center flex-wrap position-relative category-list__container">
      {renderedCategories}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.categories
});

export default connect(mapStateToProps)(CategoryList);
