import React from "react";
import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import CategoryList from "../../category-list/CategoryList";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import "./Categories.scss";

const Categories = () => {
  return (
    <section
      className="position-relative"
      style={{
        background:
          "radial-gradient(circle, rgba(234, 242, 239,1) 75%, rgba(242, 175, 41,1) 100%)",
      }}
    >
      <SectionContainer customClass="py-5">
        <SectionTitle title="Discover Our Offer" />
        <CategoryList />
      </SectionContainer>
      <ShapeDividerBottom color="#fffeff" />
    </section>
  );
};

export default Categories;
