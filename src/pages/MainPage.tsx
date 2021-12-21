import Header from 'components/Header';
import {UserIcon} from 'icons';
import LoginModalContent from 'components/LoginModalContent';
import ProfileCircle from 'components/ProfileCircle';
import {useMemo} from 'react';
import ProfileModalContent from 'components/ProfileModalContent';
import {useLocation, useNavigate} from 'react-router-dom';
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
import {loginKakao, logout, meVar, tokenVar} from 'stores/auth';
import {useModal} from 'hooks';

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

const themeType = {
  TASTE: {
    text: '커피 맛집',
    icon: '\u2615',
  },
  MOOD: {
    text: '분위기 감성',
    icon: '\u{1F4F7}',
  },
  WORK: {
    text: '노트북 작업',
    icon: '\u{1F4BB}',
  },
};
export default function MainPage() {
  const isClickedTheme = useReactiveVar(isClickedThemeVar);
  const clickedTheme = useReactiveVar(clickedThemeVar);
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
  const navigate = useNavigate();
  const location = useLocation();
  const token = useReactiveVar(tokenVar);
  const me = meVar();
  const [handleLoginModal, LoginModal] = useModal(
    <LoginModalContent onLogin={loginKakao} />
  );
  const [handleProfileMoal, ProfileModal] = useModal(
    <ProfileModalContent
      onEdit={() => {
        navigate('/edit-profile');
      }}
      onLogout={() => {
        logout();
        navigate(0);
      }}
      desc={me.introductionDesc}
      name={me.name}
    />,
    (location.state as {afterEdit: boolean})?.afterEdit
  );
  const menus = useMemo(
    () => [
      {
        Icon: token ? (
          <ProfileCircle lineColor="#643A14" size="small" />
        ) : (
          <UserIcon />
        ),
        text: 'My',
        onClick: token ? handleProfileMoal : handleLoginModal,
      },
    ],
    [handleLoginModal, handleProfileMoal, token]
  );

  return (
    <SContainer>
      <div>
        <Header menus={menus} />
        <ThemeBox />
      </div>
      <ThemeTitle
        text={themeType[clickedTheme].text}
        Icon={themeType[clickedTheme].icon}
      />
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
      {!token && <LoginModal />}
      {token && <ProfileModal />}
    </SContainer>
  );
}
