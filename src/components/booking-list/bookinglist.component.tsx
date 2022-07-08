import { InnerContainer } from '../../routes/mypage/mypage.style';
import BookingListItem from '../booking-list-item/bookinglistitem.component';
import { TitleText } from '../wishlist/wishlist.style';

const BookingListComponent = (): JSX.Element => {
  return (
    <InnerContainer>
      <TitleText>예약리스트</TitleText>
      <BookingListItem />
      <BookingListItem />
      <BookingListItem />
    </InnerContainer>
  );
};

export default BookingListComponent;
