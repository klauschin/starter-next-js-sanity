import { HomeIcon, MasterDetailIcon, UnknownIcon } from '@sanity/icons';
import { Card, Stack, Text } from '@sanity/ui';
import React from 'react';

import { sanityClient } from '@/sanity/lib/client';

const EmptyNotice = ({ title, type, link, linkTitle }) => {
	if (!title || !type || !link || !linkTitle) return null;

	return (
		<Card padding={4}>
			<Card padding={[5]} radius={2} shadow={1} tone="critical">
				<Stack space={[3]}>
					<Text align="center" size={[2]} weight="semibold">
						The {title} has not been set.
					</Text>
					<Text align="center" size={[2]}>
						Set your {title} from the <a href={link}>{linkTitle}</a>
					</Text>
				</Stack>
			</Card>

			<Stack padding={3} space={[3]}>
				<Text align="center" muted size={[1]}>
					Don't have a {type} yet? Create one now
				</Text>
			</Stack>
		</Card>
	);
};

// Extract our home page
const currentHomePage = (S) => {
	return S.listItem()
		.title('Home Page')
		.icon(HomeIcon)
		.child(async () => {
			const data = await sanityClient.fetch(
				`*[_type == "settingsGeneral"][0]{ home->{_id} } `
			);

			if (!data?.home) {
				return S.component(() => (
					<EmptyNotice
						title="Home Page"
						type="page"
						link="settings;general"
						linkTitle="General Settings"
					/>
				)).title('Home Page');
			}
			return S.document().id(data.home._id).schemaType('pDefault');
		});
};

// Extract our error page
const currentErrorPage = (S) => {
	return S.listItem()
		.title('404 Page')
		.child(
			S.editor()
				.id('page404')
				.title('404 Page')
				.schemaType('page404')
				.documentId('page404')
		)
		.icon(UnknownIcon);
};

export const pagesMenu = (S) => {
	return S.listItem()
		.title('Pages')
		.id('pages')
		.icon(MasterDetailIcon)
		.child(
			S.list()
				.title('Pages')
				.items([
					currentHomePage(S),
					currentErrorPage(S),
					S.listItem()
						.title('Other Pages')
						.schemaType('pDefault')
						.child(
							S.documentTypeList('pDefault')
								.title('Other Pages')
								.filter(
									`_type == "pDefault" && !(_id in [
                *[_type == "settingsGeneral"][0].home._ref,
                *[_type == "settingsGeneral"][0].error._ref ])`
								)
								.child((documentId) =>
									S.document().documentId(documentId).schemaType('pDefault')
								)
								.canHandleIntent(
									(intent, { type }) =>
										['create', 'edit'].includes(intent) && type === 'pDefault'
								)
						),
				])
		);
};
