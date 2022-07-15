import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  height: calc(100vh - 76px);
  box-sizing: border-box;
  position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
`;

export const KakaoLoginButton = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 360px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, 100%);
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
