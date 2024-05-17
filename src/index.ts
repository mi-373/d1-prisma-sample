/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';

export interface Env {
	DB: D1Database;
}

const yoga = createYoga({ schema });

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const context = createContext(env.DB);
		return yoga(request, context);
	},
} satisfies ExportedHandler<Env>;
