import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import {
  selectIsLoggedIn,
  selectUserId,
  selectAccessToken,
} from '../../store/modules/user/user.select';
import { fetchLike } from '../../api/user';
import { deleteWishItem } from '../../api/wishlist';

import { ROUTES } from '../../routes/routes';
import {
  Container,
  StayLink,
  ProductImage,
  Bottom,
  ProductTitle,
  ProductInfo,
  LikeIconContainer,
  ProductDescription,
  ProductInfoEle,
  NormalCost,
  DiscountedCostContainer,
  DiscountRate,
  FilledHeart,
} from './productListItem.style';
import { AiOutlineHeart } from 'react-icons/ai';

interface ProductListItemProp {
  stayId: number;
  stayImageSrc: string;
  stayTitle: string;
  minPrice: number;
  maxPrice: number;
  stayRegion: string;
  StayType: string;
  event: {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    rate: number;
  };
  likes: [
    {
      id: number;
      station_id: number;
      user_id: number;
    }
  ];
}

export default function ProductListItem(
  props: ProductListItemProp
): JSX.Element {
  const dispatch = useAppDispatch();

  const {
    stayId,
    stayImageSrc,
    stayTitle,
    minPrice,
    maxPrice,
    stayRegion,
    StayType,
    event,
    likes,
  } = props;

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userId = useAppSelector(selectUserId);
  const userToken = useAppSelector(selectAccessToken);

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLoggedIn) dispatch(modalAction.radioLoginModal());
    else {
      if (isLiked) deleteWishItem(userToken, stayId);
      else fetchLike({ token: userToken, stationId: stayId });

      setIsLiked((v) => !v);
    }
  };

  const discounted_minprice = event && (100 - event.rate) * minPrice * 0.01;
  const discounted_maxprice = event && (100 - event.rate) * maxPrice * 0.01;

  useEffect(() => {
    const checkIsLiked = () => {
      const userIdArr = likes.map((el) => el.user_id);
      const result = userIdArr.some((el) => el === userId);
      setIsLiked(result);
    };
    checkIsLiked();
  }, [likes, userId]);

  return (
    <Container>
      <div>
        <StayLink to={`${ROUTES.STAY.link}/${stayId}`}>
          <ProductImage src={stayImageSrc}></ProductImage>
        </StayLink>
        <Bottom>
          <StayLink to={`${ROUTES.STAY.link}/${stayId}`}>
            <ProductTitle>{stayTitle}</ProductTitle>
            <ProductDescription>
              <ProductInfo>
                <ProductInfoEle className="left">{stayRegion}</ProductInfoEle>
                <ProductInfoEle>{StayType}</ProductInfoEle>
              </ProductInfo>

              <NormalCost
                className={event && 'discount'}
              >{`₩${minPrice.toLocaleString()} ~ ₩${maxPrice.toLocaleString()}`}</NormalCost>

              {event && (
                <DiscountedCostContainer>
                  <DiscountRate>{event?.rate}%</DiscountRate>
                  <span>
                    {`₩${discounted_minprice?.toLocaleString()} ~ ₩${discounted_maxprice?.toLocaleString()}`}
                  </span>
                </DiscountedCostContainer>
              )}
            </ProductDescription>
          </StayLink>
          <LikeIconContainer onClick={handleLike}>
            {isLiked ? <FilledHeart /> : <AiOutlineHeart />}
          </LikeIconContainer>
        </Bottom>
      </div>
    </Container>
  );
}
