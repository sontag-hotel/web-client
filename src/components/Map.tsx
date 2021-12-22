/* eslint-disable  @typescript-eslint/no-explicit-any */
import {FC, useEffect} from 'react';
// import styled from 'styled-components';
import 'styled-components/macro';
import markerImg from 'assets/images/marker.png';
import {
  Cafe,
  cafeListVar,
  clickedThemeVar,
  isOpenBackgroundVar,
  isSearchedVar,
  kakaoMapVar,
  searchInputVar,
  searchKeywordVar,
} from 'stores/cafe';
import {useReactiveVar} from '@apollo/client';
import 'styled-components/macro';

declare global {
  interface Window {
    kakao: any;
  }
}

// const SMap = styled.div`
//   z-index: 1;
//   width: 100vw;
//   height: 100vh;
// `;
let markers: any[] = [];
const markerImage = new window.kakao.maps.MarkerImage(
  markerImg,
  new window.kakao.maps.Size(24, 35)
);
const ps = new window.kakao.maps.services.Places();

//마커 생성 함수
const showMarkers = (cafeList: Cafe[], map: any) => {
  deleteMarker();
  if (cafeList) {
    console.log(cafeList);
    const bounds = new window.kakao.maps.LatLngBounds();
    cafeList.forEach(cafe => {
      const points = new window.kakao.maps.LatLng(
        cafe.location.y,
        cafe.location.x
      );
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: points,
        title: cafe.name,
        image: markerImage,
      });
      markers.push(marker);
      bounds.extend(points);
    });
    if (cafeList.length > 0) {
      map.setBounds(bounds);
    }
  }
};
//마커 제거 함수
const deleteMarker = () => {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
};

//키워드 검색 함수

const placesSearchCB = (data: any[], status: any, pagination: any) => {
  if (status === window.kakao.maps.services.Status.OK) {
    console.log('data : ', data);
    const filteredCafe = data.filter(d => d.category_group_code === 'CE7');
    const cafeData = filteredCafe.map(d => ({
      _id: d.id,
      name: d.place_name,
      info: {address: d.road_address_name},
      theme: [clickedThemeVar()],
      contact: d.phone,
      location: {
        x: d.x,
        y: d.y,
      },
    }));
    cafeListVar(cafeData);
    isSearchedVar(false);
    isOpenBackgroundVar(false);
    searchInputVar('');
  } else {
    alert('올바른 카페 이름을 입력해주세요.');
  }
};
const Map: FC = () => {
  const cafeList = useReactiveVar(cafeListVar);
  const map = useReactiveVar(kakaoMapVar);
  const isSearched = useReactiveVar(isSearchedVar);
  const searchKeyword = useReactiveVar(searchKeywordVar);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  //지도 생성
  const createMap = () => {
    const container = document.getElementById('kakao-map');
    const options = {
      center: new window.kakao.maps.LatLng(37.5093249452576, 127.110416326514),
      level: 3,
    };
    const createdMap = new window.kakao.maps.Map(container, options);
    kakaoMapVar(createdMap);
  };
  useEffect(() => {
    createMap();
  }, []);

  useEffect(() => {
    if (map && cafeList) {
      showMarkers(cafeList, map);
    }
  }, [cafeList, map]);

  useEffect(() => {
    if (isSearched && searchKeyword.length > 0) {
      ps.keywordSearch(searchKeyword, placesSearchCB);
    }
  }, [isSearched, searchKeyword]);
  return (
    <div id="kakao-map" style={{width: '100vw', height: '100vh'}}></div>
    // <SMap>

    // </SMap>
  );
};

export default Map;
