import {IMonth} from "../components/calendar-modal/calendarModal.component";

/**
 * 해당 년도가 윤년인지 판단해주는 유틸
 * @param year
 */
function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 해당 년,월에 해당하는 시작 요일과, 총 날짜를 계산해주는 유틸
 * @param year
 * @param month
 */
export const getCalendar = (year: number, month: number) => {
  const date = new Date(year, month - 1);
  const startDay = date.getDay();
  let totalOfDay;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      totalOfDay = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      totalOfDay = 30;
      break;
    case 2:
      isLeapYear(year) ? (totalOfDay = 29) : (totalOfDay = 28);
      break;
  }
  return { startDay, totalOfDay };
};

/**
 * 달력 생성시 날짜에 따른 className 값 지정
 * @param year 년도
 * @param month 월
 * @param day 일
 * @param today 오늘 날짜
 * @param soldDay
 * @constructor
 */
export const CompareDate = (
  year: number,
  month: number,
  day: number,
  today: Date,
  soldDay: [boolean, boolean, number[] | undefined],
  checkInDay?: number[],
  checkOutDay?: number[]
) => {
  /* 룸 데이터 입력이 있는 경우
   * 예약이 방은 막는다
   * 클릭이 된 시점부터 예약가능한 날짜의 방만을 보여준다.
   */
  if (soldDay[0]) {
    // 체크 아웃만 가능 한 날 조건 탐색
    if (soldDay[1]) {
      if(checkInDay !== undefined && checkOutDay !== undefined && soldDay[2]){
        if(checkOutDay[0] === year && checkOutDay[1] === month && checkOutDay[2] === day){
          return 'endDayOnly'
        }
      }

      if(checkInDay !== undefined && soldDay[2] && checkOutDay === undefined){
        if(soldDay[2][0] === year && soldDay[2][1] === month && soldDay[2][2] === day){
          return 'date_box'
        }
      }
      return 'disable-room';
    }
    if(checkInDay !== undefined){
      let diffDay3 = new Date(
          checkInDay[0],
          checkInDay[1] - 1,
          checkInDay[2]
      ); // 체크인 날짜

      let diffDay = new Date(year, month - 1, day); // 오늘
      // 체크인 날짜보다 전 데이터
      if(diffDay < diffDay3){
        return 'disable';
      }

      if(soldDay[2] !== undefined){
        let diffDay2 = new Date(soldDay[2][0], soldDay[2][1] - 1, soldDay[2][2]); //가장 빠른 체크아웃 데이터
        // 가장 빠른 불가능한 예약 이후로의 예약은 다 막는다.
        if (diffDay > diffDay2) {
          return 'disable-room';
        }
      }
    }
  }
  /* 체크인 날짜와 체크아웃 날짜가 지정되었을 때 */
  if (checkInDay !== undefined && checkOutDay !== undefined) {
    if (
      year === checkInDay[0] &&
      month === checkInDay[1] &&
      day === checkInDay[2]
    ) {
      return 'startDay';
    } else if (
      year === checkOutDay[0] &&
      month === checkOutDay[1] &&
      day === checkOutDay[2]
    ) {
      return 'endDay';
    } /* 로직 리펙토링 예정*/ else if (
      (checkInDay[0] <= year &&
        year <= checkOutDay[0] &&
        checkInDay[1] <= month &&
        month <= checkOutDay[1] &&
        checkInDay[2] <= day &&
        day <= checkOutDay[2]) ||
      (checkInDay[0] <= year &&
        year <= checkOutDay[0] &&
        checkInDay[1] < month &&
        month < checkOutDay[1]) ||
      // 년도가 다르면 기간추가
      (checkInDay[0] < year && year < checkOutDay[0]) ||
      /* 체크인 날짜년도는 같은데 체크아웃 년도가 다를 때 처리 */
      // 체크인 년도는 같은데 checkout 년도가 다른경우
      (checkInDay[0] === year &&
        year < checkOutDay[0] &&
        month > checkInDay[1]) ||
      (checkInDay[0] === year &&
        year < checkOutDay[0] &&
        month === checkInDay[1] &&
        day > checkInDay[2]) ||
      (checkInDay[0] < year &&
        year === checkOutDay[0] &&
        month < checkOutDay[1]) ||
      (checkInDay[0] < year &&
        year === checkOutDay[0] &&
        month === checkOutDay[1] &&
        day <= checkOutDay[2]) ||
      /* 같은 년도 의 체크인 체크아웃 날짜 확인*/
      (checkInDay[0] === year &&
        year === checkOutDay[0] &&
        checkInDay[1] === month &&
        checkOutDay[1] > month &&
        day > checkInDay[2]) ||
      (checkInDay[0] === year &&
        year === checkOutDay[0] &&
        checkOutDay[1] === month &&
        checkInDay[1] < month &&
        day < checkOutDay[2])
    ) {
      return 'period';
    }
  } else if (checkInDay !== undefined && checkOutDay === undefined) {
    if (
      year === checkInDay[0] &&
      month === checkInDay[1] &&
      day === checkInDay[2]
    ) {
      return 'onlyStartDay';
    }
  }

  if (
    today.getFullYear() === year &&
    today.getMonth() + 1 === month &&
    today.getDate() === day
  ) {
    return 'today';
  }
  if (today.getFullYear() > year) {
    return 'disable';
  } else if (today.getFullYear() < year) {
    return 'date_box';
  } else if (today.getMonth() + 1 > month) {
    return 'disable';
  } else if (today.getMonth() + 1 < month) {
    return 'date_box';
  } else if (today.getDate() > day) {
    return 'disable';
  } else {
    return 'date_box';
  }
};

/**
 * ( yyyy.mm.dd ) 형식으로 반환
 * @param date
 */
export const formatDate = (date: number[]) => {
  const d = new Date(date[0], date[1] - 1, date[2]);
  const days = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
  const day = days[d.getDay()];
  let formatted_date = ` ${date[0]} - ${date[1] < 10 ? '0' + date[1] : date[1]}
  - ${date[2] < 10 ? '0' + date[2] : date[2]} ${day}  `;
  return formatted_date;
};

/**
 *
 * @param date [year, month, day]
 */
export const formatDateInSearch = (date: number[]) => {
  let formatted_date = `${date[0]}-${date[1] < 10 ? '0' + date[1] : date[1]}-${
    date[2] < 10 ? '0' + date[2] : date[2]
  }`;
  return formatted_date;
};

export const formatDate2 = (_date: number[]) => {
  const date = new Date(_date[0], _date[1], _date[2]);
  let formatted_date = `${date.getFullYear()}-${
    date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
  }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;

  return formatted_date;
};


/**
 * 체크인 날짜 이후의 예약 불가능한 날짜 값을 확인합니다.
 * @param checkInDay 체크인 날짜
 * @param mockData 예약이 된 날짜 리스트
 * @constructor
 */
export const FindDate = (checkInDay: number[], mockData: IMonth[]) => {
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

export const getDateDiff = (d1:number[], d2:number[]) => {
  const date1 = new Date(d1[0],d1[1],d1[2])
  const date2 = new Date(d2[0],d2[1],d2[2])

  const diffDate = date1.getTime() - date2.getTime()
  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
}