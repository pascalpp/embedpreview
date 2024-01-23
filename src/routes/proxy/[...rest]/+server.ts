import type { RequestHandler } from './$types';

const regex = /(href|src)="(\.?\/.*)"/g;

const textTypes = [
  'text/html',
  'text/css',
  'text/javascript',
  'application/javascript',
  'application/json',
  'application/xml',
  'application/rss+xml',
  'application/atom+xml',
  'image/svg+xml'
];

// challenge: proxy all requests to a given domain
// images and binary assets should be proxied as-is
// text assets should have their links rewritten to point to the proxy

export const GET: RequestHandler = async ({ params, fetch }) => {
  const url = params.rest;
  console.log('url', url);
  const res = await fetch(url);
  const type = res.headers.get('content-type');
  if (textTypes.includes(type)) {
    const text = await res.text();
    const modified = text.replace(regex, `$1="/proxy/${url}$2"`);
    return new Response(modified, res);
  } else {
    return new Response(res.body, res);
  }
};
