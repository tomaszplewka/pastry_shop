import React, { useEffect, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { connect } from "react-redux";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import CardItem from "../../card-item/CardItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { scrollUtility } from "../../utilities/scroll-utility";

import "./CategorySingle.scss";

const CategorySingle = ({ data }) => {
  const params = useParams();

  useEffect(() => scrollUtility(), []);

  const renderedItems = useMemo(
    () =>
      data[params.itemsCategory].items.map((item, index) => {
        return <CardItem key={index} item={item} cartBtn />;
      }),
    [data, params.itemsCategory]
  );

  return (
    <section
      className="py-5 position-relative category-single__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)"
      }}
    >
      <SectionContainer>
        <SectionTitle title={`Selection of ${params.itemsCategory}`} />
        {params.itemName ? (
          <Outlet />
        ) : (
          <div className="py-5 d-flex flex-wrap category-single__container">
            {renderedItems}
          </div>
        )}
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.categories
});

export default connect(mapStateToProps)(CategorySingle);
