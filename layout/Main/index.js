import React from 'react';
import { useRouter } from 'next/router';
import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
} from 'framer-motion';
import { getUrlBaseAndPath } from '@/lib/helpers';
import { pageTransitionFade } from '@/lib/animate';

export default function Main({ children, siteData = {} }) {
	const router = useRouter();

	return (
		<>
			<LazyMotion features={domAnimation}>
				<AnimatePresence mode="wait">
					<motion.main
						id="main"
						key={getUrlBaseAndPath(router.asPath)}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={pageTransitionFade}
					>
						{children}
					</motion.main>
				</AnimatePresence>
			</LazyMotion>
		</>
	);
}
