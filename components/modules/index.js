import React from 'react';
import dynamic from 'next/dynamic';

const Freeform = dynamic(() => import('./Freeform'));
const Marquee = dynamic(() => import('./Marquee'));

export const Module = ({ index, module }) => {
	const type = module._type;

	switch (type) {
		case 'freeform':
			return <Freeform data={module} />;
		case 'marquee':
			return <Marquee data={module} />;

		default:
			return null;
	}
};
