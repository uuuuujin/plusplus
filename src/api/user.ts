import { selectAccessToken } from './../store/modules/user/user.select';
import { useAppSelector } from './../hooks/index.hook';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
/**
 * @params token
 */
export const fetchUser = createAsyncThunk(
  'userlist/getUsers',
  async (token: string) => {
    // const token = useAppSelector(selectAccessToken);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return;
    }
  }
);
