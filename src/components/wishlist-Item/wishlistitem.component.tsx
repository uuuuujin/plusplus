import { MdOutlineLocationOn } from 'react-icons/md';
import {
  ItemBox,
  ItemContainer,
  ItemImgBox,
  ItemInfo,
  LocationBox,
  NormalPrice,
  PriceInfoBox,
  RegisterButton,
  RoomInfoBox,
  SalePrice,
  SaleRate,
  StarIcon,
} from './wishlitsitem.style';

export default function WishListItem(): JSX.Element {
  return (
    <ItemContainer>
      <ItemBox>
        <ItemInfo>
          <div>
            스테이 보리
            <StarIcon />
            <span>4.4</span>
          </div>
          <LocationBox>
            <MdOutlineLocationOn />
            <span>제주도 서귀포시 중문관광로72번길 35</span>
          </LocationBox>
          <RoomInfoBox>
            김치치즈 탕수육김치치즈 탕수육김치치즈 탕수육김치치즈 탕수육김치치즈
            탕수육김치치즈 탕수육김치치즈 탕수육김치치즈 탕수육김치치즈
            탕수육김치치즈 탕수육김치치즈 탕수육
          </RoomInfoBox>
          <PriceInfoBox>
            <NormalPrice>150,000원</NormalPrice>
            <div>
              <SaleRate>25%</SaleRate>
              <SalePrice>75,000원</SalePrice>
            </div>
          </PriceInfoBox>
        </ItemInfo>
        <ItemImgBox src="http://images.stayfolio.com/system/pictures/images/000/102/357/display/278e1b5048400bac804b3647f00c3fc3738ce20e.jpg?1638171725" />
      </ItemBox>
      <RegisterButton>예약하기</RegisterButton>
    </ItemContainer>
  );
}
