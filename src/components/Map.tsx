// import {useEffect} from 'react';

import {useEffect, useRef} from 'react';
import 'styled-components/macro';
import markerImg from 'assets/images/marker.png';
import {
  Cafe,
  cafeListVar,
  clickedThemeVar,
  isSearchedVar,
  searchInputVar,
} from 'stores/cafe';
import {useReactiveVar} from '@apollo/client';
// import styled from 'styled-components';

/* eslint-disable  @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    kakao: any;
  }
}
declare const kakao: any;

// const SMap = styled.div`
//   z-index: 1;
//   width: 100vw;
//   height: 100vh;
// `;

function Map(): React.ReactElement {
  // 지도를 표시할 div
  const mapContainer = useRef<HTMLDivElement>(null);

  const cafeList = useReactiveVar(cafeListVar);
  const isSearched = useReactiveVar(isSearchedVar);
  const searchInput = useReactiveVar(searchInputVar);

  useEffect(() => {
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    // 지도를 생성합니다
    map = new kakao.maps.Map(mapContainer.current, mapOption);
  }, []);

  useEffect(() => {
    if (cafeList && map) {
      addMakers(cafeList);
    }
  }, [cafeList]);

  useEffect(() => {
    if (isSearched && searchInput.length > 0) {
      placesSearch.keywordSearch(searchInput, placesSearchCB);
    }
  }, [isSearched, searchInput]);

  return (
    <div
      ref={mapContainer}
      id="kakao-map"
      style={{width: '100vw', height: '100vh'}}
    ></div>
  );
}

export default Map;

const deleteMarkers = () => {
  markers.forEach(m => m.setMap(null));
  markers = [];
};

const addMakers = (cafeList: Cafe[]) => {
  deleteMarkers();
  // LatLngBounds 객체에 좌표를 추가합니다

  const bounds = new kakao.maps.LatLngBounds();
  cafeList.forEach(c => {
    const position = new kakao.maps.LatLng(c.location?.y, c.location?.x);
    const marker = new kakao.maps.Marker({
      map, // 마커를 표시할 지도
      position,
      title: c.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
    bounds.extend(position);
    markers.push(marker);
  });

  map.setBounds(bounds);
};

const placesSearchCB = (data: any[], status: any, pagination: any) => {
  if (status === kakao.maps.services.Status.OK) {
    console.log('data : ', data);
    cafeListVar(
      data.map(d => ({
        _id: d.id,
        name: d.place_name,
        info: {address: d.road_address_name},
        theme: [clickedThemeVar()],
        contact: d.phone,
        location: {
          x: d.x,
          y: d.y,
        },
      }))
    );
    isSearchedVar(false);
  }
};
let map: any;

let markers: any[] = [];

const placesSearch = new kakao.maps.services.Places();

const markerImage = new kakao.maps.MarkerImage(
  markerImg,
  new kakao.maps.Size(24, 35)
);
