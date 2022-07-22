import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import './Overlay.css';

const StyledContainer = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;

interface MapProps {
  y: number;
  x: number;
  name?: string;
  height: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = ({ y, x, name, height }: MapProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const options = {
    center: new window.kakao.maps.LatLng(x, y),
    level: 3,
  };

  useEffect(() => {
    let map = new window.kakao.maps.Map(ref.current, options);
    let coords = new window.kakao.maps.LatLng(y, x);
    let content = `<div class='customOverlay'><span class='roomText'>${name}</span></div>`;

    // 위치를 마커로 표시합니다.
    let marker = new window.kakao.maps.Marker({
      map: map,
      position: coords,
    });

    //커스텀 오버레이 생성
    new window.kakao.maps.CustomOverlay({
      map: map,
      position: coords,
      content: content,
      xAnchor: 0.5,
      yAnchor: 3.0,
    });

    map.setCenter(coords);
  }, []);

  return <StyledContainer height={height} id="map" ref={ref}></StyledContainer>;
};

export default Map;
