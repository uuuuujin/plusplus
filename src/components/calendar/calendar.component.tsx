import {
  CalendarBox,
  CalendarContainer,
  DateBox,
  DateTxt,
  DayBox,
  DayHeaderBox,
  DayTxt,
  MonthBox,
  MonthText,
  YearText,
} from './calendar.style';
import { CompareDate, getCalendar } from '../../utils/calendar';

import {
  selectCalendarReducerCheckOut,
  selectCalendarReducerDisable,
  selectCalendarReducerSetCheckIn,
} from '../../store/modules/calendar/calendar.select';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { calendarAction } from '../../store/modules/calendar/calendar.slice';

type CalendarProps = {
  year: number;
  month: number;
  roomId?: number;
  disabled?: number[];
};

const Calendar = ({
  year,
  month,
  roomId,
  disabled,
}: CalendarProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { startDay, totalOfDay } = getCalendar(year, month);
  const todayDate = new Date();

  const checkIn = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOut = useAppSelector(selectCalendarReducerCheckOut);
  const disableDay = useAppSelector(selectCalendarReducerDisable);

  const dayArray = new Array(startDay + totalOfDay!).fill(0);

  const onClickDate = (year: number, month: number, day: number) => {
    const clickedDate = new Array<number>(year, month, day);
    if (checkIn === undefined) {
      dispatch(calendarAction.setCheckInDate(clickedDate));
    } else if (checkOut === undefined) {
      if (year === checkIn[0] && month === checkIn[1] && day === checkIn[2]) {
        dispatch(calendarAction.setCheckInDate(undefined));
        return;
      }
      if (
        year < checkIn[0] ||
        (year === checkIn[0] && month < checkIn[1]) ||
        (year === checkIn[0] && month === checkIn[1] && day < checkIn[2])
      ) {
        dispatch(calendarAction.setCheckInDate(clickedDate));
      } else {
        dispatch(calendarAction.setCheckOutDate(clickedDate));
      }
    } else {
      dispatch(calendarAction.setCheckInDate(clickedDate));
      dispatch(calendarAction.setCheckOutDate(undefined));
    }
  };

  const renderCalendar = dayArray.map((key, index) => {
    if (index % 7 === 0) {
      return (
        <DayBox key={index}>
          {dayArray.slice(index, index + 7).map((value, i) => {
            if (index + i >= startDay) {
              return (
                <DateBox
                  key={index + i}
                  className={CompareDate(
                    year,
                    month,
                    index + i + 1 - startDay,
                    todayDate,
                    roomId
                      ? [
                          true,
                          disabled!.includes(index + i + 1 - startDay),
                          disableDay,
                        ]
                      : [false, false, [0, 0, 0]],
                    checkIn,
                    checkOut
                  )}
                  onClick={() =>
                    onClickDate(year, month, index + i + 1 - startDay)
                  }
                >
                  <DateTxt>{index + i + 1 - startDay}</DateTxt>
                  {todayDate.getFullYear() === year &&
                  todayDate.getMonth() === month - 1 &&
                  todayDate.getDate() === index + i + 1 - startDay ? (
                    <span className={'today-span'}>오늘</span>
                  ) : (
                    ''
                  )}
                  {/*{mockData.indexOf(index + i + 1 - startDay) > -1 && (*/}
                  {/*  <ReservationIcon />*/}
                  {/*)}*/}
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
      <MonthBox>
        <MonthText>{month}월</MonthText>
        <YearText>{year}년 </YearText>
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
