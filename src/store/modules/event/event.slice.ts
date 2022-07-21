import { createSlice } from '@reduxjs/toolkit';
import { fetchEvent } from '../../../api/event';

interface EventType {
  eventData: [
    {
      id: number;
      name: string;
      start_date: string;
      end_date: string;
      rate: number;
      image: string;
    }
  ];
}

const initialState: EventType = {
  eventData: [
    {
      id: 0,
      name: '',
      start_date: '',
      end_date: '',
      rate: 0,
      image: '',
    },
  ],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.eventData = action.payload.data;
    });
  },
});

export const eventAction = eventSlice.actions;
export default eventSlice.reducer;
