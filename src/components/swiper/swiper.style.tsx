import styled from 'styled-components';

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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
  margin-top: 20px;
`;

export const NavigationButtonContainer = styled.div`
  width: 150px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
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
