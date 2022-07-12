import styled from 'styled-components';
import theme from '../../style/theme';
export const NavWrapper = styled.div`
  widht: 100vw;
`;
export const Nav = styled.div`
  background: rgb(194, 220, 210);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  max-width: 768px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin: 0px;
  height: 76px;
`;
export const Logo = styled.img`
  width: 100px;
  height: 45px;
`;
export const Icons = styled.div`
  // background: green;
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

  &:hover {
    cursor: pointer;
  }

  & > * {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    margin: auto;
  }
`;
