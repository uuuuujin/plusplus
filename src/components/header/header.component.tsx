import { NavWrapper, Nav, Icons, Icon, Logo } from './header.style';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsMap } from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/index.hook';
import MainModal from '../main-modal/mainModal.component';
import CompanyLogoImage from '../../assets/images/logologo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DestinationModal from '../headerDestinationModal/headerDestinationModal.component';

import { modalAction } from '../../store/modules/modal/modal.slice';
import { ROUTES } from '../../routes/routes';

function CompanyLogo() {
  return (
    <Link to={ROUTES.HOME.path}>
      <Logo src={CompanyLogoImage} />
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
  const handleDestinationModal = () => {
    dispatch(modalAction.radioDestinationModal());
  };
  return (
    <NavWrapper>
      <Nav>
        <CompanyLogo></CompanyLogo>
        <Icons>
          <Icon onClick={calendarModalHandler}>
            <AiOutlineCalendar />
          </Icon>
          <DestinationModal />
          <Icon onClick={handleDestinationModal}>
            <BsMap />
          </Icon>
        </Icons>
        <DestinationModal />
      </Nav>
    </NavWrapper>
  );
}
