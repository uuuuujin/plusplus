import styled from 'styled-components';
import theme from '../../style/theme';
import { Link } from 'react-router-dom';
export const NavWrapper = styled.div`
  widht: 100vw;
`;
export const Nav = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 2;
  max-width: 768px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin: 0px;
  height: 76px;
  border-bottom: 1px solid ${theme.colors.border};
`;
export const LogoLink = styled(Link)`
  width: 50px;
  height: 50px;
`;
export const Logo = styled.img`
  width: 100%;
`;
export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Icon = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;

  & > * {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    margin: auto;
    color: ${theme.colors.main};
  }

  & > *.hover {
    display: none;
  }

  &:hover {
    & > *.normal {
      display: none;
    }

    & > *.hover {
      display: block;
    }
  }
`;
