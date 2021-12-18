import ThemeBox from '../components/ThemeBox';
import Map from '../components/Map';
import MyLocation from 'components/MyLocation';
import styled from 'styled-components';
import InformCardBox from 'components/InformCardBox';
import {cafeListVar, clickedThemeVar} from 'stores/cafe';
import {useReactiveVar} from '@apollo/client';
import CardLayout from 'components/CardLayout';
import CafeName from 'components/CafeName';
import Address from 'components/Address';
import Line from 'components/Line';
import BaseBox from 'components/BaseBox';
import ThemeTitle from 'components/ThemeTitle';
// import SearchInput from 'components/SearchInput';
// import InputPlaceholder from 'components/InputPlaceholder';
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function MainPage() {
  const cafeList = useReactiveVar(cafeListVar);
  const clickedTheme = useReactiveVar(clickedThemeVar);
  return (
    <SContainer>
      <ThemeTitle text={'커피 맛집'} Icon={'\u2615'} />
      <ThemeBox />
      <MyLocation />
      {/* <InputPlaceholder text="등록하고 싶은 카페를 검색해보세요!" width={34} /> */}
      {/* <SearchInput /> */}
      <InformCardBox>
        {clickedTheme.length &&
          cafeList.length &&
          cafeList.map(cafe => (
            <CardLayout key={cafe.name}>
              <CafeName name={cafe.name} />
              <Address address={cafe.address} />
              <Line />
              <BaseBox
                userList={
                  cafe.theme.filter(e => e.themeName === clickedTheme)[0]
                    .userList
                }
                userCount={
                  cafe.theme.filter(e => e.themeName === clickedTheme)[0]
                    .userCount
                }
              />
            </CardLayout>
          ))}
      </InformCardBox>
      <Map></Map>
    </SContainer>
  );
}
