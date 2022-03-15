import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SectionContainer from "../../section-container/SectionContainer";
import SectionTitle from "../../section-title/SectionTitle";
import Btn from "../../Btn/Btn";
import CartItem from "../../cart-item/CartItem";
import ShapeDividerBottom from "../../shape-divider-bottom/ShapeDividerBottom";

import { scrollUtility } from "../../utilities/scroll-utility";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../../reducers/cart/cart-selectors";

import "./CartList.scss";

const CartList = ({ items, getTotal }) => {
  const navigate = useNavigate();

  const renderedCartItems = useMemo(
    () =>
      items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      }),
    [items]
  );

  return (
    <section
      className="pb-5 mt-5 position-relative cart-list__section"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 254, 255,1) 10%, rgba(237, 255, 217, 1) 100%)"
      }}
    >
      <SectionContainer customClass="mt-5">
        <SectionTitle title="your cart" />
        {renderedCartItems.length ? (
          <div className="cart-list__items__container">
            <div className="d-flex cart-list__items__heading">
              <span className="fw-bold text-uppercase">Item</span>
              <span className="fw-bold text-uppercase text-center">Qty</span>
              <span className="fw-bold text-uppercase text-center">Price</span>
              <span className="fw-bold text-uppercase text-center">
                Subtotal
              </span>
              <span className="fw-bold text-uppercase text-center">Remove</span>
            </div>
            <div className="cart-list__items">{renderedCartItems}</div>
            <div className="d-flex justify-content-end cart-list__items__total">
              <span className="fw-bold">Total: ${getTotal}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center cart-list__items__btns">
              <Btn
                onClick={() => {
                  scrollUtility();
                  navigate("/our-offer");
                }}
                invert
              >
                continue shopping
              </Btn>
              <Btn
                onClick={() => {
                  scrollUtility();
                  navigate("/checkout");
                }}
                invert
              >
                proceed to checkout
              </Btn>
            </div>
          </div>
        ) : (
          <>
            <h4 className="pt-5 text-center cart-list__empty">
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
  getTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(CartList);
