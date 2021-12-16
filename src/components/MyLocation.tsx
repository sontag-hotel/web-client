import styled from 'styled-components';
import {colors} from 'styles';
import {isClickedThemeVar, kakaoMapVar} from 'stores/cafe';
import {Gps} from 'icons';
import {useReactiveVar} from '@apollo/client';

type TProps = {
  top: string;
  left: string;
};

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
  top: ${(props: TProps) => props.top};
  left: ${(props: TProps) => props.left};
  > svg {
    margin-right: 0.8rem;
  }
`;

export default function MyLocation() {
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
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
    <SMyLocation
      onClick={focusMyLocation}
      top={isClickedTheme ? '15%' : '92%'}
      left={isClickedTheme ? '66%' : ''}
    >
      <Gps />
      <span>내주변 둘러보기</span>
    </SMyLocation>
  );
}
