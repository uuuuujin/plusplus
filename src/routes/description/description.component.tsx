import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';

import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

import {
    DescriptionContainer, Intro, Rooms, 
    Info, Title, Body,
    Slider, LeftSlideButton, RightSlideButton, ImageBox, 
} from './description.style';

export default function Description(): JSX.Element {
  return (
    <Container>
      <div>
        <Header></Header>
        <DescriptionContainer>
            <Intro>
                <Title> 스테이 오름 </Title> 
                <Body> 한 층에 4개의 객실이 자리하고 있으며 객실에 설비된 릴랙세이션 풀은 반얀트리에서의 휴식을 더욱 특별하게 만들어 드립니다. 릴랙세이션 풀에서 스파를 즐기며 아름다운 서울의 전경을 바라보는 시간은 몸과 마음을 채우는 특별한 휴식을 선사합니다.</Body>
            </Intro>

            <Slider>
                <LeftSlideButton><AiOutlineCaretLeft/></LeftSlideButton>
                <ImageBox src="https://www.planetware.com/wpimages/2019/06/south-korea-seoul-best-hotels-four-seasons-hotel-seoul.jpg">
                </ImageBox>
                <RightSlideButton><AiOutlineCaretRight/></RightSlideButton>
            </Slider>

            <Rooms>
                Rooms


            </Rooms>

            <Info>
                Location and other info
                
            </Info>
        </DescriptionContainer>
      </div>
    </Container>
  );
}
