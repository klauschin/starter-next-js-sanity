import { getSanityClient } from '@/sanity/lib/client';

import * as queries from './queries';

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
	const data = await getSanityClient().fetch(
		`*[_type == "${doc}" && !(_id in [
			${queries.homeID}]) && wasDeleted != true && isDraft != true]{ "slug": slug.current
		}`
	);

	return data;
}

// Fetch all our page redirects
export async function getAllRedirects() {
	const data = await getSanityClient().fetch(
		`*[_type == "redirect"]{ from, to }`
	);
	return data;
}

export async function getCustomPages(pageData, preview) {
	const pageQueryData = pageData;
	const query = `
		{
			"page": ${pageQueryData},
			${queries.site}
		}
	`;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

export async function getHomePageData(preview) {
	const pageQueryData = `*[_type == "pDefault" && _id == ${queries.homeID}] | order(_updatedAt desc)[0]{
			title,
			"slug": slug.current,
			sharing,
			"isHomepage": true,
			modules[]{
				${queries.modules}
			},
		}`;
	const query = `
		{
			"page": ${pageQueryData},
			${queries.site}
		}
	`;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

export async function get404PageData(preview) {
	const pageQueryData = `*[_type == "page404" && _id == "page404"] | order(_updatedAt desc)[0]{
			heading,
			"slug": "404",
			sharing,
			paragraph[]{
				${queries.portableTextContent}
			},
			cta{
				${queries.button}
			}
		}`;
	const query = `
		{
			"page": ${pageQueryData},
			${queries.site}
		}
	`;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
	const slugs = [`/${slug}`, slug, `/${slug}/`];

	const query = `
		{
			"page": *[_type == "pDefault" && slug.current in ${JSON.stringify(
				slugs
			)} && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0]{
				title,
				"slug": slug.current,
				sharing,
				modules[]{
					${queries.modules}
				},
			},
			${queries.site}
		}
	`;

	const data = await getSanityClient(preview).fetch(query);

	return data;
}

export { queries };
