import React from 'react';

export default ({ src,  altText }) => (
	<figure>
		<img src={ src } alt={ altText } />
		<figcaption className="fig-caption text-xs-left">{ altText }</figcaption>
	</figure>
);
