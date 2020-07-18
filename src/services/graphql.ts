import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client';

localStorage.setItem(
  'authorization',
  'eyJpZCI6Imp0eTRkUUdHV014S21Pa3FYMEtUIiwic2VjcmV0IjoicDhUYnpacTNTdzZKOWUyMHM1MnJwTVlkQklGMlNNWUIifQ==',
);

const httpLink = createHttpLink({
  uri: 'https://api.wecanclub.app/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:
        'eyJpZCI6Imp0eTRkUUdHV014S21Pa3FYMEtUIiwic2VjcmV0IjoicDhUYnpacTNTdzZKOWUyMHM1MnJwTVlkQklGMlNNWUIifQ==',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink as any) as any,
  cache: new InMemoryCache(),
});

export default client;
