import {
  ArrowBack,
  ArrowForward,
  CalendarBox,
  CalendarContainer,
  DateBox,
  DateTxt,
  DayBox,
  DayHeaderBox,
  DayTxt,
  InfoBox,
  InfoTxt,
  MonthBox,
  MonthText,
  ReservationIcon,
  YearText,
} from './calendar.style';
import { getCalendar } from '../../utils/calendar';
import { useRef } from 'react';

const mockData = [4, 8, 10, 12, 13, 15, 16, 20, 25, 30];

const Calendar = (): JSX.Element => {
  const { startDay, totalOfDay } = getCalendar(2022, 6);
  const dayArray = useRef(new Array(startDay + totalOfDay!).fill(0));

  const renderCalendar = dayArray.current.map((key, index) => {
    if (index % 7 === 0) {
      return (
        <DayBox key={index}>
          {dayArray.current.slice(index, index + 7).map((value, i) => {
            if (index + i >= startDay) {
              return (
                <DateBox key={index + i} className={'date_box'}>
                  <DateTxt>{index + i + 1 - startDay}</DateTxt>
                  {mockData.indexOf(index + i + 1 - startDay) > -1 && (
                    <ReservationIcon />
                  )}
                </DateBox>
              );
            } else return <DayTxt key={index + i}></DayTxt>;
          })}
        </DayBox>
      );
    }
  });

  return (
    <CalendarContainer>
      <YearText>2022</YearText>
      <InfoBox>
        <ReservationIcon />
        <InfoTxt>예약이 존재하는 날입니다.</InfoTxt>
      </InfoBox>
      <MonthBox>
        <ArrowBack />
        <MonthText>1월</MonthText>
        <ArrowForward />
      </MonthBox>
      <CalendarBox>
        <DayHeaderBox>
          <DayTxt>일</DayTxt>
          <DayTxt>월</DayTxt>
          <DayTxt>화</DayTxt>
          <DayTxt>수</DayTxt>
          <DayTxt>목</DayTxt>
          <DayTxt>금</DayTxt>
          <DayTxt>토</DayTxt>
        </DayHeaderBox>
        <div>{renderCalendar}</div>
      </CalendarBox>
    </CalendarContainer>
  );
};

export default Calendar;
