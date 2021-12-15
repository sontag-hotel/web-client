import ThemeBox from '../components/ThemeBox';
import Map from '../components/Map';
import MyLocation from 'components/MyLocation';
import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function MainPage() {
  return (
    <SContainer>
      <ThemeBox />
      <MyLocation />
      <Map></Map>
    </SContainer>
  );
}
