import React from 'react';
import { connect } from 'react-redux';
import Post from '../post/post';
import PostCreate from '../post/post_create';
import { fetchAllPosts } from '../../actions/posts_actions'
import { showModal } from '../../actions/ui_actions'
import { getAllPosts } from '../../reducers/selectors.js';
import Modal from '../modal/modal';

class PostsList extends React.Component {

  componentDidMount(){
    this.props.fetchAllPosts()
  }

  render(){

    const posts = this.props.posts.map((post) => {
      return(
        <Post key={post.id} post={post} />
      )
    })

    return (
      <div>
        <PostCreate />
        { posts }
        <Modal component={this.props.modal_component} props={this.props.modal_props}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    posts: getAllPosts(state),
    modal_component: state.ui.modal.component,
    modal_props: state.ui.modal.props,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    showModal: () => dispatch(showModal())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
