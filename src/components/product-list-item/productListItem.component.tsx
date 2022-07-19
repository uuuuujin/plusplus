import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsLoggedIn } from '../../store/modules/user/user.select';
import { likeCategorization } from '../../utils/likeCategorization';
import {
  ItemContainer,
  ProductImage,
  Bottom,
  DescriptionContainer,
  ProductTitle,
  ProductInfo,
  LikeContainer,
  LikeIconContainer,
  ProductDescription,
  ProductInfoEle,
} from './productListItem.style';
import { AiOutlineHeart } from 'react-icons/ai';

interface ProductListItemProp {
  productImageSrc: string;
  productTitle: string;
  productCost: string;
  likeCount: number;
  productRegion: string;
  productStayType: string;
}

export default function ProductListItem(
  props: ProductListItemProp
): JSX.Element {
  const {
    productTitle,
    productCost,
    productRegion,
    productStayType,
    likeCount,
    productImageSrc,
  } = props;

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLike = () => {
    if (!isLoggedIn) dispatch(modalAction.radioLoginModal());
  };

  return (
    <ItemContainer>
      <ProductImage src={productImageSrc}></ProductImage>
      <Bottom>
        <DescriptionContainer>
          <ProductTitle>{productTitle}</ProductTitle>
          <ProductDescription>
            <ProductInfo>
              <ProductInfoEle className="left">{productRegion}</ProductInfoEle>
              <ProductInfoEle>{productStayType}</ProductInfoEle>
            </ProductInfo>
            <ProductInfoEle>{productCost}</ProductInfoEle>
          </ProductDescription>
        </DescriptionContainer>
        <LikeContainer>
          <LikeIconContainer onClick={handleLike}>
            <AiOutlineHeart />
          </LikeIconContainer>
          <span>{likeCategorization(likeCount)}</span>
        </LikeContainer>
      </Bottom>
    </ItemContainer>
  );
}
