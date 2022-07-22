import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectStayData } from '../../store/modules/stay/stay.select';
import { getStay } from '../../api/stay';
import { ROUTES } from '../routes';

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
  RoomLink,
} from './stayDescription.style';
import Map from '../../components/map/map.component';

export default function StayDescription(): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const STAY_ID = Number(location.pathname.split('/')[2]);

  const stayData = useAppSelector(selectStayData);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getStay(STAY_ID));
    };

    fetchData();
    console.log(stayData);
  }, [STAY_ID, dispatch]);

  // useEffect(() => {
  //   const coord = [parseFloat(stayData.y), parseFloat(stayData.x)];
  //   setCoordinate(coord);
  // }, [stayData]);

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
              <RoomLink
                to={`${ROUTES.ROOM.link}/${STAY_ID}/${el.id}`}
                key={index}
              >
                <Room>
                  <img src={el.image} alt="방 이미지" />
                  <RoomDescription>
                    <RoomTitle>{el.name}</RoomTitle>
                    <RoomCost>₩{el.price.toLocaleString()}</RoomCost>
                  </RoomDescription>
                </Room>
              </RoomLink>
            );
          })}
        </ContentsContainer>

        <ContentsContainer>
          <SubTitle>Map</SubTitle>
          {stayData.id !== 0 && (
            <Map
              y={parseFloat(stayData.y)}
              x={parseFloat(stayData.x)}
              name={stayData.name}
              height={450}
            />
          )}
          {/*{<Map y={parseFloat(stayData.y)} x={parseFloat(stayData.x)} />*/}

          {/*<Map y={33.308704704334026} x={126.76810471045683} />*/}

          {/*<Map y={coordinate[0]} x={coordinate[1]} /> }*/}
        </ContentsContainer>
      </div>
    </Container>
  );
}
