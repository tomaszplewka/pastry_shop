import { createSelector } from "reselect";

export const selectUser = createSelector(
  (state) => state,
  (state) => state.user.user
);

export const selectIsRegisterActive = createSelector(
  (state) => state,
  (state) => state.isRegisterActive.isActive
);

export const selectIsUserFetching = createSelector(
  (state) => state,
  (state) => state.user.isFetching
);

export const selectUserFetchingError = createSelector(
  (state) => state,
  (state) => state.user.error
);
