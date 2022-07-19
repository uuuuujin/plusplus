import { create } from 'domain';
import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectSearchReducer = (state: RootState) => state.search;

export const selectLocal = createSelector(
  [selectSearchReducer],
  (search) => search.local
);

export const selectStayType = createSelector(
  [selectSearchReducer],
  (search) => search.stayType
);

export const selectTheme = createSelector(
  [selectSearchReducer],
  (search) => search.theme
);

// 검색 결과
export const selectSearchResult = createSelector(
  [selectSearchReducer],
  (search) => search.searchResult
);

// 유저가 선택한 것들
export const selectSearchRegion = createSelector(
  [selectSearchReducer],
  (search) => search.searchRegion
);

export const selectSearchCostRange = createSelector(
  [selectSearchReducer],
  (search) => search.searchCostRange
);

export const selectSearchStayType = createSelector(
  [selectSearchReducer],
  (search) => search.searchStayType
);

export const selectSearchTheme = createSelector(
  [selectSearchReducer],
  (search) => search.searchTheme
);
