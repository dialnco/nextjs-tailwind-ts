export const resolvers = {
  Query: {
    users: (_parent, _args, ctx) => {
      return ctx.prisma.user.findMany();
    },
    me: (_parent, _args, ctx) => {
      if (!ctx.session) {
        throw new Error('Not authenticated');
      }
      return ctx.prisma.user.findUnique({
        where: { id: ctx.session.userId }
      });
    }
  }
};
