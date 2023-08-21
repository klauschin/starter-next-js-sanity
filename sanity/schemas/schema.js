// Document types
import settingsBrandColors from './documents/settings-color';
import settingsGeneral from './documents/settings-general';
import settingsIntegration from './documents/settings-integrations';
import settingsMenu from './documents/settings-menu';
import settingsSharing from './documents/settings-sharing';
import gAnnouncement from './documents/g-announcement';
import gCookie from './documents/g-cookie';
import gFooter from './documents/g-footer';
import gHeader from './documents/g-header';
import pDefault from './documents/p-default';
import p404 from './documents/p-404';
// Module types
import freeform from './modules/freeform';
import marquee from './modules/marquee';
import newsletter from './modules/newsletter';
// Object types
import link from './objects/link';
import navItem from './objects/nav-item';
import navDropdown from './objects/nav-dropdown';
import sharing from './objects/sharing';
import sectionAppearance from './objects/sectionAppearance';
import socialLink from './objects/social-link';
import accordion from './objects/accordion';
import accordionList from './objects/accordion-list';
import button from './objects/button';
import portableText from './objects/portable-text';
import portableTextSimple from './objects/portable-text-simple';

const schemas = [
	settingsMenu,
	settingsBrandColors,
	settingsGeneral,
	settingsIntegration,
	settingsSharing,

	gAnnouncement,
	gHeader,
	gFooter,
	gCookie,
	pDefault,
	p404,

	/*  MODULE TYPES  */
	freeform,
	marquee,
	newsletter,

	/*  OBJECT TYPES  */
	link,
	navItem,
	navDropdown,
	sharing,
	sectionAppearance,
	socialLink,
	accordion,
	accordionList,
	button,
	portableText,
	portableTextSimple,
];

export default schemas;
