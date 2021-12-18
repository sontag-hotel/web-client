import ThemeBox from '../components/ThemeBox';
import Map from '../components/Map';
import Header from 'components/Header';
import {UserIcon} from 'icons';
import {useState} from 'react';
import Modal from 'components/Modal';
import LoginModal from 'components/LoginModal';
import {useAuth} from 'hooks';

export default function MainPage() {
  const {loginKakao} = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header
        menus={[
          {
            Icon: <UserIcon />,
            text: 'My',
            onClick: e => {
              setOpen(true);
            },
          },
        ]}
      />
      <ThemeBox />
      <Map />
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <LoginModal onClick={loginKakao} />
        </Modal>
      )}
    </>
  );
}
