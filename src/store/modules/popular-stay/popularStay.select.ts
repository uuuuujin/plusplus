import { createSelector } from 'reselect';

import { RootState } from '../../store';
export const selectPopularStayReducer = (state: RootState) => state.popularStay;

export const selectPopularStay = createSelector(
  [selectPopularStayReducer],
  (popularStay) => popularStay.stay
);
