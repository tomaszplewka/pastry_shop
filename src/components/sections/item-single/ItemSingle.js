import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./ItemSingle.scss";

const ItemSingle = ({ data }) => {
  const params = useParams();

  const renderedItem = data[params.itemsCategory].items.find(
    (item) => item.name.split(" ").join("-") === params.itemName
  );

  return (
    <div className="py-5 item-single__container">
      <div className="item-single__image"></div>
      <div className="item-single__content">
        <h2 className="item-single__title"></h2>
        <h5 className="item-single__subtitle"></h5>
        <span className="item-single__availability"></span>
        QUANTITY + BUTTON
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.categories,
});

export default connect(mapStateToProps)(ItemSingle);
