import styled from 'styled-components';
import theme from '../../style/theme';

export const ItemContainer = styled.div`
  width: 383px;
  display: inline-block;
  padding: 0 18px;
  box-sizing: border-box;
  margin-bottom: 40px;

  @media (max-width: 780px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;

  @media (max-width: 780px) {
    height: auto;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 780px) {
    margin-top: 5px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 10px;
  width: 85%;
`;

export const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 7px;
`;

export const ProductCost = styled.div`
  font-size: 14px;
`;

export const ProductDescription = styled.div`
  margin-bottom: 5px;
`;

export const ProductInfo = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const ProductInfoEle = styled.span`
  font-size: 13px;
  display: flex;
  align-items: center;

  &.left:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background: ${theme.colors.border};
    margin: 0 7px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3px;

  & > span {
    display: inline-block;
    font-size: 12px;
    text-align: center;
  }
`;

export const LikeIconContainer = styled.div`
  cursor: pointer;

  & > svg {
    width: 26px;
    height: 26px;
  }
`;
