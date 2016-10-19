import {combineReducers} from 'redux';
var Posts = require('../../data/posts');
var Comments = require('../../data/comments');

const rootReducer = function (state = { posts: Posts, post: Posts[0], comments: Comments}, action) {
  switch (action.type) {
  	case 'GET_POST':
  		return Object.assign({}, state, {post: action.post});
  	case 'GET_POSTS': 
  		return Object.assign({}, state, {posts: action.posts});
  	case 'GET_COMMENTS':
  		return Object.assign({}, state, {comments: action.comments});
    default: 
	    return state;
  }
};

export default rootReducer;
