import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
  SwiperContainer,
  SlideContainer,
  SlideImage,
  SlideTitle,
  NavigationButtonContainer,
  NavigationButton,
} from './swiper.style';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface SwiperDataType {
  imgUrl: string;
  title: string;
}

interface swiperDataArrType {
  swiperDataArr: SwiperDataType[];
}

export default function SwiperComponent({
  swiperDataArr,
}: swiperDataArrType): JSX.Element {
  SwiperCore.use([Navigation, Pagination]);

  const [mainIndex, setMainIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper: any) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainIndex;
    },
    onSlideChange: (e: any) => setMainIndex(e.activeIndex),

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <SwiperContainer {...swiperParams}>
      {swiperDataArr.map((itme, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideContainer>
              <SlideImage src={itme.imgUrl} />
              <SlideTitle>{itme.title}</SlideTitle>
            </SlideContainer>
          </SwiperSlide>
        );
      })}

      <NavigationButtonContainer>
        <NavigationButton ref={navigationPrevRef}>
          <IoIosArrowBack />
        </NavigationButton>
        <NavigationButton ref={navigationNextRef}>
          <IoIosArrowForward />
        </NavigationButton>
      </NavigationButtonContainer>
    </SwiperContainer>
  );
}
