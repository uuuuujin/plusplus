import { useEffect } from 'react';
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
import { useLocation } from 'react-router-dom';
import { navigatorAction } from '../../store/modules/navigator/navigator.slice';
import { StyledContainer } from '../../components/payment/payment.component';
import { useState } from 'react';
import ReviewComponent from '../../components/review/review.component';
import { selectAccessToken } from '../../store/modules/user/user.select';
import { getUser, getUserLike, InitialData, userData } from '../../api/mypage';
import { selectIsUserModifyModalOpen } from '../../store/modules/modal/modal.select';
import UserModifyModal from '../../components/user-modify-modal/userModifyModal.component';
import { modalAction } from '../../store/modules/modal/modal.slice';

const KAKAOCOLOR = '#FEE500';
const NAVERCOLOR = '#2DB400';

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

/**
 *
 * @param type 컴퍼넌트 종류에 따른 분류
 */
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
  const location = useLocation();
  const accessToken = useAppSelector(selectAccessToken);
  const isUserModifyModalOpen = useAppSelector(selectIsUserModifyModalOpen);

  const [userInfo, setUserInfo] = useState<userData>(InitialData);

  useEffect(() => {
    const data2 = getUser(accessToken);
    data2.then((res) => setUserInfo(res.data.user));
  }, []);

  useEffect(() => {
    dispatch(navigatorAction.setCurrnetPage(location.pathname.slice(1)));
  }, [dispatch, location]);

  const [mypageComponent, setMypageComponent] = useState<MYPAGE_STATUS>(
    MYPAGE_STATUS.WISHLIST
  );

  const handleOnClickMenu = (type: MYPAGE_STATUS) => {
    setMypageComponent(type);
  };

  const handleOnClickModifyButton = () => {
    dispatch(modalAction.radioUserModifyModal());
  };

  return (
    <StyledContainer>
      {userInfo && (
        <MypageContainer>
          <Header />
          <UserInfo>
            <HeaderText>MyPAGE</HeaderText>
            <UserIcon src={userInfo.profile} />
            <FlexRow>
              <span>
                {userInfo.nickName}({userInfo.phoneNumber}) 반가워요!
              </span>
              <LoginIconBox
                color={userInfo.oauthName === 'NAVER' ? NAVERCOLOR : KAKAOCOLOR}
                text={userInfo.oauthName === 'NAVER' ? 'NAVER' : 'KAKAO'}
              />
              <ModifyButton onClick={handleOnClickModifyButton}>
                회원정보 수정
              </ModifyButton>
            </FlexRow>
          </UserInfo>

          <UserInfo>
            <AdvertiseImg src="https://yaimg.yanolja.com/v5/2022/07/05/18/62c4875e44a3a5.95392979.png" />
            <FlexRow>
              <ItemMenu
                onClick={() => handleOnClickMenu(MYPAGE_STATUS.WISHLIST)}
              >
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
          {isUserModifyModalOpen && <UserModifyModal info={userInfo} />}
        </MypageContainer>
      )}
    </StyledContainer>
  );
}
