import styled from 'styled-components';
import theme from '../../style/theme';

export const DescriptionRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px 30px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);

  border-bottom: 1px solid #ddd;
`;

export const DescriptionName = styled.span`
  font-size: 20px;
  margin: 15px 0;
  font-weight: 500;
`;

export const SelectCalendarText = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    > span {
      font-size: 13px;
    }
  }

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

export const RoomHeadBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
`;

export const RoomInFormationText = styled.span`
  letter-spacing: 3.2px;
  font-size: 14px;

  &.amenities {
    display: inline-block;
    margin-top: 70px;
    border-top: 1px solid ${theme.colors.border};
    padding-top: 30px;
  }
`;

export const RoomName = styled.span`
  margin: 15px 0;
  font-size: 20px;
  font-weight: 600;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
  margin-bottom: 50px;
  > span {
    font-size: 18px;
  }
`;

export const CheckInDate = styled.span`
  margin-top: 10px;
  font-size: 14px;
  > span {
    color: gray;
  }
`;

export const CheckOutDate = styled.span`
  margin-top: 10px;
  font-size: 14px;

  > span {
    color: gray;
  }
`;

export const RoomImg = styled.img`
  margin: -30px;
  max-height: 540px;
  object-fit: cover;
`;

export const PaymentButton = styled.button`
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
  background-color: ${theme.colors.main};
  cursor: pointer;
`;

export const ContentBox = styled.div`
  margin-top: 55px;
  // height: 200px;
  line-height: 2;
`;

export const AminitiesUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const AminitiesLi = styled.li`
  color: #777;
  margin: 20px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;

  & > svg {
    font-size: 50px;
  }

  & > span {
    font-size: 14px;
    display: inline-block;
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    & > svg {
      font-size: 30px;
    }
  }
`;
