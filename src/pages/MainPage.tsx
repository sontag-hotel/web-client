import ThemeBox from '../components/ThemeBox';
import Map from '../components/Map';
import Header from 'components/Header';
import {UserIcon} from 'icons';
import LoginModalContent from 'components/LoginModalContent';
import {loginKakao, logout, meVar, tokenVar} from 'App';
import {useModal} from 'hooks';
import ProfileCircle from 'components/ProfileCircle';
import {useMemo} from 'react';
import ProfileModalContent from 'components/ProfileModalContent';
import {useReactiveVar} from '@apollo/client';
import {useLocation, useNavigate} from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useReactiveVar(tokenVar);
  const me = meVar();
  console.log(me);
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
    location.state?.afterEdit
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
    <>
      <Header menus={menus} />
      <ThemeBox />
      <Map />
      {!token && <LoginModal />}
      {token && <ProfileModal />}
    </>
  );
}
