import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (context) => {
  const countValue = await context.env.CVF.get('count');
	return new Response(`Hello ${countValue}`);
};
