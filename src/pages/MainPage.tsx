import Map from '../components/Map';
import MyLocation from 'components/MyLocation';
import styled from 'styled-components';
import InformCardBox from 'components/InformCardBox';
import {
  cafeListVar,
  clickedThemeVar,
  isClickedRegisterVar,
  isClickedThemeVar,
  isOpenBackgroundVar,
  isOpenSearchBarVar,
  isOpenSearchInputVar,
} from 'stores/cafe';
import {useReactiveVar} from '@apollo/client';
import CardLayout from 'components/CardLayout';
import CafeName from 'components/CafeName';
import Address from 'components/Address';
import Line from 'components/Line';
// import BaseBox from 'components/BaseBox';
import {useCafeQuery, useGetAllCafeQuery} from 'generated/graphql';
import {useEffect} from 'react';
import InputPlaceholder from 'components/InputPlaceholder';
import SearchInput from 'components/SearchInput';
import Background from 'components/Background';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    position: fixed;
    z-index: 2;
    width: 100%;
  }
`;

export default function MainPage() {
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  // const clickedTheme = useReactiveVar(clickedThemeVar);
  const {data: allCafe} = useGetAllCafeQuery();
  const {data: cafe} = useCafeQuery({
    variables: {
      theme: clickedThemeVar(),
    },
  });
  const cafeList = useReactiveVar(cafeListVar);
  useEffect(() => {
    const cafeList = isClickedTheme ? cafe?.getCafe : allCafe?.getAllCafe;
    cafeListVar(cafeList);
  }, [isClickedTheme, allCafe, cafe]);
  const handleClickBackground = () => {
    isOpenSearchInputVar(false);
    isOpenSearchBarVar(false);
    isOpenBackgroundVar(false);
    isClickedRegisterVar(false);
  };

  return (
    <SContainer>
      <div></div>
      <InputPlaceholder
        text="등록하고 싶은 카페를 검색해보세요!"
        width={33.5}
        onClick={() => {
          isOpenSearchBarVar(false);
          isOpenSearchInputVar(true);
        }}
      />
      <SearchInput />
      <Background onClick={handleClickBackground} />
      <MyLocation />
      <InformCardBox>
        {cafeList?.map(cafe => (
          <CardLayout key={cafe._id}>
            <CafeName name={cafe.name} />
            <Address address={cafe.info.address} />
            <Line />
            {/* <BaseBox
              userList={
                cafe.theme.filter(e => e.themeName === clickedTheme)[0].userList
              }
              userCount={
                cafe.theme.filter(e => e.themeName === clickedTheme)[0]
                  .userCount
              }
            /> */}
          </CardLayout>
        ))}
      </InformCardBox>
      <Map></Map>
    </SContainer>
  );
}
