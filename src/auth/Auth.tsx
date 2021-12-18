import {
  // LoginKakaoMutation,
  // MeQuery,
  useLoginKakaoMutation,
  // useMeQuery,
} from 'generated/graphql';
import {
  createContext,
  FC,
  useEffect,
  //  useState
} from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Kakao: any;
type Error = {
  payload: {
    accessToken?: string;
  };
};

type AuthContextType = {
  loginKakao: () => Promise<void>;
  error: Error | undefined;
  // data: LoginKakaoMutation | null | undefined;
  // error: {token: string | undefined};
  // loading: boolean;
  // me: MeQuery | null;
};

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: FC = ({children}) => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const code = searchParams.get('code') || '';
  const [mutaion, {error, data}] = useLoginKakaoMutation({
    variables: {
      code,
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI!,
    },
  });
  useEffect(() => {
    if (code) {
      mutaion();
    }
  }, [mutaion, code]);
  useEffect(() => {
    if (data) {
      console.log('setToken');
    }
  }, [data]);

  // const token = localStorage.getItem('token');
  // const [me, setMe] = useState<MeQuery | null>(null);

  // useEffect(() => {
  //   if (data) {
  //     localStorage.setItem('token', data.loginKakao.token);
  //   }
  // }, [data]);
  // const {data: meQuery} = useMeQuery({
  //   context: {
  //     Headers: {
  //       authorization: token,
  //     },
  //   },
  //   skip: !token,
  // });
  // useEffect(() => {
  //   if (meQuery) {
  //     setMe(meQuery);
  //   }
  // }, [meQuery]);

  const value = {
    // data,
    // loading,
    // error: error
    //   ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     (error.graphQLErrors[0].extensions.exception as any).payload
    //   : {},
    // me,
    loginKakao,
    error: error && (error.graphQLErrors[0].extensions.exception as Error),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
const loginKakao = async () => {
  Kakao.Auth.authorize({
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });
};
