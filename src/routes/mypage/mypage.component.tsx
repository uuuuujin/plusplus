import Container from '../../components/container/container.component';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { VscCalendar } from 'react-icons/vsc';
import { AiOutlineComment } from 'react-icons/ai';
import {
  AdvertiseImg,
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

const KAKAOCOLOR = '#FEE500';

type LoginProps = {
  color: string;
  text: string;
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
  return (
    <Container>
      <MypageContainer>
        <UserInfo>
          <HeaderText>MY PAGE</HeaderText>
          <UserIcon className={'override'} />
          <FlexRow>
            <span>"OOO" 님 반가워요!</span>
            <LoginIconBox color={KAKAOCOLOR} text={'kakao'} />
            <ModifyButton>회원정보 수정</ModifyButton>
          </FlexRow>
        </UserInfo>
        <AdvertiseImg src="https://yaimg.yanolja.com/v5/2022/07/05/18/62c4875e44a3a5.95392979.png" />
        <UserInfo>
          <FlexRow>
            <ItemMenu>
              <MdOutlineFavoriteBorder className={'icon'} />
              <span>찜</span>
            </ItemMenu>
            <ItemMenu>
              <VscCalendar className={'icon'} />
              <span>예약리스트</span>
            </ItemMenu>
            <ItemMenu>
              <AiOutlineComment className={'icon'} />
              <span>나의 후기</span>
            </ItemMenu>
          </FlexRow>
        </UserInfo>
        <AdvertiseImg src="https://yaimg.yanolja.com/v5/2022/01/17/13/61e5740f544f02.81195355.png" />
        <WishList />
      </MypageContainer>
    </Container>
  );
}
