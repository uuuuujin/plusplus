import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {
  AdminContent,
  AdminIcon,
  AdminInfo,
  ContentItem,
  GreetingText,
  IconText,
} from './admin-page.style';
import { ROUTES } from '../../routes/routes';
import { VscCalendar } from 'react-icons/vsc';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineHotel } from 'react-icons/md';

export default function Admin(): JSX.Element {
  return (
    <Container>
      <div>
        <Header />

        <AdminInfo>
          <GreetingText>관리자 페이지</GreetingText>
          <AdminIcon />
        </AdminInfo>
        <AdminContent>
          <ContentItem to={ROUTES.USERLIST.path}>
            <FiUsers className="icon" />
            <IconText>유저리스트</IconText>
          </ContentItem>
          <ContentItem to={ROUTES.BOOKINGLIST.path}>
            <VscCalendar className="icon" />
            <IconText>예약리스트</IconText>
          </ContentItem>
          <ContentItem to={ROUTES.ROOMLIST.path}>
            <MdOutlineHotel className="icon" />
            <IconText>숙소리스트</IconText>
          </ContentItem>
        </AdminContent>
        <Footer />
      </div>
    </Container>
  );
}
