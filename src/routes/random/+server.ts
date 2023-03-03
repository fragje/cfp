import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
  // return new Response(String(Math.random()));
  return new Response('Hello world');
}) satisfies RequestHandler;
