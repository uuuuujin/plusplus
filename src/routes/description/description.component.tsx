import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import {
    DescriptionContainer, 
    Intro, Info, Title, Body,
    Slider, ImageBox,
    Rooms, Gallery, RoomDetail,  
} from './description.style';

import ImageSlider from '../../components/image-slider/imageSlider.component';

export default function Description(): JSX.Element {
  return (
    <Container>
      <div>
        <Header></Header>
        <DescriptionContainer>
            <Intro>
                <Title> 스테이 오름 </Title> 
                <Body> 역사적인 왕궁 유적들 사이 유리와 철조로 지어진 건축물을 품은 서울은 전통적인 느낌이 물씬한 동시에 미래 지향적인 감각이 가득한 역동적인 도시입니다. 바닥에서 천장까지 통유리가 설치된 객실에서 밖을 내다보면, 서울의 역동적인 풍경이 한눈에 펼쳐집니다. 광화문에 위치한 현대적인 감각의 포시즌스 호텔 서울은 포시즌스만의 서비스를 선보이는 특별한 공간입니다. 도심 속 스파에서 완벽한 고요와 평화를 만끽하시고 사계절 운영되는 수영장에서 휴식을 취하신 다음, 유유안의 광동식 요리를 맛보세요. 최고급 칵테일로 유명한 찰스 H.바로 오시면, 흥미진진한 스토리가 있는 특별한 칵테일을 즐기실 수 있습니다.</Body>
            </Intro>

            <Slider>
                 <ImageSlider></ImageSlider>
            </Slider>
      
            <Rooms>
                <Title> 객실 정보 </Title>
                <Gallery> 
                  <ImageBox src="https://www.planetware.com/wpimages/2019/06/south-korea-seoul-best-hotels-four-seasons-hotel-seoul.jpg"> 
                  </ImageBox>
                  <RoomDetail>기본형</RoomDetail>
                  <RoomDetail>$50,000 / 1 night </RoomDetail>
                </Gallery>

                <Gallery> 
                  <ImageBox src="https://www.planetware.com/wpimages/2019/06/south-korea-seoul-best-hotels-four-seasons-hotel-seoul.jpg"> 
                  </ImageBox>
                  <RoomDetail>기본형</RoomDetail>
                  <RoomDetail>$50,000 / 1 night </RoomDetail>
                </Gallery>

                <Gallery> 
                  <ImageBox src="https://www.planetware.com/wpimages/2019/06/south-korea-seoul-best-hotels-four-seasons-hotel-seoul.jpg"> 
                  </ImageBox>
                  <RoomDetail>기본형</RoomDetail>
                  <RoomDetail>$50,000 / 1 night </RoomDetail>
                </Gallery>
            </Rooms>

            <Info>
                <Title> 기타 정보 </Title>

            </Info>
        </DescriptionContainer>
      </div>
    </Container>
  );
}
