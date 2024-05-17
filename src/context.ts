import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

const prisma = (db: D1Database) => {
	const adapter = new PrismaD1(db);
	return new PrismaClient({ adapter });
};

export type Context = {
	db: PrismaClient;
};

export const createContext = (db: D1Database): Context => {
	return {
		db: prisma(db),
	};
};
