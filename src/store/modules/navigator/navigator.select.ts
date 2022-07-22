import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectNavigatorReducer = (state: RootState) => state.navigator;

export const selectCurrentPage = createSelector(
  [selectNavigatorReducer],
  (navigator) => navigator.currentPage
);
