import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  background-color: #fff;
  margin: 0 auto;
`;

export const ReservationButton = styled.button`
  background-color: #94b49f;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  padding: 10px;
`;

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  overflow-y: auto;

  /* 스크롤 바 안보이게 처리 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  position: relative;
  max-height: calc(100vh - 200px);

  > div:first-child {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
  }
`;
