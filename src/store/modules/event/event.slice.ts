import { createSlice } from '@reduxjs/toolkit';
import { fetchAllEvents, fetchEvent } from '../../../api/event';

interface EventType {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  rate: number;
  image: string;
  detailImage: string;
}

interface EventStateType {
  allEvents: EventType[];
  oneEvent: EventType;
}

const initialState: EventStateType = {
  allEvents: [
    {
      id: 0,
      name: '',
      start_date: '',
      end_date: '',
      rate: 0,
      image: '',
      detailImage: '',
    },
  ],
  oneEvent: {
    id: 0,
    name: '',
    start_date: '',
    end_date: '',
    rate: 0,
    image: '',
    detailImage: '',
  },
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.allEvents = action.payload.data;
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.oneEvent = action.payload.data;
      });
  },
});

export const eventAction = eventSlice.actions;
export default eventSlice.reducer;
