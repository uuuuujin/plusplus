import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  max-width: 368px;
  margin: 0 auto;
  background-color: #fff;

  align-items: center;
`;

export const YearText = styled.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.5px;
  opacity: 0.4;
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
  justify-content: start;
  align-items: baseline;
  margin: 10px 0px;

  min-width: 100px;
  width: 100%;
`;

export const MonthText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 3px;
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
  height: 40px;
  font-size: 12px;

  .disable {
    color: #ddd;
    /*포인터 이벤트 막기*/
    pointer-events: none;
  }

  .disable-room {
    color: #e9e9e9;
    /*포인터 이벤트 막기*/
    pointer-events: none;
    text-decoration: line-through;
  }

  .today {
    border-radius: 30px;
    background-color: #ddd;
    .today-span {
      font-size: 12px;
      padding: 0 4px;
      border-radius: 2px;
    }
  }

  .onlyStartDay {
    color: #94b49f;
    border: 2px solid #94b49f;
    border-radius: 10px;
  }

  .period {
    color: #fff;
    border-right: 0.1px solid #ddd;
    background-color: #94b49f;
    box-sizing: border-box;
  }

  .startDay {
    color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #94b49f;
    border-right: 0.1px solid #ddd;
  }

  .endDay {
    color: #fff;
    border-top: 2px solid #94b49f;
    border-bottom: 2px solid #94b49f;
    border-right: 2px solid #94b49f;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #94b49f;
  }

  .date_box,
  .today {
    &:hover {
      background-color: #e9e9e9;
      opacity: 0.5;
    }
    &:nth-child(1) {
      color: #ff6969;
    }
    &:nth-child(7) {
      color: #2196f3;
    }
  }

  .date_box,
  .disable,
  .disable-room,
  .startDay,
  .onlyStartDay,
  .endDay,
  .period {
    width: calc(100% / 7);
    flex: initial;
    box-sizing: border-box;
  }
`;

export const DayTxt = styled.span`
  flex: 1;
  height: 30px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;

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
  box-sizing: border-box;
  padding: 5px 0;
`;

export const DateTxt = styled.span`
  display: inline-block;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const ReservationIcon = styled(BsDot)`
  font-size: 20px;
  color: #81b147;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  font-size: 20px;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 0;
`;

export const ArrowForward = styled(IoIosArrowForward)`
  font-size: 20px;
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: 0;
`;
