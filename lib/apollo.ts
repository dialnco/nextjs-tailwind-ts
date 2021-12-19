import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_DEPLOY_URL
    ? `${process.env.NEXT_DEPLOY_URL}/api/graphql`
    : 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
});

export default apolloClient;
