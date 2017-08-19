import { connect } from 'react-redux';
import PostDetail from './post_detail'
import { fetchPost } from  '../../actions/post_actions'

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  return {
    postId: postId,
    post: state.posts[postId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
