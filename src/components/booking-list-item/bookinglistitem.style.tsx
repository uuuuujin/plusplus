import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ItemBox = styled.div`
  display: flex;
  height: 200px;
  border: 1px solid #e9e9e9;
  width: 90%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
  border: 1px solid #d7e2eb;

  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  width: 70%;
  padding: 22px 15px 3px 15px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const RoomName = styled.span`
  font-size: 19px;
  height: 20%;
  letter-spacing: 2px;
  padding: 5px 5px;
`;

export const StyledLink = styled(Link)`
  width: 30%;
  height: 100%;
  text-decoration: none;
  color: #000;

  @media screen and (max-width: 450px) {
    width: 0%;
    > img {
      display: none;
    }
  }
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
  /* 이미지를 고정된 크기에 맞춰서 깨지지 않게 해준다*/
  object-fit: cover;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const CheckInOutTimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  border-bottom: 1px solid #dddddd;
`;

export const CheckInOutTime = styled.div`
  display: flex;
  flex-direction: column;

  align-items: end;
  font-weight: 600;
  font-size: 14px;

  > span {
    font-size: 12px;
    opacity: 0.5;
    font-weight: 400;
  }
`;

export const ArrowIcon = styled(FaLongArrowAltRight)`
  font-size: 30px;
  width: 20%;
  color: green;
`;

export const CalendarIcon = styled(AiOutlineCalendar)`
  font-size: 20px;
  margin-right: 3px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  //height: calc(175px - 70%);
  height: 15%;

  > svg {
    margin-left: 30px;
    margin-right: 4px;
    &:first-child {
      margin-left: 10px;
    }
  }

  > span {
    font-size: 12px;
    cursor: pointer;
  }
`;
