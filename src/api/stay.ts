import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStay = createAsyncThunk(
  'stay/getStayResult',
  async (stayId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/stations/${stayId}`
    );
    return response.data;
  }
);

export const getRoom = createAsyncThunk(
  'stay/getRoom',
  async (roomId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/rooms/${roomId}`
    );
    return response.data;
  }
);
