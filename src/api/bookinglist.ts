import axios from 'axios';
import { userData } from './mypage';

export interface BookingListData {
  SpecialRequest: string;
  created_at: string;
  end_date: string;
  updated_at: string;
  id: string;
  price: string;
  start_date: string;
  user_id: IUser;
  station_id: IStation;
  room_id: IRoom;
  event_id: IEvent;
}

export interface IUser extends userData {
  created_at: string;
  updated_at: string;
  userRefreshToken: string;
}

export interface IStation {
  id: number;
  name: string;
  image: string;
  content: string;
  minprice: number;
  maxprice: number;
  address: string;
  x: string;
  y: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IRoom {
  id: number;
  name: string;
  image: string;
  content: string;
  price: number;
  max_cnt: number;
  checkin_time: string;
  checkout_time: string;
  created_at: string;
  updated_at: string;
}

export interface IEvent {
  id: number;
  name: string;
  image?: string;
  detailImage?: string;
  start_date: string;
  end_date: string;
  rate: number;
}

export const getBookingList = async (token: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/orders/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {}
};
