import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import type { Context } from './context';
import dmmf from './generated/dmmf.json';

export const builder = new SchemaBuilder<{
	PrismaTypes: PrismaTypes;
	Context: Context;
}>({
	plugins: [PrismaPlugin],
	prisma: {
		client: (ctx) => ctx.db,
		dmmf: dmmf,
	},
});

builder.queryType();
// builder.mutationType();
