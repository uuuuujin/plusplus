import { likeCategorization } from '../../utils/likeCategorization';
import {
  ItemContainer,
  ProductImage,
  Bottom,
  DescriptionContainer,
  ProductTitle,
  ProductCost,
  LikeContainer,
  LikeIconContainer,
} from './productListItem.style';
import { AiOutlineHeart } from 'react-icons/ai';

interface ProductListItemProp {
  productImageSrc: string;
  productTitle: string;
  productCost: string;
  likeCount: number;
}

export default function ProductListItem(
  props: ProductListItemProp
): JSX.Element {
  const { productTitle, productCost, likeCount, productImageSrc } = props;

  return (
    <ItemContainer>
      <ProductImage src={productImageSrc}></ProductImage>
      <Bottom>
        <DescriptionContainer>
          <ProductTitle>{productTitle}</ProductTitle>
          <ProductCost>{productCost}</ProductCost>
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
