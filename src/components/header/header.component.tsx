import { Nav, Icons, Icon, Logo } from './header.style';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';
import MainModal from '../main-modal/mainModal.component';
import CompanyLogoImage from '../../assets/images/logologo.png';
type Props = {
  iconType: string;
  iconName: string;
};
function CompanyLogo() {
  return <Logo src={CompanyLogoImage} />;
}

export default function Header(): JSX.Element {
  return (
    <Nav>
      <CompanyLogo></CompanyLogo>
      <Icons>
        <Icon>
          <AiOutlineCalendar />
          <span>날짜</span>
        </Icon>
        <Icon>
          <BsMap />
          <span>지도</span>
        </Icon>
      </Icons>
    </Nav>
  );
}
