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
  StyledLink,
} from './bookinglistitem.style';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { AiOutlineComment } from 'react-icons/ai';

export interface bookingListItemProps {
  stationId: number;
  stationName: string;
  roomId: number;
  roomName: string;
  address: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  roomImg: string;
}

const BookingListItem = (props: bookingListItemProps) => {
  return (
    <ItemBox>
      <InfoBox>
        <RoomName>
          {props.stationName}({props.roomName})
        </RoomName>
        <LocationBox>
          <MdOutlineLocationOn />
          <span>{props.address}</span>
        </LocationBox>
        <CheckInOutTimeBox>
          <CheckInOutTime>
            {props.checkInDate}
            <span>
              ✨ 체크인 시간 <strong>{props.checkInTime}</strong>
            </span>
          </CheckInOutTime>
          <ArrowIcon />
          <CheckInOutTime>
            {props.checkOutDate}
            <span>
              ✅ 체크아웃 시간 <strong>{props.checkOutTime}</strong>
            </span>
          </CheckInOutTime>
        </CheckInOutTimeBox>
        <ButtonBox>
          <CalendarIcon />
          <span>예약 취소</span>
          <AiOutlineComment />
          <span>리뷰 달기</span>
        </ButtonBox>
      </InfoBox>

      <StyledLink to={`${ROUTES.ROOM.link}/${props.stationId}/${props.roomId}`}>
        <RoomImg src={props.roomImg} />
      </StyledLink>
    </ItemBox>
  );
};

export default BookingListItem;
