import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions'

class PostDetail extends React.Component {

  componentDidMount(){
    this.props.fetchPost(this.props.postId)
  }

  render(){
    if (this.props.post){
      return(
        <div className="post-detail-container">
          <h3>{this.props.post.title}</h3>
          <div className="post-detail-body" dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
          <Link to="/">
            <button className="button">Back to posts</button>
          </Link>
        </div>
      )
    } else {
      return <div></div>
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId
  return{
    post: state.posts[postId],
    postId: postId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
