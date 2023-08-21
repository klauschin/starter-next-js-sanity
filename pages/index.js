import Error from 'next/error';
import Link from 'next/link';
import { Module } from '@/components/modules';
import { getHomePageData } from '@/data';

function IndexPage({ data }) {
	const { page } = data || {};

	if (!page) {
		return (
			<Error
				title={
					<Link href="/sanity/desk/settings;general" target="_blank">
						Click to set Hompage
					</Link>
				}
			/>
		);
	}

	return (
		<>
			{page.modules?.map((module, key) => (
				<Module key={key} index={key} module={module} />
			))}
		</>
	);
}

export async function getStaticProps({ preview = {}, previewData }) {
	const pageData = await getHomePageData({
		active: preview,
		token: previewData?.token,
	});

	return {
		props: {
			preview,
			data: pageData,
		},
		revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
	};
}

export default IndexPage;
