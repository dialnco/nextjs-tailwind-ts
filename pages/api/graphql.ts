import { PageConfig } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { createContext } from '@/graphql/context';

// check if credentials working on studio
const graphqlStudioConfigs = { origin: 'https://studio.apollographql.com', allowCredentials: true };
const cors = Cors(graphqlStudioConfigs);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};
