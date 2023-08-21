// Construct our "home" page GROQ
export const homeID = `*[_type=="settingsGeneral"][0].home->_id`;
export const staticPageSlug = `[]`;

// Construct our "link" GROQ
const link = `
	_type,
	route,
	isButton,
	blank
`;

// Construct our "menu" GROQ
const menu = `
	_key,
	_type,
	title,
	items[]{
		title,
		link {
			${link}
		},
		dropdownItems[]{
			_key,
			title,
			link {
				${link}
			},
		}
	}
`;

// Construct our "image meta" GROQ
export const imageMeta = `
	"alt": coalesce(alt, asset->altText),
	asset,
	crop,
	customRatio,
	hotspot,
	"id": asset->assetId,
	"type": asset->mimeType,
	"width": asset->metadata.dimensions.width,
	"height": asset->metadata.dimensions.height,
	"aspectRatio": asset->metadata.dimensions.aspectRatio,
	"lqip": asset->metadata.lqip
`;

// Construct our "portable text content" GROQ
export const portableTextContent = `
	...,
	markDefs[]{
		...,
		_type == "link" => {
			"url": @.url,
			"isButton": @.isButton,
		}
	},
	_type == "photo" => {
		${imageMeta}
	}
`;

export const button = `
	label,
	link {
		${link}
	}
`;

export const freeformObj = `
	...,
	_type,
	_key,
	content[]{
		${portableTextContent}
	},
	sectionAppearance
`;

// Construct our "blocks" GROQ
export const blocks = `
	_type == 'freeform' => {
		${freeformObj}
	},
	_type == 'accordionList' => {
		_type,
		_key,
		items[]{
			"id": _key,
			title,
			content[]{
				${portableTextContent}
			}
		}
	}
`;

// Construct our content "modules" GROQ
export const modules = `
	_type == 'marquee' => {
		_type,
		_key,
		items[]{
			_type == 'simple' => {
				_type,
				text
			},
			_type == 'photo' => {
				_type,
				"image": {
					${imageMeta}
				}
			}
		},
		speed,
		reverse,
		pausable
	},
	_type == 'freeform' => {
		${freeformObj}
	}
`;

// Construct our "site" GROQ
export const site = `
	"site": {
		"title": *[_type == "settingsGeneral"][0].siteTitle,
		"cookieConsent": *[_type == "gCookie"][0]{
			enabled,
			message,
			"link": link->{"type": _type, "slug": slug.current}
		},
		"announcement": *[_type == "gAnnouncement"][0]{
			display,
			messages,
			autoplay,
			autoplay_interval,
			backgroundColor,
			textColor,
			emphasizeColor,
			"link": ${link}
		},
		"header": *[_type == "gHeader"][0]{
			menu->{
				${menu}
			}
		},
		"footer": *[_type == "gFooter"][0]{
			menu->{
				${menu}
			},
			menuLegal->{
				${menu}
			},
			"siteCopyright": *[_type == "gFooter"][0].siteCopyright
		},
		"sharing": *[_type == "settingsSharing"][0]{
			metaTitle,
			metaDesc,
			shareGraphic,
			favicon
		},
		"integrations": *[_type == "settingsIntegration"][0]{
			gtmID,
			gaID,
			KlaviyoApiKey,
		},
	}
`;
