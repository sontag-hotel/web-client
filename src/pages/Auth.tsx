import {login} from 'stores/auth';
import {useLoginKakaoMutation} from 'generated/graphql';
import {useEffect} from 'react';
import {Navigate, useLocation, useSearchParams} from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const code = searchParams.get('code') || '';
  const [loginKakao, {data, error}] = useLoginKakaoMutation({
    variables: {
      code,
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI!,
    },
  });
  useEffect(() => {
    loginKakao();
  }, [loginKakao]);
  useEffect(() => {
    if (data) {
      login(data.loginKakao.token, data.loginKakao.me);
    }
  }, [data]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const payload = (error?.graphQLErrors[0].extensions.exception as any)
    ?.payload;

  if (payload) {
    if (!payload.accessToken) return <Navigate to="/" replace />;
    else return <Navigate to="/signup" state={payload.accessToken} replace />;
  }

  if (data) {
    return <Navigate to="/" replace />;
  }
  return null;
};
export default Auth;
