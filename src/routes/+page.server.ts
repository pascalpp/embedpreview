import type { PageServerLoad } from './$types';

export const load = (async ({ url, fetch }) => {
  const previewUrl = url.search.slice(1);
  const res = await fetch(`/proxy/${previewUrl}`);
  return {
    url: previewUrl,
    content: res.text()
  };
}) satisfies PageServerLoad;
