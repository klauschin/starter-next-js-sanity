import { defineType } from 'sanity';
import customImage from '@/sanity/lib/custom-image';

export default defineType({
	title: 'Rich Text',
	name: 'portableText',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Paragraph', value: 'normal' },
				{
					title: 'Heading 1',
					value: 'h1',
				},
				{
					title: 'Heading 2',
					value: 'h2',
				},
				{
					title: 'Heading 3',
					value: 'h3',
				},
				{
					title: 'Heading 4',
					value: 'h4',
				},
				{
					title: 'Heading 5',
					value: 'h5',
				},
				{
					title: 'Heading 6',
					value: 'h6',
				},
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [
				{ title: 'Bullet', value: 'bullet' },
				{ title: 'Numbered', value: 'number' },
			],
			marks: {
				decorators: [
					{ title: 'Bold', value: 'strong' },
					{ title: 'Italic', value: 'em' },
					{ title: 'Underline', value: 'underline' },
					{ title: 'Strike', value: 'strike-through' },
				],
				annotations: [
					{
						title: 'Link',
						name: 'link',
						type: 'link',
					},
				],
			},
		},
		customImage(),
	],
});
