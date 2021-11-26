/* eslint-disable  @typescript-eslint/no-explicit-any */
// import React from 'react';
import {useEffect, useRef} from 'react';
import styled from 'styled-components';
declare global {
  interface Window {
    kakao: any;
  }
}

const SMap = styled.div`
  z-index: 1;
`;

function Map() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    new window.kakao.maps.Map(container.current, options);
  }, []);
  return (
    <SMap>
      <div ref={container} style={{width: '100vw', height: '100vh'}}></div>;
    </SMap>
  );
}

export default Map;
