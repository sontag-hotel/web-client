/* eslint-disable  @typescript-eslint/no-explicit-any */
// import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import markerImg from 'assets/images/marker.png';
import {selectedThemeVar} from 'Apollo';
import {useReactiveVar} from '@apollo/client';

declare global {
  interface Window {
    kakao: any;
  }
}

const SMap = styled.div`
  z-index: 1;
`;

function Map(): React.ReactElement {
  const selectedTheme = useReactiveVar(selectedThemeVar);

  //지도에 선택된 테마 마커 표시
  useEffect(() => {
    const showMarkers = () => {
      const container = document.getElementById('kakao-map');
      const options = {
        center: new window.kakao.maps.LatLng(
          37.546541849098304,
          127.0416230371248
        ),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      const bounds = new window.kakao.maps.LatLngBounds();
      for (let i = 0; i < selectedTheme.length; i++) {
        const markerImage = new window.kakao.maps.MarkerImage(
          markerImg,
          new window.kakao.maps.Size(24, 35)
        );
        const points = new window.kakao.maps.LatLng(
          selectedTheme[i].location.longitude,
          selectedTheme[i].location.latitude
        );
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: points,
          title: selectedTheme[i].title,
          image: markerImage,
        });
        marker.setMap(map);
        bounds.extend(points);
        map.setBounds(bounds);
      }
    };
    showMarkers();
  }, [selectedTheme]);
  return (
    <SMap>
      <div id="kakao-map" style={{width: '100vw', height: '100vh'}}></div>;
    </SMap>
  );
}

export default Map;
