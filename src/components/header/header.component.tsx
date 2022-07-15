import { useState } from 'react';
import { useAppDispatch } from '../../hooks/index.hook';
import { Link } from 'react-router-dom';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { ROUTES } from '../../routes/routes';
import HeaderDestinationModal from '../headerDestinationModal/headerDestinationModal.component';
import { NavWrapper, Nav, Icons, Icon, Logo } from './header.style';

import {
  BsMap,
  BsMapFill,
  BsCalendarCheck,
  BsCalendarCheckFill,
} from 'react-icons/bs';

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
        <Link to={ROUTES.HOME.path}>
          <Logo src="logologo.png" />
        </Link>
        <Icons>
          <Icon onClick={calendarModalHandler}>
            <BsCalendarCheck className="normal" />
            <BsCalendarCheckFill className="hover" />
          </Icon>
          <HeaderDestinationModal />
          <Icon className="map" onClick={handleHeaderDestinationModal}>
            <BsMap className="normal" />
            <BsMapFill className="hover" />
          </Icon>
        </Icons>
      </Nav>
      <HeaderDestinationModal />
    </NavWrapper>
  );
}
