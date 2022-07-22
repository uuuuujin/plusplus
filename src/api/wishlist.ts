import axios from 'axios';

export interface RoomItem {
  station_id: number;
  station_name: string;
  station_image: string;
  station_content: string;
  station_minprice: number;
  station_maxprice: number;
  station_address: string;
  station_x: number;
  station_y: number;
  station_status: string;
  station_created_at?: string;
  station_updated_at?: string;
  station_local_id: number;
  station_stay_id: number;
  station_event_id: number;
}

export const getWishList = async (token: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/likes/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteWishItem = async (token: string, roomId: number) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/likes/${roomId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
