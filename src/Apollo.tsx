import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

//export const isLoggedIn = makeVar(false);
//더미데이터
export const selectedThemeVar = makeVar([
  {
    title: '센터커피 서울숲점',
    address: '서울 성동구 서울숲2길 28-11 1층',
    location: {longitude: '37.546541849098304', latitude: '127.048963363388'},
  },
  {
    title: '이월 커피로스터스',
    address: '서울 송파구 백제고분로45길 14',
    location: {longitude: '37.5096875273204', latitude: '127.11001081659107'},
  },
]);
//

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
