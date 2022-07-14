import { createSlice } from '@reduxjs/toolkit';

export interface CalendarState {
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
}

const initialState: CalendarState = {
  checkInDate: undefined,
  checkOutDate: undefined,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
  },
});

export const calendarAction = calendarSlice.actions;
export default calendarSlice.reducer;
