import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import SwiperComponent from '../../components/swiper/swiper.component';

import {
  MainBanner,
  MainBannerImage,
  SliderContainer,
  SliderTitle,
} from './home.style';

export default function Home(): JSX.Element {
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
      <div>
        <Header />

        <MainBanner>
          <MainBannerImage src="main_banner.jpg" alt="배너이미지" />
        </MainBanner>

        <SliderContainer>
          <SliderTitle>현재 진행중인 이벤트</SliderTitle>
          <SwiperComponent swiperDataArr={dummyData}></SwiperComponent>
        </SliderContainer>

        <SliderContainer>
          <SliderTitle>인기순</SliderTitle>
          <SwiperComponent swiperDataArr={dummyData}></SwiperComponent>
        </SliderContainer>

        <Footer></Footer>
      </div>
    </Container>
  );
}
