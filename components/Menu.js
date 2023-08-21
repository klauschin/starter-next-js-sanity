import cx from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import CustomLink from '@/components/CustomLink';
import Dropdown from '@/components/MenuDropdown';
import { getActive, getLinkRouteObject } from '@/lib/routes';

const Menu = ({
	items,
	hasFocus = true,
	onClick,
	className,
	ulClassName,
	...rest
}) => {
	const router = useRouter();

	if (!items) return null;

	return (
		<div className={className || ''}>
			<ul className={ulClassName || ''} {...rest}>
				{items.map((item, key) => {
					const { link, dropdownItems } = item || {};
					const isDropdown = !!dropdownItems;

					if (isDropdown) {
						const activeDropdown =
							dropdownItems.filter((item) => {
								return getActive(getLinkRouteObject(item.link)?.slug, router);
							}).length > 0;

						return (
							<li
								key={item._key}
								className={cx({ 'is-active': activeDropdown })}
							>
								<Dropdown
									title={item.title}
									items={item.dropdownItems}
									onClick={onClick}
								/>
							</li>
						);
					}

					if (!link?.route) {
						return null;
					}

					const isActive = getActive(getLinkRouteObject(link)?.slug, router);

					return (
						<li key={key} className={cx({ 'is-active': isActive })}>
							<CustomLink
								tabIndex={!hasFocus ? -1 : null}
								link={link}
								onClick={onClick}
								ariaLabel={item.title}
								isBlank={item.blank}
							>
								{item.title}
							</CustomLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Menu;
