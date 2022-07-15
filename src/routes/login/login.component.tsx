import Header from '../../components/header/header.component';
import Container from '../../components/container/container.component';
import {
  KakaoLoginButton,
  LoginPageContainer,
  Wrapper,
  Title,
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
          <KakaoLoginButton
            src="kakao_login_large_wide.png"
            alt="카카오로 시작하기 버튼"
          />
        </Wrapper>
      </LoginPageContainer>
    </Container>
  );
}
