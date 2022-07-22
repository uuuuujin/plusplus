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
import styled from "styled-components";

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

export const ItemInfoDiv = styled.div`
  display: flex;  
  flex-direction: column;
  height: 80%;
  cursor: pointer;
  
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
const BookingListItem = (props: bookingListItemProps) => {
  return (
    <ItemBox>
      <InfoBox>
        <StyledLink to={`${ROUTES.ROOM.link}/${props.stationId}/${props.roomId}`}>
          <ItemInfoDiv>
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
                체크인 시간 <strong>{props.checkInTime}</strong>
              </span>
              </CheckInOutTime>
              <ArrowIcon />
              <CheckInOutTime>
                {props.checkOutDate}
                <span>
                체크아웃 시간 <strong>{props.checkOutTime}</strong>
              </span>
              </CheckInOutTime>
            </CheckInOutTimeBox>
          </ItemInfoDiv>
        </StyledLink>
        <ButtonBox onClick={() => alert('아직 개발중 입니다.')}>
          <CalendarIcon />
          <span>예약 취소</span>
          <AiOutlineComment />
          <span >리뷰 달기</span>
        </ButtonBox>
      </InfoBox>

      <StyledLink to={`${ROUTES.ROOM.link}/${props.stationId}/${props.roomId}`}>
        <RoomImg src={props.roomImg} />
      </StyledLink>
    </ItemBox>
  );
};

export default BookingListItem;
