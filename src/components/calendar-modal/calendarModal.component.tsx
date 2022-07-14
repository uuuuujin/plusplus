import MainModal from '../main-modal/mainModal.component';
import { useState } from 'react';
import Calendar from '../calendar/calendar.component';
import { ArrowBack, ArrowForward, MonthText } from '../calendar/calendar.style';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsCalendarModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { formatDate } from '../../utils/calendar';
import {
  selectCalendarReducerCheckOut,
  selectCalendarReducerSetCheckIn,
} from '../../store/modules/calendar/calendar.select';
import { calendarAction } from '../../store/modules/calendar/calendar.slice';
import {
  CalendarBox,
  CalendarWrapper,
  ReservationButton,
} from './calendarModal.style';

const CalendarModal = () => {
  const dispatch = useAppDispatch();

  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  let today = new Date();
  let nextMonthDate = new Date(today.setMonth(today.getMonth() + 1));
  let nextNextMonthDate = new Date(today.setMonth(today.getMonth() + 1));
  today.setMonth(today.getMonth() - 2);

  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);

  const checkInOutText = () => {
    if (checkInDate === undefined) {
      return '';
    } else if (checkOutDate === undefined) {
      return `체크인 날짜 ${formatDate(checkInDate)}`;
    } else {
      return `체크인 날짜 ${formatDate(checkInDate)}  ~ 체크아웃 ${formatDate(
        checkOutDate
      )}`;
    }
  };

  const [thisMonth, setThisMonth] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const [nextMonth, setNextMonth] = useState({
    year: nextMonthDate.getFullYear(),
    month: nextMonthDate.getMonth(),
  });

  const onClickLeftBtn = () => {
    setThisMonth(
      thisMonth.month !== 0
        ? { ...thisMonth, month: thisMonth.month - 1 }
        : { ...thisMonth, year: thisMonth.year - 1, month: 11 }
    );

    setNextMonth(
      nextMonth.month !== 0
        ? { ...nextMonth, month: nextMonth.month - 1 }
        : { ...nextMonth, year: nextMonth.year - 1, month: 11 }
    );
  };

  const onClickRightBtn = () => {
    setThisMonth(
      thisMonth.month !== 11
        ? { ...thisMonth, month: thisMonth.month + 1 }
        : { ...thisMonth, year: thisMonth.year + 1, month: 0 }
    );

    setNextMonth(
      nextMonth.month !== 11
        ? { ...nextMonth, month: nextMonth.month + 1 }
        : { ...nextMonth, year: nextMonth.year + 1, month: 0 }
    );
  };

  const onModalClose = () => {
    dispatch(modalAction.setCalendarModal());
  };

  const onCalendarReset = () => {
    dispatch(calendarAction.setCheckInDate(undefined));
    dispatch(calendarAction.setCheckOutDate(undefined));
  };

  const onCloseCalendar = () => {
    onCalendarReset();
    onModalClose();
  };

  return (
    <MainModal
      isOpen={isCalendarModalOpen}
      onClose={onCloseCalendar}
      title="언제 떠날까요 ✈️✈️"
      contentWidth={768}
    >
      <CalendarWrapper>
        <CalendarBox>
          <Calendar year={thisMonth.year} month={thisMonth.month + 1} />
          <Calendar
            year={nextMonth.year}
            month={nextMonth.month + 1}
            str={'next-month'}
          />
          <Calendar
            year={nextNextMonthDate.getFullYear()}
            month={nextNextMonthDate.getMonth() + 1}
          />
        </CalendarBox>
        <ReservationButton onClick={onModalClose}>
          {checkInOutText()} 검색
        </ReservationButton>
      </CalendarWrapper>
    </MainModal>
  );
};

export default CalendarModal;
