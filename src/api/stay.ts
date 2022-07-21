import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../hooks/index.hook';

export const getStay = createAsyncThunk(
  'stay/getStayResult',
  async (stayId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/stations/${stayId}`
    );
    console.log('response: ', response);
    return response.data;
  }
);

export const getRoom = createAsyncThunk(
  'stay/getRoom',
  async (roomId: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/rooms/${roomId}`
    );
    console.log('room response: ', response);
    return response.data;
  }
);
