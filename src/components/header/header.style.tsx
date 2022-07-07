import styled from 'styled-components';
import theme from '../../style/theme';
export const NavWrapper = styled.div`
  widht: 100vw;
`;
export const Nav = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  // max-width: 768px;
  width: 768px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  height: 76px;
  border: 1px solid black;
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
  width: 50px;
  height: 45px;
  border: none;
  border-radius: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    cursor: pointer;
  }

  & > * {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin: auto;
  }
  & > span {
    height: 20px;
    margin-top: 5px;
    text-align: center;
    justify-content: center;
    font-size: 0.7rem;
    color: ${theme.colors.main};
    font-weight: 700;
  }
`;
