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
 * @constructor
 */
export const CompareDate = (
  year: number,
  month: number,
  day: number,
  today: Date,
  checkInDay?: Date,
  checkOutDay?: Date
) => {
  /* 체크인 날짜와 체크아웃 날짜가 지정되었을 때 */
  if (checkInDay !== undefined && checkOutDay !== undefined) {
    if (
      year === checkInDay.getFullYear() &&
      month === checkInDay.getMonth() + 1 &&
      day === checkInDay.getDate()
    ) {
      return 'startDay';
    } else if (
      year === checkOutDay.getFullYear() &&
      month === checkOutDay.getMonth() + 1 &&
      day === checkOutDay.getDate()
    ) {
      return 'endDay';
    } /* 로직 리펙토링 예정*/ else if (
      (checkInDay.getFullYear() <= year &&
        year <= checkOutDay.getFullYear() &&
        checkInDay.getMonth() + 1 <= month &&
        month <= checkOutDay.getMonth() + 1 &&
        checkInDay.getDate() <= day &&
        day <= checkOutDay.getDate()) ||
      (checkInDay.getFullYear() <= year &&
        year <= checkOutDay.getFullYear() &&
        checkInDay.getMonth() + 1 < month &&
        month < checkOutDay.getMonth() + 1) ||
      // 년도가 다르면 기간추가
      (checkInDay.getFullYear() < year && year < checkOutDay.getFullYear()) ||
      /* 체크인 날짜년도는 같은데 체크아웃 년도가 다를 때 처리 */
      // 체크인 년도는 같은데 checkout 년도가 다른경우
      (checkInDay.getFullYear() === year &&
        year < checkOutDay.getFullYear() &&
        month > checkInDay.getMonth() + 1) ||
      (checkInDay.getFullYear() === year &&
        year < checkOutDay.getFullYear() &&
        month === checkInDay.getMonth() + 1 &&
        day > checkInDay.getDate()) ||
      (checkInDay.getFullYear() < year &&
        year === checkOutDay.getFullYear() &&
        month < checkOutDay.getMonth() + 1) ||
      (checkInDay.getFullYear() < year &&
        year === checkOutDay.getFullYear() &&
        month === checkOutDay.getMonth() + 1 &&
        day <= checkOutDay.getDate()) ||
      /* 같은 년도 의 체크인 체크아웃 날짜 확인*/
      (checkInDay.getFullYear() === year &&
        year === checkOutDay.getFullYear() &&
        checkInDay.getMonth() + 1 === month &&
        checkOutDay.getMonth() + 1 > month &&
        day > checkInDay.getDate()) ||
      (checkInDay.getFullYear() === year &&
        year === checkOutDay.getFullYear() &&
        checkOutDay.getMonth() + 1 === month &&
        checkInDay.getMonth() + 1 < month &&
        day < checkOutDay.getDate())
    ) {
      return 'period';
    }
  } else if (checkInDay !== undefined && checkOutDay === undefined) {
    if (
      year === checkInDay.getFullYear() &&
      month === checkInDay.getMonth() + 1 &&
      day === checkInDay.getDate()
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
export const formatDate = (date: Date) => {
  let formatted_date =
    '( ' +
    date.getFullYear() +
    '.' +
    (date.getMonth() + 1) +
    '.' +
    date.getDate() +
    ' )';
  return formatted_date;
};
