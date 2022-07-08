import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YearText = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: -0.5px;
  opacity: 0.4;
  margin-bottom: 15px;
`;

export const InfoBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 40px;
  right: 10px;
`;

export const InfoTxt = styled.span`
  display: inline-block;
  margin-left: 1px;
  font-size: 11px;
  letter-spacing: -0.5px;
  opacity: 0.5;
`;

export const MonthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  width: 15%;
  margin-bottom: 30px;
`;

export const MonthText = styled.span`
  font-size: 25px;
  font-weight: 500;
`;

export const CalendarBox = styled.div`
  width: 100%;
  max-width: 768px;
`;

export const DayHeaderBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid #eff0f2;
`;

export const DayBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  height: 70px;

  &:nth-last-child(1) {
    > .date_box {
      width: calc(100% / 7);
      flex: initial;
    }
  }
`;

export const DayTxt = styled.span`
  flex: 1;
  height: 30px;
  text-align: center;

  &:nth-child(1) {
    color: #ff6969;
  }
  &:nth-child(7) {
    color: #2196f3;
  }
`;

export const DateBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:nth-child(1) {
    color: #ff6969;
  }
  &:nth-child(7) {
    color: #2196f3;
  }
`;

export const DateTxt = styled.span`
  display: inline-block;
  margin-bottom: 5px;
`;

export const ReservationIcon = styled(BsDot)`
  font-size: 20px;
  color: #81b147;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  font-size: 18px;
  opacity: 0.5;
`;

export const ArrowForward = styled(IoIosArrowForward)`
  font-size: 18px;
  opacity: 0.5;
`;
