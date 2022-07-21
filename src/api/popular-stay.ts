import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPopularStay = createAsyncThunk(
  'popularStay/getPopularStay',
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/stations/likes`
    );
    console.log('인기순 숙소: ', response.data);
    return response.data;
  }
);
