import { createSelector } from "reselect";

import { getFeaturedItems } from "./shop-utilities";

const selectShop = (state) => state.data;

export const selectShopCategories = createSelector(
  [selectShop],
  (data) => data.categories
);

export const selectShopCategoriesForPreview = createSelector(
  [selectShopCategories],
  (categories) => Object.keys(categories)
);

export const selectIsShopDataFetching = createSelector(
  [selectShop],
  (data) => data.isFetching
);

export const selectShopDataError = createSelector(
  [selectShop],
  (data) => data.error
);

export const selectFeaturedItems = createSelector(
  selectShopCategories,
  selectShopCategoriesForPreview,
  (data, categories) => getFeaturedItems(data, categories)
);
