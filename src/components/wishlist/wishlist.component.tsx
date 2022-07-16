import { InnerContainer } from '../../routes/mypage/mypage.style';
import WishListItem from '../wishlist-Item/wishlistitem.component';
import { CurrentStatistic, TitleText } from './wishlist.style';
import { Line } from '../payment/payment.style';

export interface RoomItem {
  roomIdx: number;
  stationIdx: number;
  name: string;
  image: string;
  content: string;
  price: number;
  roomCnt: number;
}

const mockData: RoomItem[] = [
  {
    roomIdx: 1,
    stationIdx: 1,
    name: '스테이보리',
    image:
      'http://images.stayfolio.com/system/pictures/images/000/102/357/display/278e1b5048400bac804b3647f00c3fc3738ce20e.jpg?1638171725',
    content: '제주도 여행을 즐겁게 해드릴게요!',
    price: 185000,
    roomCnt: 10,
  },
  {
    roomIdx: 2,
    stationIdx: 2,
    name: '아녹 101호',
    image:
      'https://images.prismic.io/stayfolio-production/2f47c371-ce00-486e-b456-224ce879e29c_%E1%84%8B%E1%85%A1%E1%84%82%E1%85%A9%E1%86%A8.jpg?auto=compress,format&rect=0,0,2304,650&w=2304&h=650',
    content: '혼행의 즐거움 저희 앤디앤라라홈과 함께 해보세요!',
    price: 20000,
    roomCnt: 1,
  },
];

export default function WishList(): JSX.Element {
  return (
    <InnerContainer>
      <TitleText>찜 목록</TitleText>
      <Line />
      {mockData.map((item, index) => {
        return (
          <>
            <WishListItem item={item} key={index} />
            <CurrentStatistic>
              &lt; {index + 1}/{mockData.length} &gt;
            </CurrentStatistic>
          </>
        );
      })}
    </InnerContainer>
  );
}
