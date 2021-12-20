import ThemeBox from '../components/ThemeBox';
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
import ThemeTitle from 'components/ThemeTitle';
import {useCafeQuery, useGetAllCafeQuery} from 'generated/graphql';
import {useEffect} from 'react';
import InputPlaceholder from 'components/InputPlaceholder';
import SearchInput from 'components/SearchInput';
import Background from 'components/Background';
// import Header from 'components/Header';
// import {UserIcon} from 'icons';
// import {useState} from 'react';
// import Modal from 'components/Modal';
// import LoginModal from 'components/LoginModal';
// import {useAuth} from 'hooks';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function MainPage() {
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  const {data: allCafe} = useGetAllCafeQuery();
  const {data: cafe} = useCafeQuery({
    variables: {
      theme: clickedThemeVar(),
    },
  });
  // const {loginKakao} = useAuth();
  // const [open, setOpen] = useState(false);
  const cafeList = useReactiveVar(cafeListVar);
  useEffect(() => {
    const cafeList = isClickedTheme ? cafe?.Cafe : allCafe?.getAllCafe;
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
      {/* <Header
        menus={[
          {
            Icon: <UserIcon />,
            text: 'My',
            onClick: e => {
              setOpen(true);
            },
          },
        ]}
      /> */}
      <ThemeTitle text={'커피 맛집'} Icon={'\u2615'} />
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
      <ThemeBox />
      <MyLocation />
      <InformCardBox>
        {cafeList?.map(cafe => (
          <CardLayout key={cafe.name}>
            <CafeName name={cafe.name} />
            <Address address={cafe.info.address} />
            <Line />
            {/* <BaseBox
                userList={
                  cafe.theme.filter(e => e.themeName === clickedTheme)[0]
                    .userList
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
      {/* {open && (
        <Modal onClose={() => setOpen(false)}>
          <LoginModal onClick={loginKakao} />
        </Modal>
      )} */}
    </SContainer>
  );
}
