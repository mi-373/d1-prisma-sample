import { builder } from '../builder';

builder.queryFields((t) => ({
	user: t.prismaField({
		type: 'User',
		nullable: true,
		resolve: async (query, root, args, ctx, info) => {
			return (await ctx.db.user.findMany())[0];
		},
	}),
}));
