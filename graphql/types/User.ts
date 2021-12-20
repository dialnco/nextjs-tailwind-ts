import { objectType, extendType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('email');
    t.date('emailVerified');
    t.string('image');
    t.date('createdAt');
    t.date('updatedAt');
  }
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      }
    });
    t.field('me', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        // if (!ctx.session) {
        //   throw new Error('Not authenticated');
        // }
        if (!ctx.session?.userId) return null;

        return ctx.prisma.user.findUnique({
          where: { id: ctx.session.userId }
        });
      }
    });
  }
});
