import { colorInput } from '@sanity/color-input';
import {
	dashboardTool,
	projectInfoWidget,
	sanityTutorialsWidget,
} from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media';

import Logo from '@/sanity/branding/Logo';
import deskStructure from '@/sanity/deskStructure';
import { apiVersion, dataset, previewSecretId, projectId } from '@/sanity/env';
import schemas from '@/sanity/schemas/schema';

export default defineConfig({
	basePath: '/sanity',
	title: '[Starter]',
	projectId,
	dataset,
	plugins: [
		dashboardTool({
			widgets: [sanityTutorialsWidget(), projectInfoWidget()],
		}),
		deskTool({
			structure: deskStructure,
		}),
		media(),
		visionTool(),
		colorInput(),
	],
	schema: {
		types: schemas,
	},

	studio: {
		components: {
			logo: Logo,
		},
	},
});
