// determine if current page is active or not
export const getActive = (pageSlug, router) => {
	const slugs = [].concat(router.query.slug);
	const currentPath = slugs
		? slugs.join('/')
		: router.asPath.replace(/^\//g, '');
	return currentPath == pageSlug;
};

export const getRoute = ({ type, slug }) => {
	switch (type) {
		case 'pDefault':
			return `/${slug}`;
		case 'articlePage':
			return `article/${slug}`;
		case 'externalUrl':
			return slug;

		default:
			break;
	}
};

export const getLinkRouteObject = (link) => {
	if (!link) return '';

	return {
		...link,
		route: link && link?.route ? JSON.parse(link.route) : '',
	};
};
