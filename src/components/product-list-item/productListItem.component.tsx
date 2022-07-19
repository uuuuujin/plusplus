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
          <LikeIconContainer>
            <AiOutlineHeart />
          </LikeIconContainer>
          <span>{likeCategorization(likeCount)}</span>
        </LikeContainer>
      </Bottom>
    </ItemContainer>
  );
}
