import { createSelector } from 'reselect';

import { RootState } from '../../store';
export const selectEventReducer = (state: RootState) => state.event;

export const selectEvent = createSelector(
  [selectEventReducer],
  (event) => event.eventData
);
