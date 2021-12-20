import { asNexusMethod } from 'nexus';
import { GraphQLDateTime } from 'graphql-iso-date';

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date');
