import React from 'react';
import SinglePostContainer from '../containers/SinglePostContainer';

// export default ({ posts }) => (
// 	{ posts.map( (post) => (
// 		<div>{ post.id }</div>
// 	))}
// );

export default ({ posts }) => {
	return (<div className="row">
		{ posts.map((post) => (
			<SinglePostContainer post={ post }  key={ post.id }/>
		)) }
	</div>);
};