import styled from 'styled-components';
import Header from '../header/header.component';
import { StyledContainer } from '../payment/payment.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsCalendarModalOpen } from '../../store/modules/modal/modal.select';
import CalendarModal from '../calendar-modal/calendarModal.component';
import { modalAction } from '../../store/modules/modal/modal.slice';
import {
  selectCalendarReducerCheckOut,
  selectCalendarReducerSetCheckIn,
} from '../../store/modules/calendar/calendar.select';
import { formatDate } from '../../utils/calendar';

const DescriptionRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px 30px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);

  border-bottom: 1px solid #ddd;
`;

const DescriptionName = styled.span`
  font-size: 20px;
  margin: 15px 0;
  font-weight: 500;
`;

const SelectCalendarText = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;

  > span {
    padding: 5px 10px 5px 10px;
    text-align: center;

    &:after {
      content: ' ∨';
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

const RoomHeadBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
`;

const RoomInFormationText = styled.span`
  letter-spacing: 3.2px;
  font-size: 14px;
`;

const RoomName = styled.span`
  margin: 15px 0;
  font-size: 20px;
  font-weight: 600;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
  margin-bottom: 50px;
  > span {
    font-size: 18px;
  }
`;

const CheckInDate = styled.span`
  margin-top: 10px;
  font-size: 14px;
  > span {
    color: gray;
  }
`;

const CheckOutDate = styled.span`
  margin-top: 10px;
  font-size: 14px;

  > span {
    color: gray;
  }
`;

const RoomImg = styled.img`
  margin: -30px;
  max-height: 540px;
  object-fit: cover;
`;

const PaymentButton = styled.button`
  width: 100%;
  max-width: 768px;
  height: 60px;
  position: fixed;
  bottom: 0;
  padding: 10px 0;
  margin: 0 auto;
  font-size: 16px;
  border: none;
  text-align: center;
  color: #fff;
  background-color: rgb(194, 220, 210);
`;

const ContentBox = styled.div`
  margin-top: 40px;
  height: 200px;
`;

const DescriptionRoom = () => {
  const dispatch = useAppDispatch();
  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);

  const handleOnClickCalender = () => {
    dispatch(modalAction.setCalendarModal());
  };

  return (
    <StyledContainer>
      <DescriptionRoomContainer>
        <Header></Header>
        <CalendarBox>
          <RoomInFormationText>예약 정보</RoomInFormationText>
          <DescriptionName>굿올데이즈 호텔</DescriptionName>
          <SelectCalendarText onClick={handleOnClickCalender}>
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
          <CheckInDate>
            체크인: <span>15:00</span>
          </CheckInDate>
          <CheckOutDate>
            체크아웃: <span>11:00</span>
          </CheckOutDate>
        </CalendarBox>
        <RoomHeadBox>
          <RoomInFormationText>룸 정보</RoomInFormationText>
          <RoomName>101호실 (1인실)</RoomName>
          <PriceBox>
            <span>₩ 280,000/1박</span>
          </PriceBox>
          <RoomImg src="https://a0.muscache.com/im/pictures/f338c10f-c0d4-477e-b50e-5166b39829ee.jpg?im_w=720" />
          <ContentBox>
            이 방은 퀸 사이즈 침대가 한개고 방 크기가 넓어요. 혼자 넓은 방에서
            지내보시는 건 어떠신가요
          </ContentBox>
        </RoomHeadBox>

        <PaymentButton>결제하기</PaymentButton>
      </DescriptionRoomContainer>
      {isCalendarModalOpen && <CalendarModal roomId={1234} />}
    </StyledContainer>
  );
};

export default DescriptionRoom;
