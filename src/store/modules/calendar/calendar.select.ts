import { createSelector } from 'reselect';
import { RootState } from '../../store';

export const selectCalendarReducer = (state: RootState) => state.calendar;

export const selectCalendarReducerSetCheckIn = createSelector(
  [selectCalendarReducer],
  (calendar) => calendar.checkInDate
);

export const selectCalendarReducerCheckOut = createSelector(
  [selectCalendarReducer],
  (calendar) => calendar.checkOutDate
);

export const selectCalendarReducerDisable = createSelector(
  [selectCalendarReducer],
  (calendar) => calendar.disableDate
);
