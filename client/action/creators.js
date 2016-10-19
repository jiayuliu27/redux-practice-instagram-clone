const GET_POSTS = 'GET_POSTS';
const GET_COMMENTS = 'GET_COMMENTS';
const GET_POST = 'GET_POST';

export const displayPosts = posts => ({
	type: GET_POSTS,
	posts
});

export const displayPost = post => ({
	type: GET_POST,
	post
});

export const displayComments = comments => ({
	type: GET_COMMENTS,
	comments
})