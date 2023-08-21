import { defineType } from 'sanity';
import { LinkInput } from '@/sanity/component/LinkInput';

export default defineType({
	title: 'Link',
	name: 'link',
	type: 'object',
	fields: [
		{
			type: 'string',
			title: 'URL',
			name: 'route',
			components: {
				input: LinkInput,
			},
		},
		{
			title: 'Is Button',
			name: 'isButton',
			type: 'boolean',
			initialValue: false,
		},
		{
			title: 'Open in new tab',
			name: 'blank',
			type: 'boolean',
			initialValue: false,
		},
	],
});
