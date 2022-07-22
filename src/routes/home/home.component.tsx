import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { persistor } from '../../store/store';
import { fetchAllEvents } from '../../api/event';
import { fetchPopularStay } from '../../api/popular-stay';
import { selectAllEvents } from '../../store/modules/event/event.select';
import { selectPopularStay } from '../../store/modules/popular-stay/popularStay.select';

import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import SwiperComponent from '../../components/swiper/swiper.component';
import UserInfoModal from '../../components/user-info-modal/userInfoModal.component';

import {
  MainBanner,
  MainBannerImage,
  SliderContainer,
  SliderTitle,
  Wrapper,
} from './home.style';

export default function Home(): JSX.Element {
  const dispatch = useAppDispatch();

  const events = useAppSelector(selectAllEvents);
  const popularStays = useAppSelector(selectPopularStay);

  const logout = () => {
    const purge = async () => {
      await persistor.purge();
    };

    purge();
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllEvents());
      await dispatch(fetchPopularStay());
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <MainBanner>
          <MainBannerImage
            src="https://images.prismic.io/stayfolio-production/8614b07b-8fd7-4c5c-a9b4-43011562d9dd_main_top+1800_850.jpg?auto=compress,format&rect=0,0,1800,850&w=1800&h=850"
            alt="배너이미지"
          />
        </MainBanner>
        <button onClick={logout}>로그아웃 테스트</button>

        <SliderContainer>
          <SliderTitle>현재 진행중인 이벤트</SliderTitle>
          <SwiperComponent swiperDataArr={events}></SwiperComponent>
        </SliderContainer>

        <SliderContainer>
          <SliderTitle>인기순</SliderTitle>
          <SwiperComponent swiperDataArr={popularStays}></SwiperComponent>
        </SliderContainer>

        <Header />
        <Footer />
        <UserInfoModal />
      </Wrapper>
    </Container>
  );
}
