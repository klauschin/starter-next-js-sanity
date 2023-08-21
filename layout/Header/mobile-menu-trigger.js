import React from 'react';
import cx from 'classnames';

const MobileMenuTrigger = ({ isMobileMenuOpen, onHandleClick }) => {
	const mobileMenuTriggerSize = 35;

	return (
		<>
			<button
				className={cx('mobile-menu-trigger mobile-down-only', {
					'is-open': isMobileMenuOpen,
				})}
				aria-label="Toggle Menu"
				onClick={onHandleClick}
			>
				<hr />
			</button>

			<style jsx>{`
				.mobile-menu-trigger {
					position: relative;
					width: ${mobileMenuTriggerSize}px;
					height: ${mobileMenuTriggerSize}px;
					margin: ${mobileMenuTriggerSize > 30
						? (30 - mobileMenuTriggerSize) / 2
						: 0}px;
					z-index: 110;
					transition: opacity 0.6s;

					hr,
					&:before,
					&:after {
						content: '';
						display: block;
						position: absolute;
						width: ${mobileMenuTriggerSize}px;
						max-width: 30px;
						height: 2px;
						top: 50%;
						left: 50%;
						transform-origin: center;
						transform: translate(-50%, -50%) rotate(0deg);
						background-color: var(--cr-black);
						transition: 0.2s;
					}

					&:before {
						top: 25%;
					}

					&:after {
						top: 75%;
					}

					hr {
						margin: 0;
						outline: none;
						border: none;
					}

					&.is-open {
						&:before {
							top: 50%;
							transform: translate(-50%, -50%) rotate(45deg);
						}

						&:after {
							top: 50%;
							transform: translate(-50%, -50%) rotate(-45deg);
						}

						hr {
							opacity: 0;
						}
					}
				}
			`}</style>
		</>
	);
};

export default MobileMenuTrigger;
