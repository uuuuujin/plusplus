import { ROUTES } from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { searchAction } from '../../store/modules/search/search.slice';
import { calendarAction } from '../../store/modules/calendar/calendar.slice';
import { navigatorAction } from '../../store/modules/navigator/navigator.slice';
import { selectCurrentPage } from '../../store/modules/navigator/navigator.select';
import { selectIsLoggedIn } from '../../store/modules/user/user.select';
import { FooterStyle, FooterBox } from './footer.style';

//icons
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiSearchLine, RiSearchFill } from 'react-icons/ri';
import { BsPerson, BsPersonFill } from 'react-icons/bs';

// 이동 route 지정(redirect?) 필요
export default function Footer(): JSX.Element {
  const dispatch = useAppDispatch();

  const clickIconHandler = (pageName: string) => {
    dispatch(navigatorAction.setCurrnetPage(pageName));

    if (pageName === 'search') {
      dispatch(searchAction.setSearchRegionName(''));
      dispatch(calendarAction.setCheckInDate(undefined));
      dispatch(calendarAction.setCheckOutDate(undefined));
    }
  };

  const currentPage = useAppSelector(selectCurrentPage);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <FooterStyle>
      <FooterBox to={ROUTES.HOME.path} onClick={() => clickIconHandler('home')}>
        {currentPage === 'home' ? <AiFillHome /> : <AiOutlineHome />}
      </FooterBox>
      <FooterBox
        to={ROUTES.SEARCH.path}
        onClick={() => clickIconHandler('search')}
      >
        {currentPage === 'search' ? <RiSearchFill /> : <RiSearchLine />}
      </FooterBox>
      <FooterBox
        to={isLoggedIn ? ROUTES.MYPAGE.path : ROUTES.LOGIN.path}
        onClick={() => clickIconHandler('mypage')}
      >
        {currentPage === 'mypage' ? <BsPersonFill /> : <BsPerson />}
      </FooterBox>
    </FooterStyle>
  );
}
