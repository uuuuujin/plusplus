import styled from 'styled-components';
import { BiStar } from 'react-icons/bi';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);

  margin: 10px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const ItemImgBox = styled.img`
  width: 50%;
  height: 250px;
  object-fit: cover;
`;

export const StarIcon = styled(BiStar)`
  color: yellow;
`;

export const ItemBox = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 10px 0 10px;

  width: 50%;
  height: 250px;
`;

export const RoomInfoBox = styled.div`
  font-size: 14px;
  padding: 10px;
  height: 40%;
`;

export const PriceInfoBox = styled.div`
  text-align: right;
  padding: 10px;
`;

export const NormalPrice = styled.span`
  text-decoration: line-through;
  font-size: 14px;
  color: #919191;
`;

export const SalePrice = styled.span`
  font-size: 18px;
`;

export const SaleRate = styled.span`
  color: red;
  font-size: 18px;
  margin-right: 5px;
`;

export const RegisterButton = styled.button`
  background-color: #94b49f;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  padding: 10px;
`;

export const LocationBox = styled.div`
  display: flex;
  font-size: 12px;
  margin-bottom: 20px;
`;
