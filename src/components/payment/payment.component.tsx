import { ContainerStyle } from '../container/container.component';
import Header from '../header/header.component';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LocationBox } from '../wishlist-Item/wishlitsitem.style';
import { useEffect, useRef, useState } from 'react';
import {
  CheckInBox,
  CheckInOutBox,
  CheckInOutText,
  CheckInTimeText,
  CheckOutBox,
  CheckOutTimeText,
  DateText,
  ErrorText,
  EventButton,
  HeadText,
  ImgBox,
  InfoBox,
  InfoTitle,
  InputBox,
  Line,
  MapIcon,
  OrderInfoBox,
  PaymentButton,
  PaymentEventBox,
  PaymentInfoBox,
  PaymentPriceBox,
  PaymentPriceText,
  PaymentWrapper,
  RadioBox,
  SalePrice,
  SelectBox,
  TitleBox,
  TotalPrice,
  UserInfoBox,
  UserInputBox,
} from './payment.style';
import styled from 'styled-components';
import CompletePaymentModal from '../complete-payment-modal/CompletePaymentModal.component';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsPaymentCompleteModalOpen } from '../../store/modules/modal/modal.select';
import { formatDate, formatDateInSearch } from '../../utils/calendar';
import { useLocation } from 'react-router-dom';
import { postOrder, postOrderProps } from '../../api/payment';
import {
  getUser,
  InitialData,
  postUser,
  userData,
  userDetail,
} from '../../api/mypage';
import { selectAccessToken } from '../../store/modules/user/user.select';
import { paymentProps } from '../../routes/room-description/roomDescription.component';
import { calendarAction } from '../../store/modules/calendar/calendar.slice';

export const StyledContainer = styled(ContainerStyle)`
  background-color: #fafafa;
  margin-bottom: 60px;
`;

export const Payment = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const nameRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const accessToken = useAppSelector(selectAccessToken);

  // 룸에 대한 데이터를 명시적으로 표현해주었다.
  const state = location.state as paymentProps;

  const isPaymentCompleteModalOpen = useAppSelector(
    selectIsPaymentCompleteModalOpen
  );
  const [userInfo, setUserInfo] = useState<userData>(InitialData);

  useEffect(() => {
    const user = getUser(accessToken);
    user.then((res) => {
      setUserInfo(res.data.user);
      setIsNameError(res.data.user.nickName.length < 1);
      setIsTelError(res.data.user.phoneNumber.length < 1);
    });
  }, []);

  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isTelError, setIsTelError] = useState<boolean>(false);

  const selectOptions = [
    { value: 0, text: '나이대를 선택하세요' },
    { value: 20, text: '20대' },
    { value: 30, text: '30대' },
    { value: 40, text: '40대' },
    { value: 50, text: '50대' },
    { value: 60, text: '60대 이상' },
  ];

  const handleClickRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      sex: Number(e.target.value) === 1 ? 'MALE' : 'FEMALE',
    });
  };

  const handleUserTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]{0,13}$/;
    if (e.target.value.length < 10) {
      setIsTelError(true);
    } else setIsTelError(false);

    if (regex.test(e.target.value)) {
      setUserInfo({
        ...userInfo,
        phoneNumber: e.target.value,
      });
    }
  };

  const handleChangeSelectBox = (e: any) => {
    setUserInfo({
      ...userInfo,
      age: Number(e.target.value),
    });
  };

  const handleInputChange = (e: any) => {
    if (e.target.value.length < 1) {
      setIsNameError(true);
    } else setIsNameError(false);

    setUserInfo({
      ...userInfo,
      nickName: e.target.value,
    });
  };

  const handleCompleteModalOpen = () => {
    if (isNameError && nameRef.current) {
      nameRef.current.focus();
      return;
    } else if (isTelError && telRef.current) {
      telRef.current.focus();
      return;
    } else if (userInfo.age === 0 && selectRef.current) {
      selectRef.current.focus();
      return;
    }
    // 처음에 개인정보를 입력 안했을 경우

    const updateUser: userDetail = {
      firstSign: true,
      nickName: userInfo.nickName,
      sex: userInfo.sex,
      phoneNumber: userInfo.phoneNumber,
      age: userInfo.age,
    };

    const res1 = postUser(updateUser, accessToken);
    res1.then((result) => console.log('업데이트가 완료되었습니다.'));

    const postData: postOrderProps = {
      startDate: formatDateInSearch(state.checkInDate),
      endDate: formatDateInSearch(state.checkOutDate),
      price: state.price,
      SpecialRequest: '감사합니다.',
      stationId: state.station_id.id,
      userId: userInfo.id,
      roomId: state.id,
      eventId: 1,
    };
    const res2 = postOrder(postData, accessToken);
    res2.then((res) => console.log('주문 완료'));
    dispatch(calendarAction.setCheckInDate(undefined));
    dispatch(calendarAction.setCheckOutDate(undefined));
    dispatch(modalAction.radioPaymentCompleteModal());
  };

  return (
    <StyledContainer>
      {userInfo && (
        <PaymentWrapper>
          <Header />
          <OrderInfoBox>
            <ImgBox>
              <img src={state.image} />
            </ImgBox>
            <InfoBox>
              <TitleBox>
                <InfoTitle>
                  {state.station_id.name}({state.name})
                </InfoTitle>
                <LocationBox>
                  <MdOutlineLocationOn />
                  <span>제주도 서귀포시 중문관광로72번길 35 </span>
                </LocationBox>
                <MapIcon />
              </TitleBox>

              <CheckInOutBox>
                <CheckInBox>
                  <CheckInOutText>체크인 날짜</CheckInOutText>
                  <DateText>{formatDate(state.checkInDate)}</DateText>
                  <CheckInTimeText>
                    {state.checkin_time ? state.checkin_time : '15:00'}
                  </CheckInTimeText>
                </CheckInBox>
                <CheckOutBox>
                  <CheckInOutText>체크아웃 날짜</CheckInOutText>{' '}
                  <DateText>{formatDate(state.checkOutDate)}</DateText>
                  <CheckOutTimeText>
                    {state.checkout_time ? state.checkout_time : '11:00'}
                  </CheckOutTimeText>
                </CheckOutBox>
                <Line />
              </CheckInOutBox>
            </InfoBox>
          </OrderInfoBox>
          <UserInfoBox>
            <HeadText>예약자 정보*</HeadText>
            <UserInputBox>
              <span>예약자 </span>
              <InputBox
                id="name"
                onChange={handleInputChange}
                value={userInfo.nickName}
                isErr={isNameError}
                placeholder="성명을 입력해주세요"
                type="text"
                ref={nameRef}
              />
              {isNameError && <ErrorText>성명을 입력해주세요</ErrorText>}
            </UserInputBox>

            <UserInputBox>
              <span>전화번호 </span>
              <InputBox
                id="phoneNumber"
                isErr={isTelError}
                maxLength={11}
                value={userInfo.phoneNumber}
                placeholder="-를 뺴고 입력하세요"
                type="text"
                onChange={handleUserTel}
                ref={telRef}
              />
              {isTelError && (
                <ErrorText>전화번호 11자리를 입력해주세요</ErrorText>
              )}
            </UserInputBox>
            <UserInputBox>
              <span>나이</span>
              <SelectBox
                value={userInfo.age}
                onChange={handleChangeSelectBox}
                ref={selectRef}
              >
                {selectOptions.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </SelectBox>
            </UserInputBox>
            <UserInputBox>
              <span>성별 </span>
              <RadioBox>
                <input
                  type="radio"
                  id="man"
                  name="man"
                  value={1}
                  checked={userInfo.sex === 'MALE'}
                  onChange={handleClickRadioButton}
                />
                <label>남성</label>
                <input
                  type="radio"
                  id="woman"
                  name="woman"
                  value={2}
                  checked={userInfo.sex === 'FEMALE'}
                  onChange={handleClickRadioButton}
                />
                <label>여성</label>
              </RadioBox>
            </UserInputBox>
          </UserInfoBox>
          <PaymentInfoBox>
            <HeadText>금액 및 할인 정보*</HeadText>
            <PaymentPriceBox>
              <PaymentPriceText>총 예약 금액</PaymentPriceText>
              <SalePrice> 85,000원</SalePrice>
            </PaymentPriceBox>
            <PaymentEventBox>
              <PaymentPriceText>적용가능 이벤트</PaymentPriceText>
              <EventButton>이벤트 조회/적용</EventButton>
            </PaymentEventBox>
            <Line />
            <PaymentPriceBox>
              <PaymentPriceText>결제 금액</PaymentPriceText>
              <TotalPrice> 85,000원</TotalPrice>
            </PaymentPriceBox>
          </PaymentInfoBox>
          <PaymentButton onClick={handleCompleteModalOpen}>
            85,000원 결제하기
          </PaymentButton>
        </PaymentWrapper>
      )}
      {isPaymentCompleteModalOpen && (
        <CompletePaymentModal
          checkInDate={formatDate(state.checkInDate)}
          checkOutDate={formatDate(state.checkOutDate)}
          nickName={userInfo.nickName}
          x={state.station_id.x}
          y={state.station_id.y}
          phoneNumber={userInfo.phoneNumber}
          stationName={state.station_id.name}
          roomName={state.name}
        />
      )}
    </StyledContainer>
  );
};

export default Payment;
