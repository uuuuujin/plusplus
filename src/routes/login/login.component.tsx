import axios from 'axios';
import Header from '../../components/header/header.component';
import Container from '../../components/container/container.component';
import {
  LoginButton,
  LoginPageContainer,
  Wrapper,
  Title,
  NaverLoginButton,
} from './login.style';

export default function LoginPage(): JSX.Element {
  return (
    <Container>
      <LoginPageContainer>
        <Header />
        <Wrapper>
          <Title>
            <span>로그인</span>
          </Title>
          <a href={`${process.env.REACT_APP_API_URL}/users/auth/kakao`}>
            <LoginButton
              src="kakao_login_large_wide.png"
              alt="카카오로 시작하기 버튼"
            />
          </a>

          <a href={`${process.env.REACT_APP_API_URL}/users/auth/naver`}>
            <NaverLoginButton>
              <img src="naver_icon.png" alt="네이버 아이콘" />
              <div>네이버로 시작하기</div>
            </NaverLoginButton>
          </a>
        </Wrapper>
      </LoginPageContainer>
    </Container>
  );
}
