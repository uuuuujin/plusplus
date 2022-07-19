import styled from 'styled-components';
import theme from '../../style/theme';

export const ModalContainer = styled.div`
  margin: 40px 0 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-bottom: 50px;
  font-weight: 500;
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

  &.no {
    background-color: #fff;
    border: 1px solid ${theme.colors.border};
    color: #000;
    margin-left: 30px;
  }
`;
