import { createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const getURL = (): string => {
  const { NEXT_DEPLOY_URL } = process.env; // set url on production env
  return NEXT_DEPLOY_URL ? `${NEXT_DEPLOY_URL}/api/graphql` : 'http://localhost:3000/api/graphql';
};

const urqlClient = createClient({
  url: getURL(),
  exchanges: [dedupExchange, cacheExchange(), fetchExchange],
  fetchOptions: {
    credentials: 'include'
  },
  requestPolicy: `cache-and-network`
});

export default urqlClient;
