import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    emailVerified: String
    image: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User]!
    me: User!
  }
`;
