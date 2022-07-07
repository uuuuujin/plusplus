import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectSearchReducer = (state: RootState) => state.search;

export const selectSearchRegionName = createSelector(
  [selectSearchReducer],
  (search) => search.searchRegionName
);
