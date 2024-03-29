import { UnknownIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
	title: 'Page 404',
	name: 'page404',
	type: 'document',
	icon: UnknownIcon,
	fields: [
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
		},
		{
			title: 'Paragraph',
			name: 'paragraph',
			type: 'portableTextSimple',
		},
		{
			title: 'Call to Action',
			name: 'cta',
			type: 'button',
		},
		{
			title: 'SEO + Share Settings',
			name: 'sharing',
			type: 'sharing',
		},
	],
});
