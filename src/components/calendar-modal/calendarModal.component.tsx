import MainModal from '../main-modal/mainModal.component';
import { useEffect, useState } from 'react';
import Calendar from '../calendar/calendar.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsCalendarModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { formatDate, formatDate2 } from '../../utils/calendar';
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
import { getRoomDate } from '../../api/calendar';

/**
 * 체크인 날짜 이후의 예약 불가능한 날짜 값을 확인합니다.
 * @param checkInDay 체크인 날짜
 * @param mockData 예약이 된 날짜 리스트
 * @constructor
 */
const FindDate = (checkInDay: number[], mockData: IMonth[]) => {
  let checkIn = new Date(checkInDay[0], checkInDay[1], checkInDay[2]);
  for (let i = 0; i < mockData.length; i++) {
    for (let j = 0; j < mockData[i].day.length; j++) {
      let mDate = new Date(
        mockData[i].year,
        mockData[i].month,
        mockData[i].day[j]
      );
      if (mDate > checkIn) {
        return [mockData[i].year, mockData[i].month, mockData[i].day[j]];
      }
    }
  }
};

export interface CalendarModalProps {
  roomId?: number;
}

export interface IMonth {
  year: number;
  month: number;
  day: number[];
}

export interface IRoomBooking {
  date: string;
  isOrdered: boolean;
}

const CalendarModal = ({ roomId }: CalendarModalProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  let today = new Date();
  let nextMonthDate = new Date(today.setMonth(today.getMonth() + 1));
  let nextNextMonthDate = new Date(today.setMonth(today.getMonth() + 1));
  today.setMonth(today.getMonth() - 2);

  const [firstMonth, setFirstMonth] = useState<IMonth | ''>('');
  const [secondMonth, setSecondMonth] = useState<IMonth | ''>('');
  const [thirdMonth, setThirdMonth] = useState<IMonth | ''>('');

  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);

  useEffect(() => {
    if (roomId) {
      const data = getRoomDate(
        roomId,
        formatDate2([today.getFullYear(), today.getMonth() + 1, 1]),
        formatDate2([today.getFullYear(), today.getMonth() + 2, 0])
      );
      const data2 = getRoomDate(
        roomId,
        formatDate2([today.getFullYear(), today.getMonth() + 2, 1]),
        formatDate2([today.getFullYear(), today.getMonth() + 3, 0])
      );
      const data3 = getRoomDate(
        roomId,
        formatDate2([today.getFullYear(), today.getMonth() + 3, 1]),
        formatDate2([today.getFullYear(), today.getMonth() + 4, 0])
      );

      data.then((res) => {
        let arr: IMonth = {
          year: Number(res.data[0].date.substring(0, 10).split('-')[0]),
          month: Number(res.data[0].date.substring(0, 10).split('-')[1]),
          day: [],
        };
        res.data.map((el: IRoomBooking) => {
          if (el.isOrdered) {
            arr.day.push(Number(el.date.substring(0, 10).split('-')[2]));
          }
        });
        setFirstMonth(arr);
      });

      data2.then((res) => {
        let arr: IMonth = {
          year: Number(res.data[0].date.substring(0, 10).split('-')[0]),
          month: Number(res.data[0].date.substring(0, 10).split('-')[1]),
          day: [],
        };
        res.data.map((el: IRoomBooking) => {
          if (el.isOrdered) {
            arr.day.push(Number(el.date.substring(0, 10).split('-')[2]));
          }
        });
        setSecondMonth(arr);
      });

      data3.then((res) => {
        let arr: IMonth = {
          year: Number(res.data[0].date.substring(0, 10).split('-')[0]),
          month: Number(res.data[0].date.substring(0, 10).split('-')[1]),
          day: [],
        };
        res.data.map((el: IRoomBooking) => {
          if (el.isOrdered) {
            arr.day.push(Number(el.date.substring(0, 10).split('-')[2]));
          }
        });
        setThirdMonth(arr);
      });

      if (checkInDate !== undefined && checkOutDate === undefined) {
        if (firstMonth !== '' && secondMonth !== '' && thirdMonth !== '') {
          let d = FindDate(checkInDate, [firstMonth, secondMonth, thirdMonth]);
          dispatch(calendarAction.setDisableDate(d));
        }
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
      title="🗓 언제 떠날까요 "
      contentWidth={768}
    >
      <CalendarWrapper>
        <CalendarBox>
          <Calendar
            year={thisMonth.year}
            month={thisMonth.month + 1}
            roomId={roomId}
            disabled={firstMonth !== '' ? firstMonth.day : []}
          />
          <Calendar
            year={nextMonth.year}
            month={nextMonth.month + 1}
            roomId={roomId}
            disabled={secondMonth !== '' ? secondMonth.day : []}
          />
          <Calendar
            year={nextNextMonthDate.getFullYear()}
            month={nextNextMonthDate.getMonth() + 1}
            roomId={roomId}
            disabled={thirdMonth !== '' ? thirdMonth.day : []}
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
