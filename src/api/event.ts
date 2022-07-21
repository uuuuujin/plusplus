import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEvent = createAsyncThunk('event/getEvent', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
  console.log(response.data);
  return response.data;
});
