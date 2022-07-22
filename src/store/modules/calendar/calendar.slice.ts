import { createSlice } from '@reduxjs/toolkit';

export interface CalendarState {
  checkInDate: number[] | undefined;
  checkOutDate: number[] | undefined;
  disableDate: number[] | undefined;
}

const initialState: CalendarState = {
  checkInDate: undefined,
  checkOutDate: undefined,
  disableDate: undefined,
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
    setDisableDate: (state, action) => {
      state.disableDate = action.payload;
    },
  },
});

export const calendarAction = calendarSlice.actions;
export default calendarSlice.reducer;
