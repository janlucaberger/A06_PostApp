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
      for(let key in action.posts){
        newState[action.posts[key].id] = action.posts[key]
      }
      return _.merge({}, state, newState)
    case REMOVE_POST:
      for(let post in state){
        if(state[post].id !== action.post.id){
          newState[state[post].id] = state[post]
        }
      }
      return newState;
    default:
      return state;
  }
}

export default postsReducer;
