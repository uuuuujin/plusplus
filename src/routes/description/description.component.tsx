import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import {
  TitleContainer,
  Title,
  DescriptionContainer,
  SubTitle,
  Address,
  DescriptionText,
  ContentsContainer,
  Room,
  RoomDescription,
  RoomTitle,
  RoomCost,
} from './description.style';

interface RoomType {
  roomTitle: string;
  roomCost: string;
  roomImage: string;
}

interface StationType {
  stationTitle: string;
  address: string;
  content: string;
  stationImage: string;
  rooms: RoomType[];
  latitude: string;
  longitude: string;
}

export default function Description(props?: StationType): JSX.Element {
  // const {
  //   stationTitle,
  //   address,
  //   content,
  //   stationImage,
  //   rooms,
  //   latitude,
  //   longitude,
  // } = props;

  const dummyRoomData = [
    {
      roomTitle: '동산리 해변 옆 몽환적인 로지(Lodge)',
      roomCost: '₩300,000 ~ ₩400,000',
      roomImage: 'productImage1.jpg',
    },
  ];

  return (
    <Container>
      <div>
        <Header></Header>
        <TitleContainer>
          <Title>밤편지</Title>
          <AiOutlineHeart />
        </TitleContainer>
        <DescriptionContainer>
          <img src="productImage2.jpg" alt="숙소 이미지" />
          <SubTitle className="mainTitle">밤편지</SubTitle>
          <Address>제주도 서귀포시 중문관광로72번길 35</Address>
          <DescriptionText>
            역사적인 왕궁 유적들 사이 유리와 철조로 지어진 건축물을 품은 서울은
            전통적인 느낌이 물씬한 동시에 미래 지향적인 감각이 가득한 역동적인
            도시입니다. 바닥에서 천장까지 통유리가 설치된 객실에서 밖을
            내다보면, 서울의 역동적인 풍경이 한눈에 펼쳐집니다. 광화문에 위치한
            현대적인 감각의 포시즌스 호텔 서울은 포시즌스만의 서비스를 선보이는
            특별한 공간입니다. 도심 속 스파에서 완벽한 고요와 평화를 만끽하시고
            사계절 운영되는 수영장에서 휴식을 취하신 다음, 유유안의 광동식
            요리를 맛보세요. 최고급 칵테일로 유명한 찰스 H.바로 오시면,
            흥미진진한 스토리가 있는 특별한 칵테일을 즐기실 수 있습니다.
          </DescriptionText>
        </DescriptionContainer>

        <ContentsContainer>
          <SubTitle>Rooms</SubTitle>
          {dummyRoomData.map((el, index) => {
            return (
              <Room key={index}>
                <img src={el.roomImage} alt="방 이미지" />
                <RoomDescription>
                  <RoomTitle>{el.roomTitle}</RoomTitle>
                  <RoomCost>{el.roomCost}</RoomCost>
                </RoomDescription>
              </Room>
            );
          })}
        </ContentsContainer>

        <ContentsContainer>
          <SubTitle>Map</SubTitle>
        </ContentsContainer>
      </div>
    </Container>
  );
}
