import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
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
  const handleUserInfoModal = () => {
    dispatch(modalAction.radioUserInfoModal());
  };

  const dummyData = [
    {
      imgUrl: 'productImage1.jpg',
      title: '여름 특별 할인',
    },
    {
      imgUrl: 'productImage2.jpg',
      title: '바캉스 이벤트',
    },
    {
      imgUrl: 'productImage1.jpg',
      title: '여름 특별 할인',
    },
    {
      imgUrl: 'productImage2.jpg',
      title: '바캉스 이벤트',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <MainBanner>
          <MainBannerImage src="main_banner.jpg" alt="배너이미지" />
        </MainBanner>
        <button onClick={handleUserInfoModal}>유저정보 모달 테스트 버튼</button>

        <SliderContainer>
          <SliderTitle>현재 진행중인 이벤트</SliderTitle>
          <SwiperComponent swiperDataArr={dummyData}></SwiperComponent>
        </SliderContainer>

        <SliderContainer>
          <SliderTitle>인기순</SliderTitle>
          <SwiperComponent swiperDataArr={dummyData}></SwiperComponent>
        </SliderContainer>

        <Header />
        <Footer />
        <UserInfoModal />
      </Wrapper>
    </Container>
  );
}
