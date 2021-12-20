/* eslint-disable  @typescript-eslint/no-explicit-any */
import {useEffect} from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import markerImg from 'assets/images/marker.png';
import {
  cafeListVar,
  clickedThemeVar,
  isSearchedVar,
  kakaoMapVar,
  searchInputVar,
} from 'stores/cafe';
import {useReactiveVar} from '@apollo/client';
import 'styled-components/macro';

declare global {
  interface Window {
    kakao: any;
  }
}

const SMap = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;
let markers: any[] = [];

function Map(): React.ReactElement {
  const cafeList = useReactiveVar(cafeListVar);
  const map = useReactiveVar(kakaoMapVar);
  const isSearched = useReactiveVar(isSearchedVar);
  const searchInput = useReactiveVar(searchInputVar);
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

  //마커 생성 함수
  useEffect(() => {
    const showMarkers = () => {
      deleteMarker();
      const bounds = new window.kakao.maps.LatLngBounds();
      if (cafeList) {
        for (let i = 0; i < cafeList.length; i++) {
          const markerImage = new window.kakao.maps.MarkerImage(
            markerImg,
            new window.kakao.maps.Size(24, 35)
          );
          const points = new window.kakao.maps.LatLng(
            cafeList[i].location.x,
            cafeList[i].location.y
          );
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: points,
            title: cafeList[i].name,
            image: markerImage,
          });
          markers.push(marker);
          marker.setMap(map);
          bounds.extend(points);
        }
        if (cafeList.length > 0) {
          map.setBounds(bounds);
          map.setLevel(4);
        }
      }
    };
    if (map) {
      showMarkers();
    }
  }, [cafeList, map]);

  //마커 제거 함수
  const deleteMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };

  //키워드 검색 함수
  useEffect(() => {
    const handleKakaoSearch = () => {
      const placesSearchCB = (data: any[], status: any, pagination: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
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
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(searchInput, placesSearchCB);
    };
    if (isSearched && searchInput.length > 0) {
      handleKakaoSearch();
    }
  }, [isSearched, searchInput]);
  return (
    <SMap>
      <div id="kakao-map" style={{width: '100vw', height: '100vh'}}></div>;
    </SMap>
  );
}

export default Map;
