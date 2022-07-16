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
import { RoomItem } from '../wishlist/wishlist.component';
import { styled } from '@mui/material';
import { LikeIconContainer } from '../product-list-item/productListItem.style';
import { AiFillHeart } from 'react-icons/ai';
import WishListModal from '../like-mange-modal/wishListModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsWishManageModalOpen } from '../../store/modules/modal/modal.select';

export interface WishListItemProps {
  item: RoomItem;
}

export const LikeIconWrap = styled(LikeIconContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  & > span {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 500;
  }
  & > svg {
    color: rgb(237, 73, 86);
    fill: rgb(237, 73, 86);
    width: 24px;
    height: 24px;
  }
`;

export default function WishListItem({ item }: WishListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isWishManageModalOpen = useAppSelector(selectIsWishManageModalOpen);

  const onClickHeart = () => {
    dispatch(modalAction.radioWishManageModal());
  };
  return (
    <ItemContainer>
      <ItemBox>
        <ItemInfo>
          <LikeIconWrap>
            <AiFillHeart onClick={onClickHeart} />
            <span>15</span>
          </LikeIconWrap>
          <div>
            {item.name}
            {/*<StarIcon />*/}
            {/*<span>4.4</span>*/}
          </div>
          <LocationBox>
            <MdOutlineLocationOn />
            <span>제주도 서귀포시 중문관광로72번길 35</span>
          </LocationBox>
          <RoomInfoBox>{item.content}</RoomInfoBox>
          <PriceInfoBox>
            <NormalPrice>{item.price}</NormalPrice>
            <div>
              <SaleRate>25%</SaleRate>
              <SalePrice>75,000원</SalePrice>
            </div>
          </PriceInfoBox>
        </ItemInfo>
        <ItemImgBox src={item.image} />
      </ItemBox>
      <RegisterButton>예약하기</RegisterButton>
      {isWishManageModalOpen && <WishListModal item={item} />}
    </ItemContainer>
  );
}
