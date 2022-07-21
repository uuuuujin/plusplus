import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { formatDate, formatDateInSearch } from '../../utils/calendar';
import { getRoom } from '../../api/stay';

import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsCalendarModalOpen } from '../../store/modules/modal/modal.select';
import { selectRoomData } from '../../store/modules/stay/stay.select';
import {
  selectCalendarReducerCheckOut,
  selectCalendarReducerSetCheckIn,
} from '../../store/modules/calendar/calendar.select';

import CalendarModal from '../../components/calendar-modal/calendarModal.component';
import Header from '../../components/header/header.component';
import { StyledContainer } from '../../components/payment/payment.component';

import {
  DescriptionRoomContainer,
  CalendarBox,
  DescriptionName,
  SelectCalendarText,
  RoomHeadBox,
  RoomInFormationText,
  RoomName,
  PriceBox,
  CheckInDate,
  CheckOutDate,
  RoomImg,
  PaymentButton,
  ContentBox,
} from './roomDescription.style';
import { roomData } from '../../api/payment';

export interface paymentProps extends roomData {
  checkInDate: number[];
  checkOutDate: number[];
}

const RoomDescription = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const dateRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);

  const roomData = useAppSelector(selectRoomData);

  const handleOnClickCalender = () => {
    dispatch(modalAction.setCalendarModal());
  };

  const handleOnClickPayment = () => {
    if (
      (checkInDate === undefined || checkOutDate === undefined) &&
      dateRef.current
    ) {
    } else {
      if (checkInDate !== undefined && checkOutDate !== undefined) {
        const newData = {
          ...roomData,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
        };
        navigate('/payment', { state: newData });
      }
    }
  };

  const ROOM_ID = Number(location.pathname.split('/')[3]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getRoom(ROOM_ID));
    };

    fetchData();
  }, [dispatch, ROOM_ID]);

  return (
    <StyledContainer>
      <DescriptionRoomContainer>
        <Header></Header>
        <CalendarBox>
          <RoomInFormationText>예약 정보</RoomInFormationText>
          <DescriptionName>{roomData.station_id.name}</DescriptionName>
          <SelectCalendarText ref={dateRef} onClick={handleOnClickCalender}>
            <span>
              {checkInDate !== undefined
                ? checkOutDate === undefined
                  ? '체크아웃 날짜를 입력해주세요'
                  : `체크인 ${formatDate(checkInDate)} | 체크아웃 ${formatDate(
                      checkOutDate
                    )}`
                : '날짜를 선택해주세요.'}
            </span>
          </SelectCalendarText>
          <CheckInDate ref={dateRef}>
            체크인: <span>{roomData.checkin_time}</span>
          </CheckInDate>
          <CheckOutDate>
            체크아웃: <span>{roomData.checkout_time}</span>
          </CheckOutDate>
        </CalendarBox>
        <RoomHeadBox>
          <RoomInFormationText>룸 정보</RoomInFormationText>
          <RoomName>{roomData.name}</RoomName>
          <PriceBox>
            <span>₩ {roomData.price.toLocaleString()}/1박</span>
          </PriceBox>
          <RoomImg src={roomData.image} />
          <ContentBox>{roomData.content}</ContentBox>
        </RoomHeadBox>

        <PaymentButton onClick={handleOnClickPayment}>결제하기</PaymentButton>
      </DescriptionRoomContainer>
      {isCalendarModalOpen && <CalendarModal roomId={ROOM_ID} />}
    </StyledContainer>
  );
};

export default RoomDescription;
