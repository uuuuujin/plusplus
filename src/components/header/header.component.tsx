import { NavWrapper, Nav, Icons, Icon, Logo } from './header.style';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';
import MainModal from '../main-modal/mainModal.component';
import CompanyLogoImage from '../../assets/images/logologo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CompanyLogo() {
  return (
    <Link to="/">
      <Logo src={CompanyLogoImage} />
    </Link>
  );
}

export default function Header(): JSX.Element {
  const [isCalendarModalOpen, setCalendarModalOpen] = useState(false);
  const calendarModalHandler = () => {
    setCalendarModalOpen((e) => !e);
  };
  const [isMapModalOpen, setMapModalOpen] = useState(false);
  const mapModalHandler = () => {
    setMapModalOpen((e) => !e);
  };

  return (
    <NavWrapper>
      <Nav>
        <CompanyLogo></CompanyLogo>
        <Icons>
          <Icon onClick={calendarModalHandler}>
            <AiOutlineCalendar />
            <span>날짜</span>
          </Icon>
          <MainModal
            isOpen={isCalendarModalOpen}
            onClose={calendarModalHandler}
            title="언제 떠날까요?"
          >
            <div>달력 달력</div>
          </MainModal>
          <Icon onClick={mapModalHandler}>
            <BsMap />
            <span>지도</span>
          </Icon>
          <MainModal
            isOpen={isMapModalOpen}
            onClose={mapModalHandler}
            title="어디로 떠날까요?"
          >
            <div>input checkbox component 제작중 </div>
          </MainModal>
        </Icons>
      </Nav>
    </NavWrapper>
  );
}
