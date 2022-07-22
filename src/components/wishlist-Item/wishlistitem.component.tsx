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
import { RoomItem } from '../../api/wishlist';
import { styled } from '@mui/material';
import { LikeIconContainer } from '../product-list-item/productListItem.style';
import { AiFillHeart } from 'react-icons/ai';
import WishListModal from '../like-mange-modal/wishListModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { likeCategorization } from '../../utils/likeCategorization';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface WishListItemProps {
  item: RoomItem;
  setList: React.Dispatch<React.SetStateAction<[] | RoomItem[]>>;
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

export default function WishListItem({
  item,
  setList,
}: WishListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(`/stay/${item.station_id}`);
  };

  const [isWishManageModalOpen, SetIsWishManageModalOpen] = useState(false);

  const onClickHeart = () => {
    SetIsWishManageModalOpen(!isWishManageModalOpen);
  };
  return (
    <ItemContainer onClick={onClickButton}>
      <ItemBox>
        <ItemInfo>
          <LikeIconWrap>
            <AiFillHeart onClick={onClickHeart} />
            <span>{likeCategorization(15)}</span>
          </LikeIconWrap>
          <div>{item.station_name}</div>
          <LocationBox>
            <MdOutlineLocationOn />
            <span>제주도 서귀포시 중문관광로72번길 35</span>
          </LocationBox>
          <RoomInfoBox>{item.station_content}</RoomInfoBox>
          <PriceInfoBox>
            <NormalPrice>
              {item.station_minprice} ~ {item.station_maxprice}
            </NormalPrice>
            <div>
              <SaleRate>25%</SaleRate>
              <SalePrice>
                {item.station_minprice * 0.75}원 ~{' '}
                {item.station_maxprice * 0.75}원
              </SalePrice>
            </div>
          </PriceInfoBox>
        </ItemInfo>
        <ItemImgBox src={item.station_image} />
      </ItemBox>
      {isWishManageModalOpen && (
        <WishListModal item={item} setList={setList} setModal={onClickHeart} />
      )}
    </ItemContainer>
  );
}
