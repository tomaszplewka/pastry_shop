import React from "react";
import CategoryItem from "../category-item/CategoryItem";

import "./CategoryList.scss";

import croissants from "../../assets/images/croissants.jpg";
import catering from "../../assets/images/catering.jpg";
import cookies from "../../assets/images/cookies.jpg";
import donuts from "../../assets/images/donuts.jpg";
import giftBoxes from "../../assets/images/gift-boxes.jpg";
import pies from "../../assets/images/pies.jpg";
import scones from "../../assets/images/scones.jpg";
import treats from "../../assets/images/treats.jpg";

const data = [
  {
    category: "croissants",
    photoUrl: croissants,
  },
  // {
  //   category: "catering",
  //   photoUrl: catering,
  // },
  {
    category: "cookies",
    photoUrl: cookies,
  },
  {
    category: "treats",
    photoUrl: treats,
  },
  {
    category: "scones",
    photoUrl: scones,
  },
  {
    category: "pies",
    photoUrl: pies,
  },
  // {
  //   category: "giftBoxes",
  //   photoUrl: giftBoxes,
  // },
  {
    category: "donuts",
    photoUrl: donuts,
  },
];

const CategoryList = ({ categories }) => {
  const renderedCategories = data.map((category, index) => {
    return (
      <CategoryItem
        key={index}
        title={category.category}
        imageUrl={category.photoUrl}
      />
    );
  });

  return (
    <div className=" py-5 category-list__container">{renderedCategories}</div>
  );
};

export default CategoryList;
