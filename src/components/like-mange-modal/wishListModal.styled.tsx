import styled from 'styled-components';
import theme from '../../style/theme';

export const ModalContainer = styled.div`
  margin: 40px 0 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  margin-bottom: 40px;

  & > div {
    font-size: 22px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${theme.colors.main};
  border: none;
  padding: 15px;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${theme.colors.mainButtonHover};
  }

  &.no {
    background-color: #fff;
    border: 1px solid ${theme.colors.border};
    color: #000;
    margin-right: 60px;

    &:hover {
      background-color: ${theme.colors.buttonHover};
    }
  }
`;
