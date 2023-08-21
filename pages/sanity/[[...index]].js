import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { metadata } from 'next-sanity/studio/metadata';
import { StudioLayout, StudioProvider } from 'sanity';
import { createGlobalStyle } from 'styled-components';

import config from '@/sanity.config';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
	html: { backgroundColor: theme.sanity.color.base.bg },
	body: { margin: '0' },
}));

const siteFavicon = '/favicon.png';

export default function StudioPage() {
	return (
		<>
			<Head>
				<link rel="icon" type="image/png" href={siteFavicon} />
				{Object.entries(metadata).map(([key, value]) => (
					<meta key={key} name={key} content={value} />
				))}
			</Head>
			<div className="sanity-studio-root">
				<NextStudio config={config}>
					<StudioProvider config={config}>
						<GlobalStyle />
						{/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
						<StudioLayout />
					</StudioProvider>
				</NextStudio>
			</div>
			<style global jsx>{`
				.sanity-studio-root button[aria-label='Create new document'] {
					display: none;
				}
			`}</style>
		</>
	);
}
