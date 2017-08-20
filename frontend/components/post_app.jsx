import React from 'react';
import PostDetail from './post/post_detail';
import { Route } from 'react-router-dom';
import PostsList from './posts/posts_list';
import PostCreate from './post/post_create';
import Modal from './modal/modal';

const PostApp = () => {
  return (
    <div>
      <Route exact path="/posts/:postId" component={PostDetail} />
      <Route exact path="/" component={PostsList} />
    </div>
  )
}

export default PostApp
