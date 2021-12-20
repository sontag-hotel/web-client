import {ApolloClient, InMemoryCache, from, HttpLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

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
export const client = new ApolloClient({
  uri: 'http://localhost:4000/v1/graphql',
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
});
