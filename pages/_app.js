import '@/styles/scss/main.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/layout';

import useScrollRestoration from '@/hooks/useScrollRestoration';
import * as gtag from '@/lib/gtag';
import { siteSetup, vs } from '@/hooks/useVsSetup';
import useWindowDimensions from '@/hooks/useWindowDimensions';

function App({ Component, pageProps }) {
	const { data } = pageProps;
	const { page, site } = data || {};
	const router = useRouter();
	// const { height, width } = useWindowDimensions();
	// const { isMobileScreen } = vs();

	useScrollRestoration(router);

	useEffect(() => {
		siteSetup();
	}, []);

	useEffect(() => {
		const handleRouteChangeComplete = (url) => {
			if (site?.integrations?.gaID) {
				gtag.pageview(url, site?.integrations?.gaID);
			}
		};

		router.events.on('routeChangeComplete', handleRouteChangeComplete);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
		};
	}, [router.events, site]);

	useEffect(() => {
		if (page && page.slug) {
			document.documentElement.className = `template-${page.slug}`;
		}
	}, [page]);

	if (router.pathname.startsWith('/sanity')) {
		return <Component {...pageProps} />;
	}

	return (
		<>
			<Layout siteData={data.site} pageData={data.page}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default App;
