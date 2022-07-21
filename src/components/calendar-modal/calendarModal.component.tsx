import MainModal from '../main-modal/mainModal.component';
import { useEffect, useState } from 'react';
import Calendar from '../calendar/calendar.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsCalendarModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { formatDate } from '../../utils/calendar';
import { useLocation, useNavigate } from 'react-router-dom';

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

/**
 * 체크인 날짜 이후의 예약 불가능한 날짜 값을 확인합니다.
 * @param checkInDay 체크인 날짜
 * @param mockData 예약이 된 날짜 리스트
 * @constructor
 */
const FindDate = (checkInDay: number[], mockData: any) => {
  let checkIn = new Date(checkInDay[0], checkInDay[1], checkInDay[2]);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < mockData[i].day.length; j++) {
      let mDate = new Date(mockData[i].year, mockData[i].month, j + 1);
      if (mDate > checkIn && mockData[i].day[j]) {
        return [mockData[i].year, mockData[i].month, j + 1];
      }
    }
  }
};

export interface CalendarModalProps {
  roomId?: number;
}

const mockData = [
  {
    year: 2022,
    month: 7,
    day: [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
    ],
  },
  {
    year: 2022,
    month: 8,
    day: [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
    ],
  },
  {
    year: 2022,
    month: 9,
    day: [
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
    ],
  },
];

const CalendarModal = ({ roomId }: CalendarModalProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  let today = new Date();
  let nextMonthDate = new Date(today.setMonth(today.getMonth() + 1));
  let nextNextMonthDate = new Date(today.setMonth(today.getMonth() + 1));
  today.setMonth(today.getMonth() - 2);

  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);

  useEffect(() => {
    if (roomId) {
      if (checkInDate !== undefined && checkOutDate === undefined) {
        let d = FindDate(checkInDate, mockData);
        dispatch(calendarAction.setDisableDate(d));
      }
    }
  }, [checkInDate]);

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

  // const onClickLeftBtn = () => {
  //   setThisMonth(
  //     thisMonth.month !== 0
  //       ? { ...thisMonth, month: thisMonth.month - 1 }
  //       : { ...thisMonth, year: thisMonth.year - 1, month: 11 }
  //   );
  //
  //   setNextMonth(
  //     nextMonth.month !== 0
  //       ? { ...nextMonth, month: nextMonth.month - 1 }
  //       : { ...nextMonth, year: nextMonth.year - 1, month: 11 }
  //   );
  // };

  // const onClickRightBtn = () => {
  //   setThisMonth(
  //     thisMonth.month !== 11
  //       ? { ...thisMonth, month: thisMonth.month + 1 }
  //       : { ...thisMonth, year: thisMonth.year + 1, month: 0 }
  //   );
  //
  //   setNextMonth(
  //     nextMonth.month !== 11
  //       ? { ...nextMonth, month: nextMonth.month + 1 }
  //       : { ...nextMonth, year: nextMonth.year + 1, month: 0 }
  //   );
  // };

  const onSubmit = () => {
    dispatch(modalAction.setCalendarModal());
    if (!location.pathname.slice(1).includes('stay')) {
      navigate(`/search`);
    }
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
          <Calendar
            year={thisMonth.year}
            month={thisMonth.month + 1}
            roomId={roomId}
          />
          <Calendar
            year={nextMonth.year}
            month={nextMonth.month + 1}
            roomId={roomId}
          />
          <Calendar
            year={nextNextMonthDate.getFullYear()}
            month={nextNextMonthDate.getMonth() + 1}
            roomId={roomId}
          />
        </CalendarBox>
        <ReservationButton onClick={onSubmit}>
          {checkInOutText()} 검색
        </ReservationButton>
      </CalendarWrapper>
    </MainModal>
  );
};

export default CalendarModal;
