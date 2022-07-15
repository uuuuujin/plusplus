import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../style/theme';

export const FooterStyle = styled.div`
  width: 100%;
  max-width: 768px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 60px;
  border-top: 1px solid ${theme.colors.border};
  background-color: #fff;
`;

export const FooterBox = styled(Link)`
  display: grid;
  justify-self: center;
  color: black;
  font-size: 2rem;

  & > * {
    color: ${theme.colors.main};
  }
`;
