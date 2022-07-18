import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  height: calc(100vh - 76px);
  box-sizing: border-box;
  position: relative;
`;

export const LoginButton = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 360px;
  margin: 0 auto;
  padding-top: 25%;

  & > a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 70px;

  & > span {
    display: inline-block;
    border-bottom: 2px solid black;
    padding: 5px 10px;
  }
`;

export const NaverLoginButton = styled.div`
  width: 100%;
  height: 54px;
  background-color: #03c75a;
  border-radius: 7px;
  align-items: center;
  display: flex;
  margin: 10px 0;
  cursor: pointer;

  & > img {
    height: 100%;
  }

  & > div {
    color: #fff;
    font-size: 18px;
    width: 77%;
    text-align: center;
    padding-top: 3px;
  }
`;
