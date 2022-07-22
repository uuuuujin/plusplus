import styled from 'styled-components';
import theme from '../../style/theme';

export const PaymentModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const HeadText = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const BookingInfoWrap = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 0;
  width: 100%;
  margin-bottom: 20px;
`;

export const BookingInfoBox = styled.div`
  display: flex;
  width: 100%;
  padding: 7px 20px;
  box-sizing: border-box;
`;

export const TitleText = styled.span`
  width: 25%;
  font-size: 14px;
  font-weight: 500;
`;

export const BookingText = styled.span`
  width: 60%;
  font-size: 14px;
  font-weight: 400;
`;

export const ButtonBox = styled.div`
  display: flex;
  margin-top: 10px;

  > button {
    flex: 1 1;
    cursor: pointer;
  }
`;

export const MoveHomeButton = styled.button`
  color: ${theme.colors.main};
  border: 1px solid #ddd;
  background-color: transparent;
  padding: 10px;
  font-size: 14px;
`;

export const MoveMypageButton = styled.button`
  border: 1px solid #ddd;
  background-color: transparent;
  padding: 10px;
  font-size: 14px;
`;
