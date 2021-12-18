import {ApolloClient, InMemoryCache} from '@apollo/client';
import {isClickedRegisterVar, isClickedThemeVar} from 'stores/cafe';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isClickedTheme() {
            return isClickedThemeVar();
          },
          isClickedRegister() {
            return isClickedRegisterVar();
          },
        },
      },
    },
  }),
});
