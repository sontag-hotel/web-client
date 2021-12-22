import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import Map from 'components/Map';
import styled from 'styled-components';
import 'styled-components/macro';
const Home: FC = () => {
  return (
    <>
      <Header>
        <Outlet />
      </Header>
      <Map />
    </>
  );
};

export default Home;
const Header = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
`;
