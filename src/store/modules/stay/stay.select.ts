import { createSelector } from 'reselect';
import { RootState } from '../../store';

export const selectStayReducer = (state: RootState) => state.stay;

export const selectStayData = createSelector(
  [selectStayReducer],
  (stay) => stay.stayData
);
