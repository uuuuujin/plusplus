import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ImageUrlType {
  imgUrlArr: string[];
}

export default function BannerSwiper({ imgUrlArr }: ImageUrlType): JSX.Element {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const [mainIndex, setMainIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 1,
    autoplay: { delay: 2500 },
    loop: true,
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
  };

  return (
    <Swiper {...swiperParams}>
      {/* {imgUrlArr.map((item, index) => {
        return <SwiperSlide key={index}>{item}</SwiperSlide>;
      })} */}
      <SwiperSlide>
        <img src={imgUrlArr[0]} alt="이미지 배너" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imgUrlArr[1]} alt="이미지 배너" style={{ width: '100%' }} />
      </SwiperSlide>
    </Swiper>
  );
}
