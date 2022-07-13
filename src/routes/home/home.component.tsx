import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import SwiperComponent from '../../components/swiper/swiper.component';

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
        <Header></Header>
        <span>메인 화면입니다요~</span>
        <SwiperComponent swiperDataArr={dummyData}></SwiperComponent>
        <Footer></Footer>
      </div>
    </Container>
  );
}
