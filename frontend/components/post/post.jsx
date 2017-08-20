import React from 'react';
import Modal from '../modal/modal';
import PostEdit from './post_edit';
import { Link } from 'react-router-dom';
import { showModal } from '../../actions/ui_actions';
import { deletePost } from '../../actions/post_actions';
import { connect } from 'react-redux';

class Post extends React.Component {
  constructor(props){
    super(props)

    this.editPost = this.editPost.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  editPost(){
    this.props.showModal(PostEdit, { id: this.props.post.id })
  }

  deletePost(){
    this.props.deletePost(this.props.post.id)
  }

  render(){
    if (this.props.post){
      return(
        <div className="post-detail-container">
          <h3>{this.props.post.title}</h3>
          <div className="post-detail-body" dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
          <Link to={`/posts/${this.props.post.id}`}>
            <button className="button">Go to Post</button>
          </Link>
          <button onClick={this.editPost} className="button">Edit Post</button>
          <button onClick={this.deletePost} className="button">Delete Post</button>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

const mapDispatchToProps = dispatch => {
  return{
    showModal: (component, props) => dispatch(showModal(component, props)),
    deletePost: (props) => dispatch(deletePost(props))
  }
}

export default connect(null, mapDispatchToProps)(Post)
