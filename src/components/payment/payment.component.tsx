import Container, { ContainerStyle } from '../container/container.component';
import Header from '../header/header.component';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LocationBox } from '../wishlist-Item/wishlitsitem.style';
import { useEffect, useState } from 'react';
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

interface UserInfo {
  name: string;
  phoneNumber: number;
  sex: number;
  age: number;
}

export const StyledContainer = styled(ContainerStyle)`
  background-color: #fafafa;
  margin-bottom: 60px;
`;

export const Payment = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    phoneNumber: 0,
    sex: 1,
    age: 0,
  });

  const [isNameError, setIsNameError] = useState<boolean>(true);

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
      sex: Number(e.target.value),
    });
  };

  const handleChangeSelectBox = (e: any) => {
    setUserInfo({
      ...userInfo,
      age: Number(e.target.value),
    });
  };

  const handleInputChange = (e: any) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <StyledContainer>
      <PaymentWrapper>
        <Header />
        <OrderInfoBox>
          <ImgBox>
            <img src="https://images.stayfolio.com/system/pictures/images/000/101/850/original/a16d062fb0fe04c53b90be300e9ef66422fab7d4.jpg?1637731090" />
          </ImgBox>
          <InfoBox>
            <TitleBox>
              <InfoTitle>동산리 해변 옆 몽환적인 로지(Lodge)</InfoTitle>
              <LocationBox>
                <MdOutlineLocationOn />
                <span>제주도 서귀포시 중문관광로72번길 35 </span>
              </LocationBox>
              <MapIcon />
            </TitleBox>

            <CheckInOutBox>
              <CheckInBox>
                <CheckInOutText>체크인 날짜</CheckInOutText>
                <DateText>2022-7월-15일(금)</DateText>
                <CheckInTimeText>15:00</CheckInTimeText>
              </CheckInBox>
              <CheckOutBox>
                <CheckInOutText>체크아웃 날짜</CheckInOutText>{' '}
                <DateText>2022-7월-17일(일)</DateText>
                <CheckOutTimeText>11:00</CheckOutTimeText>
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
              value={userInfo.name}
              isErr={isNameError}
              placeholder="성명을 입력해주세요"
              type="text"
            />
            {isNameError && <ErrorText>성명을 입력해주세요</ErrorText>}
          </UserInputBox>

          <UserInputBox>
            <span>전화번호 </span>
            <InputBox
              id="phoneNumber"
              isErr={true}
              placeholder="-를 뺴고 입력하세요"
              type="text"
              onChange={handleInputChange}
            />
          </UserInputBox>
          <UserInputBox>
            <span>나이</span>
            <SelectBox value={userInfo.age} onChange={handleChangeSelectBox}>
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
                checked={userInfo.sex === 1}
                onChange={handleClickRadioButton}
              />
              <label>남성</label>
              <input
                type="radio"
                id="woman"
                name="woman"
                value={2}
                checked={userInfo.sex === 2}
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
        <PaymentButton>85,000원 결제하기</PaymentButton>
      </PaymentWrapper>
    </StyledContainer>
  );
};

export default Payment;
