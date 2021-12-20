import Pages from './pages';
import {GlobalStyle} from './styles';
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {makeVar} from '@apollo/client';
import {LoginKakaoMutation} from 'generated/graphql';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/v1/graphql/',
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) =>
      console.dir(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Kakao: any;

export const loginKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });
};
export const login = (
  token: string,
  me: LoginKakaoMutation['loginKakao']['me']
) => {
  localStorage.setItem('token', token);
  tokenVar(token);
  localStorage.setItem('me', JSON.stringify(me));
  meVar(me);
};
export const logout = () => {
  localStorage.setItem('token', '');
  tokenVar('');
  localStorage.setItem('me', '');
  meVar(undefined);
};
export const update = (me: LoginKakaoMutation['loginKakao']['me']) => {
  localStorage.setItem('me', JSON.stringify(me));
  meVar(me);
};

export const tokenVar = makeVar(localStorage.getItem('token'));
export const meVar = makeVar<LoginKakaoMutation['loginKakao']['me']>(
  JSON.parse(localStorage.getItem('me') || JSON.stringify(''))
);
// export const login = makeVar((token: string) => {
//   localStorage.setItem('token', token);
// });
