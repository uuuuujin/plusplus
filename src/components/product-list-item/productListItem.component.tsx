import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsLoggedIn } from '../../store/modules/user/user.select';
import { likeCategorization } from '../../utils/likeCategorization';
import {
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
  productImageSrc: string;
  productTitle: string;
  minPrice: number;
  maxPrice: number;
  productRegion: string;
  productStayType: string;
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
    productTitle,
    minPrice,
    maxPrice,
    productRegion,
    productStayType,
    productImageSrc,
    event,
  } = props;

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLike = () => {
    if (!isLoggedIn) dispatch(modalAction.radioLoginModal());
  };

  const discounted_minprice = event && (100 - event.rate) * minPrice * 0.01;
  const discounted_maxprice = event && (100 - event.rate) * maxPrice * 0.01;

  return (
    <ItemContainer>
      <ProductImage src={productImageSrc}></ProductImage>
      <DescriptionContainer>
        <Top>
          <ProductTitle>{productTitle}</ProductTitle>
          <LikeIconContainer onClick={handleLike}>
            <AiOutlineHeart />
          </LikeIconContainer>
        </Top>

        <ProductDescription>
          <ProductInfo>
            <ProductInfoEle className="left">{productRegion}</ProductInfoEle>
            <ProductInfoEle>{productStayType}</ProductInfoEle>
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
  );
}
