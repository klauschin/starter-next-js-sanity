import React from 'react';
import Head from 'next/head';

const HeadMetaAndPreload = () => {
	return (
		<Head>
			<meta
				httpEquiv="Content-Type"
				charSet="UTF-8"
				content="text/html;charset=utf-8"
			/>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
			/>
			<link rel="preconnect" href="https://cdn.sanity.io" />

			{/*  Preload font files */}
			{/* <link
				rel="preload"
				href="/fonts/font-aw-conqueror-light.ttf"
				as="font"
			/> */}
		</Head>
	);
};

export default HeadMetaAndPreload;
