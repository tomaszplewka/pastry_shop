import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Btn from "../../Btn/Btn";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { selectCartItems } from "../../../reducers/cart/cart-selectors";

import "./CartList.scss";

const CartList = ({ items }) => {
  const navigate = useNavigate();

  const renderedCartItems = items.map((item) => {
    return "KOKO";
  });

  return (
    <section
      className="pb-5 position-relative cart-list__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)",
      }}
    >
      <SectionContainer>
        <SectionTitle title="your cart" />
        {renderedCartItems.length ? (
          <div className="my-5 cart-list__items__container">
            <div className="cart-list__items__heading">
              <span>Item</span>
              <span>Qty</span>
              <span>Price</span>
              <span>Total</span>
              <span>Remove</span>
              {/* <span>&#215;</span> */}
            </div>
            <div className="cart-list__items">{renderedCartItems}</div>
            <div className="cart-list__items__total"></div>
            <div className="cart-list__items__btns">
              <Btn onClick={() => navigate("/our-offer")} invert>
                continue shopping
              </Btn>
              <Btn onClick={() => navigate("/checkout")} invert>
                proceed to checkout
              </Btn>
            </div>
          </div>
        ) : (
          <>
            <h4 className="pt-5 cart-list__empty">
              Your cart is currently empty
            </h4>
            <div className="d-flex justify-content-center pb-5 mb-3">
              <Btn onClick={() => navigate("/our-offer")} invert>
                continue shopping
              </Btn>
            </div>
          </>
        )}
      </SectionContainer>
      <ShapeDividerBottom color="#eaf2ef" />
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default connect(mapStateToProps)(CartList);
