import { InnerContainer } from '../../routes/mypage/mypage.style';
import WishListItem from '../wishlist-Item/wishlistitem.component';
import { TitleText } from './wishlist.style';

export default function WishList(): JSX.Element {
  return (
    <InnerContainer>
      <TitleText>찜 목록</TitleText>
      <WishListItem />
      {/*<WishListItem />*/}
      {/*<WishListItem />*/}
      {/*<WishListItem />*/}
    </InnerContainer>
  );
}
