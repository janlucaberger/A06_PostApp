import { connect } from 'react-redux'
import { createPost, updatePost } from '../../actions/post_actions'
import { hideModal} from '../../actions/ui_actions'
import PostEdit from './_post_form'

const mapStateToProps = state => {
  const postId = state.ui.modal.props.id;
  return {
    id: postId,
    title: state.posts[postId].title,
    body: state.posts[postId].body,
    buttonText: "Edit Post",
    afterAction: true
  }
}
const mapDispatchToProps = dispatch => {
  return {
    formAction: (post) => dispatch(updatePost(post)),
    successAction: () => dispatch(hideModal())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
