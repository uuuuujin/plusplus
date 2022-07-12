import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

//icons
import { AiOutlineHome, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

const FooterStyle = styled.div`
  width: 100%;
  max-width: 768px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 60px;
  border-top: solid 1px;
  background-color: rgb(194, 220, 210);
`;

const FooterBox = styled(Link)`
  display: grid;
  justify-self: center;
  color: black;
  font-size: 2rem;
`;

// 이동 route 지정(redirect?) 필요
export default function Footer(): JSX.Element {
  return (
    <div>
      <FooterStyle>
        <FooterBox to={ROUTES.HOME.path}>
          <AiOutlineHome />
        </FooterBox>
        <FooterBox to={ROUTES.SEARCH.path}>
          <AiOutlineSearch />
        </FooterBox>
        <FooterBox to={ROUTES.MYPAGE.path}>
          <BsPerson />
        </FooterBox>
      </FooterStyle>
    </div>
  );
}
