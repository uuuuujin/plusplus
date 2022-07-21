import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { persistor } from '../../store/store';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { userAction } from '../../store/modules/user/user.slice';
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
import { selectAccessToken } from '../../store/modules/user/user.select';

export default function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleUserInfoModal = () => {
    dispatch(modalAction.radioUserInfoModal());
  };

  const accessToken = useAppSelector(selectAccessToken);

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

  const logout = () => {
    const purge = async () => {
      await persistor.purge();
    };

    purge();
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(accessToken);
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/users/info`,
  //       { headers: { Authorization: `Bearer ${accessToken}` } }
  //     );
  //     console.log(response.data);
  //   };
  //   fetchData();
  // }, [accessToken]);

  return (
    <Container>
      <Wrapper>
        <MainBanner>
          <MainBannerImage src="main_banner.jpg" alt="배너이미지" />
        </MainBanner>
        <button onClick={handleUserInfoModal}>유저정보 모달 테스트 버튼</button>
        <button onClick={logout}>로그아웃 테스트</button>

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
