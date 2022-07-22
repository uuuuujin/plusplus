import { InnerContainer } from '../../routes/mypage/mypage.style';
import BookingListItem from '../booking-list-item/bookinglistitem.component';
import { Line } from '../payment/payment.style';
import { TitleText } from '../wishlist/wishlist.style';
import { useAppSelector } from '../../hooks/index.hook';
import { selectAccessToken } from '../../store/modules/user/user.select';
import { useEffect, useState } from 'react';
import { BookingListData, getBookingList } from '../../api/bookinglist';

const BookingListComponent = (): JSX.Element => {
  const accessToken = useAppSelector(selectAccessToken);
  const [bookingData, setBookingData] = useState<BookingListData[] | []>([]);
  useEffect(() => {
    const data = getBookingList(accessToken);
    data.then((res) => setBookingData(res.data));
    console.log(bookingData);
  }, []);

  return (
    <InnerContainer>
      <TitleText>예약리스트</TitleText>
      <Line />
      {bookingData.length > 0 &&
        bookingData.map((item, index) => (
          <BookingListItem
            key={item.id}
            stationId={item.station_id.id}
            stationName={item.station_id.name}
            roomId={item.room_id.id}
            roomName={item.room_id.name}
            address={item.station_id.address}
            checkInDate={item.start_date}
            checkOutDate={item.end_date}
            checkInTime={item.room_id.checkin_time}
            checkOutTime={item.room_id.checkout_time}
            roomImg={item.room_id.image}
          />
        ))}
    </InnerContainer>
  );
};

export default BookingListComponent;
