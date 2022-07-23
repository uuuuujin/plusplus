import {useAppDispatch, useAppSelector} from '../../hooks/index.hook';

import { modalAction } from '../../store/modules/modal/modal.slice';
import { navigatorAction } from '../../store/modules/navigator/navigator.slice';
import { ROUTES } from '../../routes/routes';
import HeaderDestinationModal from '../headerDestinationModal/headerDestinationModal.component';
import CalendarModal from '../calendar-modal/calendarModal.component';
import { NavWrapper, Nav, Icons, Icon, Logo, LogoLink } from './header.style';

import {
  BsMap,
  BsMapFill,
  BsCalendarCheck,
  BsCalendarCheckFill,
} from 'react-icons/bs';
import {useState} from "react";
import {selectIsCalendarModalOpen, selectIsHeaderDestinationModalOpen} from "../../store/modules/modal/modal.select";

export default function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  const isHeaderDestinationModalOpen =  useAppSelector(selectIsHeaderDestinationModalOpen)

  const handleHeaderDestinationModal = () => {
    dispatch(modalAction.radioHeaderDestinationModal());
  };
  const handleCalendarModal = () => {
    dispatch(modalAction.setCalendarModal());
  };

  const clickLogoHandler = (pageName: string) => {
    dispatch(navigatorAction.setCurrnetPage(pageName));
  };

  return (
    <NavWrapper>
      <Nav>
        <LogoLink
          to={ROUTES.HOME.path}
          onClick={() => clickLogoHandler('home')}
        >
          <Logo src="/pluspluslogo2.png" />
        </LogoLink>
        <Icons>
          <Icon onClick={handleCalendarModal}>
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
      {isHeaderDestinationModalOpen && <HeaderDestinationModal />}
      {isCalendarModalOpen && <CalendarModal />}
    </NavWrapper>
  );
}
