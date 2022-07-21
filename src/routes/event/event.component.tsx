import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from '../../api/event';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectEvent } from '../../store/modules/event/event.select';

import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';

import { EventContainer, EventImage } from './event.style';

export default function Event(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const EVENT_ID = Number(location.pathname.split('/')[2]);
  const eventData = useAppSelector(selectEvent);

  useEffect(() => {
    const getEvents = () => {
      dispatch(fetchEvent(EVENT_ID));
    };

    getEvents();
  }, [dispatch, EVENT_ID]);

  return (
    <Container>
      <div>
        <Header />
        <EventContainer>
          <EventImage src={eventData.detailImage} alt="이벤트 상세 이미지" />
        </EventContainer>
      </div>
    </Container>
  );
}
