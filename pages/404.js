import React from 'react';

import CustomLink from '@/components/CustomLink';
import BlockContent from '@/components/CustomPortableText';
import { get404PageData } from '@/data';

const NotFoundPage = ({ data }) => {
	const { page } = data || {};
	const { paragraph, heading, cta } = page || {};

	return (
		<>
			<div className="page-404 f-v f-j-c">
				<div className="c-4 wysiwyg">
					<h1>{heading || 'Page not found'}</h1>
					{paragraph && (
						<BlockContent className="paragraph" blocks={paragraph} />
					)}
					{cta && (
						<CustomLink
							link={{
								...cta.link,
								...{ title: cta.label },
							}}
						/>
					)}
				</div>
			</div>

			<style jsx>
				{`
					.page-404 {
						min-height: var(--s-main-min-height);
						padding: var(--s-section) 0;
						text-align: center;
					}
				`}
			</style>
		</>
	);
};

export async function getStaticProps({ preview, previewData }) {
	const pageData = await get404PageData({
		active: preview,
		token: previewData?.token,
	});

	return {
		props: {
			data: pageData,
		},
		revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
	};
}

export default NotFoundPage;
