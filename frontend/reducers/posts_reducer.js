import _ from 'lodash';

import { RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_ALL_POSTS } from '../actions/posts_actions';

const postsReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POST:
      return _.merge({}, state, { [action.post.id]: action.post } )

    case RECEIVE_ALL_POSTS:
      for(post in action.posts){
        newState[action.posts[post].id] = action.posts[post]
      }

      return _.merge({}, state, newState)
    case REMOVE_POST:
    default:
      return state;
  }
}

export default postsReducer;
