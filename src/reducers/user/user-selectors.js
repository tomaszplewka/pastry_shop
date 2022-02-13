import { createSelector } from "reselect";

export const selectUser = createSelector(
  (state) => state,
  (state) => state.user
);

export const selectIsRegisterActive = createSelector(
  (state) => state,
  (state) => state.isRegisterActive.isActive
);
