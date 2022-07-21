import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { ROUTES } from '../../routes/routes';

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
  LinkEvent,
} from './swiper.style';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface SwiperDataType {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  rate: number;
  image: string;
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
      {swiperDataArr.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <LinkEvent to={`${ROUTES.EVENT.link}/${item.id}`}>
              <SlideContainer>
                <SlideTitle>{item.name}</SlideTitle>
                <SlideImage src={item.image} />
              </SlideContainer>
            </LinkEvent>
          </SwiperSlide>
        );
      })}

      <NavigationButtonContainer
        visible={swiperDataArr.length > 2 ? true : false}
      >
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
