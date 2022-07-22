import axios from 'axios';

export const getRoomDate = async (
  roomId: number,
  checkInData: string,
  checkOutDate: string
) => {
  const data = {
    from: checkInData,
    to: checkOutDate,
  };
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/orders/room/${roomId}`,
    JSON.stringify(data),
    {
      headers: { 'Content-Type': `application/json` },
    }
  );
  return response.data;
};
