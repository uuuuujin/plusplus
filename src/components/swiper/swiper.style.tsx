import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

export const SwiperContainer = styled(Swiper)`
  z-index: 0;
  padding: 0 20px;
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const LinkEvent = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const SlideImage = styled.img`
  width: 100%;

  @media (min-width: 480 and max-width: 768px) {
    width: 90%;
  }
`;

export const SlideTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 10px;
`;

export const NavigationButtonContainer = styled.div<{ visible: boolean }>`
  width: 150px;
  margin: 10px auto 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavigationButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  & > svg {
    width: 25px;
    height: 25px;
  }
`;
