import { NavWrapper, Nav, Icons, Icon, Logo } from './header.style';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/index.hook';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDestinationModal from '../headerDestinationModal/headerDestinationModal.component';

import { modalAction } from '../../store/modules/modal/modal.slice';
import { ROUTES } from '../../routes/routes';

function CompanyLogo() {
  return (
    <Link to={ROUTES.HOME.path}>
      <Logo src="logologo.png" />
    </Link>
  );
}
export default function Header(): JSX.Element {
  const [isCalendarModalOpen, setCalendarModalOpen] = useState(false);
  const calendarModalHandler = () => {
    setCalendarModalOpen((e) => !e);
  };
  // const [isMapModalOpen, setMapModalOpen] = useState(false);
  // const mapModalHandler = () => {
  //   setMapModalOpen((e) => !e);
  // };
  const dispatch = useAppDispatch();
  const handleHeaderDestinationModal = () => {
    dispatch(modalAction.radioHeaderDestinationModal());
  };
  return (
    <NavWrapper>
      <Nav>
        <CompanyLogo></CompanyLogo>
        <Icons>
          <Icon onClick={calendarModalHandler}>
            <AiOutlineCalendar />
          </Icon>
          <HeaderDestinationModal />
          <Icon onClick={handleHeaderDestinationModal}>
            <BsMap />
          </Icon>
        </Icons>
        <HeaderDestinationModal />
      </Nav>
    </NavWrapper>
  );
}
