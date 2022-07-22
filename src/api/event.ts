import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllEvents = createAsyncThunk(
  'event/getAllEvents',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
    return response.data;
  }
);

export const fetchEvent = createAsyncThunk(
  'event/getEvent',
  async (eventId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/events/${eventId}`
    );
    return response.data;
  }
);
