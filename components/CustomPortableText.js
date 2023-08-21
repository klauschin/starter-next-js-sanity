import { PortableText } from '@portabletext/react';
import React from 'react';
import CustomLink from '@/components/CustomLink';
import Image from '@/components/Image';

const PortableTextComponents = {
	block: {
		h1: ({ children }) => <h1>{children}</h1>,
		h2: ({ children }) => <h2>{children}</h2>,
		h3: ({ children }) => <h3>{children}</h3>,
		h4: ({ children }) => <h4>{children}</h4>,
		h5: ({ children }) => <h5>{children}</h5>,
		h6: ({ children }) => <h6>{children}</h6>,
	},
	list: {
		bullet: ({ children }) => <ul>{children}</ul>,
		number: ({ children }) => <ol>{children}</ol>,
	},
	types: {
		image: (data) => {
			const { value } = data;
			return <Image image={value} />;
		},
		table: ({ node }) => (
			<table>
				<tbody>
					{node?.rows.map((row) => (
						<tr key={row._key}>
							{row?.cells.map((cell, index) => (
								<td key={row._key + index}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		),
	},
	marks: {
		link: ({ value, children }) => {
			return (
				<CustomLink
					link={{ ...value, title: children[0] }}
					ariaLabel={children[0]}
				/>
			);
		},
	},
};

const CustomPortableText = ({ blocks }) => {
	if (!blocks) return null;

	return <PortableText value={blocks} components={PortableTextComponents} />;
};

export default CustomPortableText;
