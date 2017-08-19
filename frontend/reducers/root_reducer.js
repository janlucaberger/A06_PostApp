import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  ui: uiReducer
})

export default rootReducer;
