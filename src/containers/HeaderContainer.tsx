import {useReactiveVar} from '@apollo/client';
import Header from 'components/Header';
import LoginModalContent from 'components/LoginModalContent';
import ProfileCircle from 'components/ProfileCircle';
import ProfileModalContent from 'components/ProfileModalContent';
import {useModal} from 'hooks';
import {UserIcon} from 'icons';
import {FC, useCallback, useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {loginKakao, logout, meVar, tokenVar} from 'stores/auth';

const HeaderContainer: FC = ({children}) => {
  const token = useReactiveVar(tokenVar);
  const navigate = useNavigate();
  const location = useLocation();
  const me = meVar();

  const handleEdit = useCallback(() => {
    navigate('/profile');
  }, [navigate]);
  const handleLogout = useCallback(() => {
    logout();
    navigate(0);
  }, [navigate]);

  const [handleLoginModal, LoginModal] = useModal(
    <LoginModalContent onLogin={loginKakao} />
  );
  const [handleProfileMoal, ProfileModal] = useModal(
    <ProfileModalContent
      onEdit={handleEdit}
      onLogout={handleLogout}
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
    <>
      <Header menus={menus} />
      {children}
      {!token && <LoginModal />}
      {token && <ProfileModal />}
    </>
  );
};

export default HeaderContainer;
