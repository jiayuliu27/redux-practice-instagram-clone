import React from 'react';
import PhotoContainer from '../containers/PhotoContainer';

export default ({ post }) => {
	return (
		<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-post well">
			<PhotoContainer src={ post.display_src } altText={ post.caption } />
			<button className="btn btn-default">
				<i className="glyphicon glyphicon-heart"></i>
			</button>
			<button className="btn btn-default">
				<i className="glyphicon glyphicon-comment"></i>
			</button>
		</div>
	);
};