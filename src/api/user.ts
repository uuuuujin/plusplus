import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  //   console.log(`${process.env.REACT_APP_API_URL}`);
  return response.data;
});
