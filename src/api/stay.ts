import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../hooks/index.hook';

export const getStay = createAsyncThunk(
  'search/getStayResult',
  async (stayId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/stations/${stayId}`
    );
    console.log('response: ', response);
    return response.data;
  }
);
