import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectStayData } from '../../store/modules/stay/stay.select';
import { getStay } from '../../api/stay';

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
import Map from '../../components/map/map.component';

export default function Description(): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const STAY_ID = Number(location.pathname.split('/')[2]);

  const stayData = useAppSelector(selectStayData);

  const [coordinate, setCoordinate] = useState<number[]>([0, 0]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getStay(STAY_ID));
    };

    fetchData();
  }, [STAY_ID, dispatch]);

  useEffect(() => {
    console.log(stayData);
    const coord = [parseFloat(stayData.y), parseFloat(stayData.x)];
    setCoordinate(coord);
    console.log(coord);
  }, [stayData]);

  return (
    <Container>
      <div>
        <Header></Header>
        <TitleContainer>
          <Title>{stayData.name}</Title>
          <AiOutlineHeart />
        </TitleContainer>
        <DescriptionContainer>
          <img src={stayData.image} alt="숙소 이미지" />
          <SubTitle className="mainTitle">{stayData.name}</SubTitle>
          <Address>{stayData.address}</Address>
          <DescriptionText>{stayData.content}</DescriptionText>
        </DescriptionContainer>

        <ContentsContainer>
          <SubTitle>Rooms</SubTitle>
          {stayData.rooms.map((el, index) => {
            return (
              <Room key={index}>
                <img src={el.image} alt="방 이미지" />
                <RoomDescription>
                  <RoomTitle>{el.name}</RoomTitle>
                  <RoomCost>₩{el.price.toLocaleString()}</RoomCost>
                </RoomDescription>
              </Room>
            );
          })}
        </ContentsContainer>

        <ContentsContainer>
          <SubTitle>Map</SubTitle>
          {/* <Map y={parseFloat(stayData.y)} x={parseFloat(stayData.x)} />
          <Map y={33.308704704334026} x={126.76810471045683} />
          <Map y={coordinate[0]} x={coordinate[1]} /> */}
        </ContentsContainer>
      </div>
    </Container>
  );
}
