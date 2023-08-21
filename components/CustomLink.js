import cx from 'classnames';
import NextLink from 'next/link';
import React from 'react';

import { getLinkRouteObject } from '@/lib/routes';

const CustomLink = ({
	link,
	isBlank,
	children,
	className,
	ariaLabel,
	...rest
}) => {
	if (!link.route) {
		return null;
	}
	const { route, isButton, pageTitle } = getLinkRouteObject(link);
	const { url } = route;

	return (
		<NextLink
			href={url}
			scroll={false}
			target={url?.match('^mailto:') && isBlank ? '_blank' : null}
			rel={isBlank ? 'noopener noreferrer' : null}
			aria-label={ariaLabel || `Go to ${url}`}
			className={cx(className, {
				btn: isButton,
			})}
			{...rest}
		>
			{pageTitle || children}
		</NextLink>
	);
};

export default CustomLink;
