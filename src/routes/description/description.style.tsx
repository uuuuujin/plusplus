import styled from 'styled-components';
import theme from '../../style/theme';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  & > svg {
    cursor: pointer;
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    & > svg {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  & > img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

export const SubTitle = styled.div`
  font-size: 25px;
  text-align: center;
  margin: 50px 0 25px;
  font-weight: 600;

  &.mainTitle {
    margin: 50px 0 10px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Address = styled.div`
  font-size: 13px;
  text-align: center;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 40px;
    background: #000;
    margin: 25px auto 0;
  }
`;

export const DescriptionText = styled.div`
  padding: 0 40px;
  margin: 25px auto 0;
  font-size: 16px;
  line-height: 2.2;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0 20px;
  }
`;

export const ContentsContainer = styled.div`
  margin: 30px 40px 0 40px;
  border-top: 1px solid ${theme.colors.border};
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin: 30px 20px 0 20px;
  }
`;

export const Room = styled.div`
  border-radius: 20px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
  margin-bottom: 50px;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

export const RoomDescription = styled.div`
  padding: 30px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const RoomTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const RoomCost = styled.div`
  font-size: 14px;
  padding-left: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
