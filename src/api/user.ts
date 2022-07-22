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

// 유저 한명 정보 가져오기
export const fetchUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (token: string) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/info`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('유저 정보: ', response.data);
    return response.data.data;
  }
);

interface LikeType {
  token: string;
  stationId: number;
}

export const fetchLike = async ({ token, stationId }: LikeType) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/likes`,
    {
      station_id: stationId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log('좋아요!!: ', response.data);
};
