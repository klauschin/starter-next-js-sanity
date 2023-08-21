import { defineType } from 'sanity';
import { EditIcon } from '@sanity/icons';
import { getPortableTextPreview } from '../../lib/helpers';

export default defineType({
	title: 'Announcement Settings',
	name: 'gAnnouncement',
	type: 'document',
	fields: [
		{
			title: 'Display',
			name: 'display',
			type: 'string',
			options: {
				list: [
					{ title: 'Hidden', value: 'hidden' },
					{ title: 'All Pages', value: 'all' },
					{ title: 'Home Page', value: 'homepage' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
		},
		{
			name: 'messages',
			title: 'Messages',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Content',
							name: 'content',
							type: 'portableTextSimple',
						},
					],
					preview: {
						select: {
							content: 'content',
						},
						prepare({ content }) {
							return {
								title: getPortableTextPreview(content),
								media: EditIcon,
							};
						},
					},
				},
			],
		},
		{
			title: 'Autoplay',
			description: 'Automatically switch between messages',
			name: 'autoplay',
			type: 'boolean',
		},
		{
			title: 'Autoplay Interval',
			description: 'Interval in seconds',
			name: 'autoplay_interval',
			type: 'number',
			hidden: ({ parent }) => !parent.autoplay,
			validation: (Rule) => Rule.required().min(2).max(20),
		},
		{
			title: 'Background Color',
			name: 'backgroundColor',
			type: 'color',
			options: {
				disableAlpha: true,
			},
		},
		{
			title: 'Text Color',
			name: 'textColor',
			type: 'color',
			options: {
				disableAlpha: true,
			},
		},
		{
			title: 'Emphasize Color',
			name: 'emphasizeColor',
			type: 'color',
			options: {
				disableAlpha: true,
			},
		},
	],
	initialValue: {
		display: 'hidden',
	},
	preview: {
		prepare() {
			return {
				title: 'Announcement Settings',
			};
		},
	},
});
