import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllEvents = createAsyncThunk(
  'event/getAllEvents',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
    console.log('all events: ', response.data);
    return response.data;
  }
);

export const fetchEvent = createAsyncThunk(
  'event/getEvent',
  async (eventId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/events/${eventId}`
    );
    console.log('이벤트: ', response.data);
    return response.data;
  }
);
