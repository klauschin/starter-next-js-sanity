import cx from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import CustomLink from '@/components/CustomLink';
import { getActive, getLinkRouteObject } from '@/lib/routes';

const MenuDropdown = ({ title, items, onClick }) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={cx('dropdown', { 'is-open': isOpen })}>
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
					className="dropdown-toggle"
				>
					{title}
				</button>
				<div className="dropdown-content">
					<ul className="dropdown-nav">
						{items.map((item, key) => {
							const isActive = getActive(
								getLinkRouteObject(item.link)?.slug,
								router
							);

							return (
								<li
									key={key}
									className={cx('t-l-2', { 'is-active': isActive })}
								>
									<CustomLink
										tabIndex={!isOpen ? -1 : null}
										link={item.link}
										onClick={onClick}
									>
										{item.title}
									</CustomLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<style jsx>{`
				.dropdown {
					&.is-open {
						.dropdown-content {
							opacity: 1;
							pointer-event: auto;
						}
					}
				}
				.dropdown-content {
					opacity: 0;
					pointer-event: none;
				}
				.dropdown-nav {
					position: absolute;
				}
			`}</style>
		</>
	);
};

export default MenuDropdown;
