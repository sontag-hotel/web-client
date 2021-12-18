import ProfileWelcome from 'components/ProfileWelcome';
import {useEffect} from 'react';
import {
  useLocation,
  //  useNavigate
} from 'react-router-dom';
// import ProfileLayout from '../components/ProfileLayout';

const Welcome = () => {
  // const navigate = useNavigate();
  const {state} = useLocation();
  const {me, token} = state;
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);
  return (
    // <ProfileLayout
    //   buttonText="손탁에서 카페 찾기"
    //   disabled={false}
    //   onClick={() => {
    //     navigate('/');
    //   }}
    // >
    <ProfileWelcome desc={me.desc} name={me.name} />
    // </ProfileLayout>
  );
};

export default Welcome;
