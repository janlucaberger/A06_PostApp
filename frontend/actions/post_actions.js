import * as ApiUtil from '../util/api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "RECEIVE_POST";

export const receivePost = (post) => {
	return {
    type: RECEIVE_POST,
    post,
	};
};

export const removePost = (post) => {
	return {
    type: REMOVE_POST,
    post,
	};
};

export const createPost = (post) => dispatch => {
	return ApiUtil.createPost(post)
		.then((post) => dispatch(receivePost(post)))
}

export const fetchPost = (postId) => dispatch => {
	return ApiUtil.fetchPost(postId)
		.then((post) => dispatch(receivePost(post)))
}

export const upDatePost = (post) => dispatch => {
	return ApiUtil.deletePost(post)
		.then((post) => dispatch(receivePost(post)))
}

export const deletePost = (postId) => dispatch => {
	return ApiUtil.deletePost(postId)
		.then((post) => dispatch(removePost(post)))
}
