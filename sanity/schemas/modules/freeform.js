import { defineType } from 'sanity';
import { EditIcon } from '@sanity/icons';
import { getPortableTextPreview } from '../../lib/helpers';

export default defineType({
	title: 'Freeform',
	name: 'freeform',
	type: 'object',
	icon: EditIcon,
	fields: [
		{
			name: 'content',
			type: 'portableText',
		},
		{
			name: 'sectionAppearance',
			type: 'sectionAppearance',
		},
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare({ content }) {
			return {
				title: 'Freeform',
				subtitle: getPortableTextPreview(content),
				media: EditIcon,
			};
		},
	},
});
