import { createSelector } from "reselect";

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
