import { connect } from 'react-redux';
import PostDetail from './post_detail'
import { fetchPost } from  '../ations/post_actions'

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    // post: state.posts[ownProps.location.match]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
