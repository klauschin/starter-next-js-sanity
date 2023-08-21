import React from 'react';
import Head from 'next/head';
import { imageBuilder } from '@/sanity/lib/image';

const HeadSharing = ({ site = {}, page = {}, schema }) => {
	const siteTitle = site.title || '';
	const siteFavicon = site.sharing?.favicon || false;
	const siteFaviconUrl = siteFavicon
		? imageBuilder.image(siteFavicon).width(256).height(256).url()
		: '/favicon.png';
	const disableIndex = page?.sharing?.disableIndex;
	const metaTitle =
		page?.isHomepage == true
			? siteTitle
			: `${
					page?.sharing?.metaTitle || page?.title || 'Page not found'
			  } | ${siteTitle}`;
	const metaDesc = page?.sharing?.metaDesc || site.sharing?.metaDesc;
	const shareGraphic =
		page?.sharing?.shareGraphic?.asset || site.sharing?.shareGraphic?.asset;
	const shareGraphicUrl = shareGraphic
		? imageBuilder.image(shareGraphic).width(1200).height(630).url()
		: false;

	return (
		<Head>
			<link rel="icon" type="image/png" href={siteFaviconUrl} />
			<title>{metaTitle}</title>

			{disableIndex && <meta name="robots" content="noindex, nofollow" />}
			<meta name="description" content={metaDesc} />
			<meta property="og:site_name" content={siteTitle} />
			<meta property="og:title" content={metaTitle} />

			{/* og:type = article || profile || website */}
			<meta property="og:type" content="website" />
			<meta property="og:description" content={metaDesc} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={metaTitle} />
			<meta name="twitter:description" content={metaDesc} />

			{shareGraphic && (
				<>
					<meta property="og:image" content={shareGraphicUrl} />
					<meta property="og:image:secure_url" content={shareGraphicUrl} />
				</>
			)}

			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			)}
		</Head>
	);
};

export default HeadSharing;
