import styled from 'styled-components';

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
  color: gray;
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3px;

  & > span {
    display: inline-block;
    font-size: 12px;
    // margin-top: 5px;
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
