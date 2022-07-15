import { ROUTES } from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { navigatorAction } from '../../store/modules/navigator/navigator.slice';
import { selectCurrentPage } from '../../store/modules/navigator/navigator.select';
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
  };

  const currentPage = useAppSelector(selectCurrentPage);

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
        to={ROUTES.MYPAGE.path}
        onClick={() => clickIconHandler('mypage')}
      >
        {currentPage === 'mypage' ? <BsPersonFill /> : <BsPerson />}
      </FooterBox>
    </FooterStyle>
  );
}
