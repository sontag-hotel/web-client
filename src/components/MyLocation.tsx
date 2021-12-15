import styled from 'styled-components';
import {colors} from 'styles';
import {kakaoMapVar} from 'stores/cafe';
import {Gps} from 'icons';

const SMyLocation = styled.button`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 3.4rem;
  background-color: ${colors.background};
  border-radius: 0.8rem;
  box-shadow: 0.2rem 0.2rem 0.5rem 0.2rem rgba(149, 149, 149, 0.4);
  color: ${colors.primary};
  font-weight: 600;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 92%;
  > svg {
    margin-right: 0.8rem;
  }
`;

export default function MyLocation() {
  const focusMyLocation = () => {
    const kakaoMap = kakaoMapVar();
    if (navigator.geolocation && kakaoMap) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        const locPosition = new window.kakao.maps.LatLng(lat, lon);
        kakaoMap.panTo(locPosition);
      });
    } else {
      return;
    }
  };
  return (
    <SMyLocation onClick={focusMyLocation}>
      <Gps />
      <span>내주변 둘러보기</span>
    </SMyLocation>
  );
}
