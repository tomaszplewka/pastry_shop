import croissant1 from "./assets/images/croissants/chocolate-croissants.jpg";
import croissant2 from "./assets/images/croissants/peanut-butter-croissants.jpg";
import croissant3 from "./assets/images/croissants/plain-croissants.jpg";
import croissant4 from "./assets/images/croissants/sugar-croissants.jpg";
import croissant5 from "./assets/images/croissants/xl-croissants.jpg";

import cookie1 from "./assets/images/cookies/oat-cookies.jpg";
import cookie2 from "./assets/images/cookies/gingerbread-cookies.jpg";
import cookie3 from "./assets/images/cookies/cocoa-cookies-peanuts.jpg";
import cookie4 from "./assets/images/cookies/chocolate-chip-cookies.jpg";
import cookie5 from "./assets/images/cookies/butter-cookies.jpg";

import giftBox1 from "./assets/images/gift-boxes/donuts-gift-box.jpg";
import giftBox2 from "./assets/images/gift-boxes/custom-gift-box.jpg";
import giftBox3 from "./assets/images/gift-boxes/cookies-gift-box-set-2.jpg";
import giftBox4 from "./assets/images/gift-boxes/cookies-gift-box-set-1.jpg";
import giftBox5 from "./assets/images/gift-boxes/candies-gift-box.jpg";

import donut1 from "./assets/images/donuts/pink-donut.jpg";
import donut2 from "./assets/images/donuts/honey-donut.jpg";
import donut3 from "./assets/images/donuts/crispy-donut.jpg";
import donut4 from "./assets/images/donuts/chocolate-donut.jpg";
import donut5 from "./assets/images/donuts/blue-donut.jpg";

import cake1 from "./assets/images/cakes/white-cake-strawberry.jpg";
import cake2 from "./assets/images/cakes/white-cake-chocolate-topping.jpg";
import cake3 from "./assets/images/cakes/white-cake-blackberry.jpg";
import cake4 from "./assets/images/cakes/coffee-cake.jpg";
import cake5 from "./assets/images/cakes/chocolate-cake.jpg";

import catering1 from "./assets/images/catering/showcase-1.jpg";
import catering2 from "./assets/images/catering/showcase-2.jpg";
import catering3 from "./assets/images/catering/showcase-3.jpg";
import catering4 from "./assets/images/catering/showcase-4.jpg";

import pie1 from "./assets/images/pies/raspberry-pie.jpg";
import pie2 from "./assets/images/pies/pumpkin-pie-with-topping.jpg";
import pie3 from "./assets/images/pies/plum-pie.jpg";
import pie4 from "./assets/images/pies/orange-pie.jpg";
import pie5 from "./assets/images/pies/carrot-pie.jpg";

import treat1 from "./assets/images/treats/sour-worms.jpg";
import treat2 from "./assets/images/treats/pink-lollipops.jpg";
import treat3 from "./assets/images/treats/classic-candies.jpg";
import treat4 from "./assets/images/treats/chocolate-glazed-lollipops.jpg";
import treat5 from "./assets/images/treats/chocolate-candies.jpg";

export const data = [
  {
    category: "treats",
    items: [
      {
        id: 36,
        image: treat1,
        name: "sour worms",
        price: 10,
        quantity: "bulk",
        availability: "available",
      },
      {
        id: 37,
        image: treat2,
        name: "pink lollipops",
        price: 16,
        quantity: "bulk",
        availability: "sold out",
      },
      {
        id: 38,
        image: treat3,
        name: "classic candies",
        price: 10,
        quantity: "bulk",
        availability: "available",
      },
      {
        id: 39,
        image: treat4,
        name: "chocolate glazed lollipops",
        price: 13,
        quantity: "bulk",
        availability: "available",
      },
      {
        id: 40,
        image: treat5,
        name: "chocolate candies",
        price: 15,
        quantity: "bulk",
        availability: "sold out",
      },
    ],
  },
  {
    category: "pies",
    items: [
      {
        id: 31,
        image: pie1,
        name: "raspberry pie",
        price: 16,
        quantity: "each",
        availability: "available",
      },
      {
        id: 32,
        image: pie2,
        name: "pumpkin pie",
        price: 12,
        quantity: "each",
        availability: "sold out",
      },
      {
        id: 33,
        image: pie3,
        name: "plum pie",
        price: 12,
        quantity: "each",
        availability: "available",
      },
      {
        id: 34,
        image: pie4,
        name: "orange pie",
        price: 14,
        quantity: "each",
        availability: "available",
      },
      {
        id: 35,
        image: pie5,
        name: "carrot pie",
        price: 15,
        quantity: "each",
        availability: "sold out",
      },
    ],
  },
  // {
  //   category: "catering",
  //   items: [
  //     {
  //       id: 26,
  //       image: catering1,
  //       name: "catering 1",
  //       price: 45,
  //       quantity: "person",
  //       availability: "available",
  //     },
  //     {
  //       id: 27,
  //       image: catering2,
  //       name: "catering 2",
  //       price: 40,
  //       quantity: "person",
  //       availability: "available",
  //     },
  //     {
  //       id: 28,
  //       image: catering3,
  //       name: "catering 3",
  //       price: 50,
  //       quantity: "person",
  //       availability: "sold out",
  //     },
  //     {
  //       id: 30,
  //       image: catering4,
  //       name: "catering 4",
  //       price: 35,
  //       quantity: "person",
  //       availability: "available",
  //     },
  //   ],
  // },
  {
    category: "cakes",
    items: [
      {
        id: 21,
        image: cake1,
        name: "strawberry cake",
        price: 12,
        quantity: "each",
        availability: "available",
      },
      {
        id: 22,
        image: cake2,
        name: "cake with chocolate topping",
        price: 15,
        quantity: "each",
        availability: "sold out",
      },
      {
        id: 23,
        image: cake3,
        name: "blackberry cake",
        price: 12,
        quantity: "each",
        availability: "available",
      },
      {
        id: 24,
        image: cake4,
        name: "coffee cake",
        price: 13,
        quantity: "each",
        availability: "available",
      },
      {
        id: 25,
        image: cake5,
        name: "chocolate cake",
        price: 15,
        quantity: "each",
        availability: "sold out",
      },
    ],
  },
  {
    category: "donuts",
    items: [
      {
        id: 16,
        image: donut1,
        name: "pink donut",
        price: 5,
        quantity: "each",
        availability: "available",
      },
      {
        id: 17,
        image: donut2,
        name: "honey donut",
        price: 6,
        quantity: "each",
        availability: "available",
      },
      {
        id: 18,
        image: donut3,
        name: "crispy donut",
        price: 5,
        quantity: "each",
        availability: "available",
      },
      {
        id: 19,
        image: donut4,
        name: "chocolate donut",
        price: 7,
        quantity: "each",
        availability: "sold out",
      },
      {
        id: 20,
        image: donut5,
        name: "blue donut",
        price: 6,
        quantity: "each",
        availability: "sold out",
      },
    ],
  },
  // {
  //   category: "gift boxes",
  //   items: [
  //     {
  //       id: 11,
  //       image: giftBox1,
  //       name: "donuts gift box",
  //       price: 15,
  //       quantity: "each",
  //       availability: "available",
  //     },
  //     {
  //       id: 12,
  //       image: giftBox2,
  //       name: "custom gift box",
  //       price: 20,
  //       quantity: "each",
  //       availability: "available",
  //     },
  //     {
  //       id: 13,
  //       image: giftBox3,
  //       name: "cookies set 1 gift box",
  //       price: 13,
  //       quantity: "each",
  //       availability: "available",
  //     },
  //     {
  //       id: 14,
  //       image: giftBox4,
  //       name: "cookies set 2 gift box",
  //       price: 15,
  //       quantity: "each",
  //       availability: "sold out",
  //     },
  //     {
  //       id: 15,
  //       image: giftBox5,
  //       name: "candies gift box",
  //       price: 17,
  //       quantity: "each",
  //       availability: "available",
  //     },
  //   ],
  // },
  {
    category: "cookies",
    items: [
      {
        id: 6,
        image: cookie1,
        name: "oat cookie",
        price: 2,
        quantity: "each",
        availability: "available",
      },
      {
        id: 7,
        image: cookie2,
        name: "gingerbread cookie",
        price: 3,
        quantity: "each",
        availability: "sold out",
      },
      {
        id: 8,
        image: cookie3,
        name: "cocoa cookie with peanuts",
        price: 3,
        quantity: "each",
        availability: "available",
      },
      {
        id: 9,
        image: cookie4,
        name: "chocolate chip cookie",
        price: 3,
        quantity: "each",
        availability: "available",
      },
      {
        id: 10,
        image: cookie5,
        name: "butter cookie",
        price: 2,
        quantity: "each",
        availability: "available",
      },
    ],
  },
  {
    category: "croissants",
    items: [
      {
        id: 1,
        image: croissant1,
        name: "chocolate croissant",
        price: 4,
        quantity: "each",
        availability: "available",
      },
      {
        id: 2,
        image: croissant2,
        name: "peanut butter croissant",
        price: 5,
        quantity: "each",
        availability: "sold out",
      },
      {
        id: 3,
        image: croissant3,
        name: "plain croissant",
        price: 3,
        quantity: "each",
        availability: "available",
      },
      {
        id: 4,
        image: croissant4,
        name: "sugar croissant",
        price: 4,
        quantity: "each",
        availability: "available",
      },
      {
        id: 5,
        image: croissant5,
        name: "xl croissant",
        price: 4,
        quantity: "each",
        availability: "sold out",
      },
    ],
  },
];
