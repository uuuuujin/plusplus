import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { Link } from 'react-router-dom';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsLoggedIn } from '../../store/modules/user/user.select';
import { ROUTES } from '../../routes/routes';
import {
  Container,
  StayLink,
  ItemContainer,
  ProductImage,
  Top,
  DescriptionContainer,
  ProductTitle,
  ProductInfo,
  LikeIconContainer,
  ProductDescription,
  ProductInfoEle,
  NormalCost,
  DiscountedCostContainer,
  DiscountRate,
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
  event?: {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    rate: number;
  };
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
  } = props;

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLike = () => {
    if (!isLoggedIn) dispatch(modalAction.radioLoginModal());
  };

  const discounted_minprice = event && (100 - event.rate) * minPrice * 0.01;
  const discounted_maxprice = event && (100 - event.rate) * maxPrice * 0.01;

  return (
    <Container>
      <LikeIconContainer onClick={handleLike}>
        <AiOutlineHeart />
      </LikeIconContainer>
      <StayLink to={`${ROUTES.STAY.link}/${stayId}`}>
        <ItemContainer>
          <ProductImage src={stayImageSrc}></ProductImage>
          <DescriptionContainer>
            <Top>
              <ProductTitle>{stayTitle}</ProductTitle>
              {/* <LikeIconContainer onClick={handleLike}>
                <AiOutlineHeart />
              </LikeIconContainer> */}
            </Top>

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
          </DescriptionContainer>
        </ItemContainer>
      </StayLink>
    </Container>
  );
}
