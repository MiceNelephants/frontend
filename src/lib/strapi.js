const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getPage(slug) {
  const res = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`
  );
  if (!res.ok) throw new Error('Failed to fetch page');
  const data = await res.json();
  return data.data?.[0] ?? null;
}


export async function getServices() {
  const res = await fetch(`${STRAPI_URL}/api/services?populate=*`);
  const data = await res.json();
  return data.data ?? [];
}

export async function getPartners() {
  const res = await fetch(`${STRAPI_URL}/api/partners?populate=*`);
  const data = await res.json();
  return data.data ?? [];
}
