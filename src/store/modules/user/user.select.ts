import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectUserReducer = (state: RootState) => state.user;

export const selectAccessToken = createSelector(
  [selectUserReducer],
  (user) => user.accessToken
);

export const selectIsLoggedIn = createSelector(
  [selectUserReducer],
  (user) => user.isLoggedIn
);
