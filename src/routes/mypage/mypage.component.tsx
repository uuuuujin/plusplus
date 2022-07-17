import Container from '../../components/container/container.component';
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md';
import { VscCalendar } from 'react-icons/vsc';
import { AiOutlineComment } from 'react-icons/ai';
import {
  AdvertiseImg,
  FillCalendar,
  FillComments,
  FillFavoriteIcon,
  FlexRow,
  HeaderText,
  ItemMenu,
  LoginIcon,
  ModifyButton,
  MypageContainer,
  UserIcon,
  UserInfo,
} from './mypage.style';
import WishList from '../../components/wishlist/wishlist.component';
import BookingListComponent from '../../components/booking-list/bookinglist.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import CalendarModal from '../../components/calendar-modal/calendarModal.component';
import { StyledContainer } from '../../components/payment/payment.component';
import { useState } from 'react';
import { TitleText } from '../../components/wishlist/wishlist.style';
import ReviewComponent from '../../components/review/review.component';

const KAKAOCOLOR = '#FEE500';

const MYPAGE_STATUS = {
  WISHLIST: 'wishlist',
  BOOKINGLIST: 'bookingList',
  REVIEW: 'review',
};

type MYPAGE_STATUS = typeof MYPAGE_STATUS[keyof typeof MYPAGE_STATUS];

type LoginProps = {
  color: string;
  text: string;
};

const renderComponent = (type: MYPAGE_STATUS) => {
  switch (type) {
    case MYPAGE_STATUS.BOOKINGLIST:
      return <BookingListComponent />;
      break;
    case MYPAGE_STATUS.WISHLIST:
      return <WishList />;
      break;
    case MYPAGE_STATUS.REVIEW:
      return <ReviewComponent />;
      break;
  }
};

/**
 *
 * @param color 배경색상,
 * @param text 로그인방식
 * @constructor
 */
const LoginIconBox = ({ color, text }: LoginProps) => {
  return (
    <LoginIcon color={color}>
      <span>{text}</span>
    </LoginIcon>
  );
};

export default function MyPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [mypageComponent, setMypageComponent] = useState<MYPAGE_STATUS>(
    MYPAGE_STATUS.WISHLIST
  );

  const handleCalendarModal = () => {
    dispatch(modalAction.setCalendarModal());
  };

  const handleOnClickMenu = (type: MYPAGE_STATUS) => {
    setMypageComponent(type);
  };

  return (
    <StyledContainer>
      <MypageContainer>
        <Header />
        <UserInfo>
          <HeaderText>MY PAGE</HeaderText>
          <UserIcon className={'override'} onClick={handleCalendarModal} />
          <FlexRow>
            <span>"OOO" 님 반가워요!</span>
            <LoginIconBox color={KAKAOCOLOR} text={'kakao'} />
            <ModifyButton>회원정보 수정</ModifyButton>
          </FlexRow>
        </UserInfo>

        <UserInfo>
          <AdvertiseImg src="https://yaimg.yanolja.com/v5/2022/07/05/18/62c4875e44a3a5.95392979.png" />
          <FlexRow>
            <ItemMenu onClick={() => handleOnClickMenu(MYPAGE_STATUS.WISHLIST)}>
              {mypageComponent === MYPAGE_STATUS.WISHLIST ? (
                <FillFavoriteIcon className={'icon'} />
              ) : (
                <MdOutlineFavoriteBorder className={'icon'} />
              )}
              <span>찜</span>
            </ItemMenu>
            <ItemMenu
              onClick={() => handleOnClickMenu(MYPAGE_STATUS.BOOKINGLIST)}
            >
              {mypageComponent === MYPAGE_STATUS.BOOKINGLIST ? (
                <FillCalendar className={'icon'} />
              ) : (
                <VscCalendar className={'icon'} />
              )}

              <span>예약리스트</span>
            </ItemMenu>
            <ItemMenu onClick={() => handleOnClickMenu(MYPAGE_STATUS.REVIEW)}>
              {mypageComponent === MYPAGE_STATUS.REVIEW ? (
                <FillComments className={'icon'} />
              ) : (
                <AiOutlineComment className={'icon'} />
              )}
              <span>나의 후기</span>
            </ItemMenu>
          </FlexRow>
          <AdvertiseImg src="https://yaimg.yanolja.com/v5/2022/01/17/13/61e5740f544f02.81195355.png" />
        </UserInfo>
        {renderComponent(mypageComponent)}
        <Footer />
      </MypageContainer>
    </StyledContainer>
  );
}
