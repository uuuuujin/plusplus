import styled from 'styled-components';
import { BsMap } from 'react-icons/bs';

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderInfoBox = styled.div`
  margin: 10px 0;
  width: 100%;
  background-color: #fff;
`;

export const ImgBox = styled.div`
  width: 100%;
  padding: 10px 0 0 0;

  box-sizing: border-box;
  > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

export const InfoBox = styled.div`
  border: 1px solid #d7e2eb;
  border-top-style: none;
  border-radius: 0 0 20px 20px;
  padding: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const MapIcon = styled(BsMap)`
  position: absolute;
  top: calc(50% - 20px);
  font-size: 20px;
  cursor: pointer;
  right: 0;
`;

export const InfoTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const CheckInOutBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 12px;
`;

export const CheckInOutText = styled.span`
  width: 20%;
  font-size: 14px;
  font-weight: 500;
`;

export const CheckInBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckOutBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Line = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 3px 6px;
  background-color: #f0f5fa;
  border-radius: 5px;
  font-size: 8px;
  font-weight: 700;
`;

export const DateText = styled.span`
  width: 15%;
  text-align: center;
  background-color: #f0f5fa;
  color: black;
  border-radius: 0.3rem;
  padding: 3px 6px;
  font-size: 12px;
`;

export const CheckInTimeText = styled.span`
  width: 10%;
  text-align: center;
  background-color: #f0f5fa;
  border-radius: 0.3rem;
  padding: 3px 6px;
  font-size: 12px;
  margin-left: 3%;
`;

export const CheckOutTimeText = styled.span`
  width: 10%;
  text-align: center;
  background-color: #f0f5fa;
  margin-left: 3%;
  color: red;
  border-radius: 0.3rem;
  padding: 3px 6px;
  font-size: 12px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
`;

export const HeadText = styled.span`
  font-size: 14px;
  padding: 5px 0;
  font-weight: 500;
`;

export const UserInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: baseline;
  justify-content: flex-end;
  padding: 10px 0;

  > span {
    font-size: 11px;
    color: #000;
    font-weight: 500;
    padding: 3px 0;
    &::after {
      content: '*';
      color: red;
    }
  }
`;

export const InputBox = styled.input<{ isErr: boolean }>`
  border: none;
  border-bottom: ${(props) =>
    props.isErr ? '1px solid #ddd;' : '1px solid red;'}
  width: 100%;
  padding: 8px 0;
  &::placeholder {
    color: #ddd;
  }
`;

export const PaymentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 20px;
`;

export const PaymentPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
`;

export const PaymentEventBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: baseline;
`;

export const EventButton = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid #000;
  width: 15%;
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer;
`;

export const SelectBox = styled.select`
  padding: 2px 5px;
  border: 1px solid #ddd;
  font-size: 12px;
  margin: 8px 0;
`;

export const PaymentPriceText = styled.span`
  font-size: 13px;
  font-weight: 400;
`;

export const SalePrice = styled.span`
  width: 15%;
  text-align: center;
`;

export const TotalPrice = styled(SalePrice)`
  color: red;
`;

export const PaymentButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px 0;
  margin: 0 auto;
  font-size: 14px;
  border: none;
  text-align: center;
  color: #fff;
  background-color: rgb(194, 220, 210);
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 10px;
  padding: 6px 2px;
`;

export const RadioBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 10px;
  padding: 8px 0;
`;
