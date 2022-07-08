import { LocationBox } from '../wishlist-Item/wishlitsitem.style';
import { MdOutlineLocationOn } from 'react-icons/md';
import {
  ArrowIcon,
  ButtonBox,
  CalendarIcon,
  CheckInOutTime,
  CheckInOutTimeBox,
  InfoBox,
  ItemBox,
  RoomImg,
  RoomName,
} from './bookinglistitem.style';

const BookingListItem = () => {
  return (
    <ItemBox>
      <InfoBox>
        <RoomName>앤디앤라라홈</RoomName>
        <LocationBox>
          <MdOutlineLocationOn />
          <span>제주도 서귀포시 중문관광로72번길 35 </span>
        </LocationBox>
        <CheckInOutTimeBox>
          <CheckInOutTime>
            2022년 7월 8일(금)
            <span>
              ✨ 체크인 시간 <strong>15:00</strong>
            </span>
          </CheckInOutTime>
          <ArrowIcon />
          <CheckInOutTime>
            2022년 7월 9일(토)
            <span>
              ✅ 체크아웃 시간 <strong>11:00</strong>
            </span>
          </CheckInOutTime>
        </CheckInOutTimeBox>
        <ButtonBox>
          <CalendarIcon />
          <span>예약 변경 및 취소</span>
        </ButtonBox>
      </InfoBox>
      <RoomImg src="http://images.stayfolio.com/system/pictures/images/000/102/357/display/278e1b5048400bac804b3647f00c3fc3738ce20e.jpg?1638171725" />
    </ItemBox>
  );
};

export default BookingListItem;
