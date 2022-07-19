import { createSelector } from 'reselect';

import { RootState } from '../../store';
export const selectUserlistReducer = (state: RootState) => state.userlist;

export const selectUserResult = createSelector(
  [selectUserlistReducer],
  (userlist) => userlist.user
);
