import * as ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";

export const receiveAllPosts = (posts) => {
	return {
    type: RECEIVE_ALL_POSTS,
    posts,
	};
};

export const fetchAllPosts = () => dispatch => {
	return ApiUtil.fetchAllPosts()
		.then((posts) => dispatch(receiveAllPosts(posts)))
}
