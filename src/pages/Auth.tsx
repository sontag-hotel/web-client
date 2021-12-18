// import ProfileContainer from 'containers/ProfileContainer';

import {useAuth} from 'hooks';
import {Navigate} from 'react-router-dom';
// import {Navigate} from 'react-router-dom';

// import {Navigate} from 'react-router-dom';
const Auth = () => {
  const {error} = useAuth();
  if (error) {
    if (error.payload.accessToken)
      return (
        <Navigate to="/signup" state={error.payload.accessToken} replace />
      );
    else return <Navigate to="/" />;
  }

  // return <Navigate to="/" />;
  return null;
};
export default Auth;
