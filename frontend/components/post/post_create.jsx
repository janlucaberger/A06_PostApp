import { connect } from 'react-redux'
import { createPost } from '../../actions/post_actions'
import PostCreate from './_post_form';

const mapStateToProps = state => {
  return {
    title: "",
    body: "",
    id: null,
    buttonText: "Create Post",
    afterAction: false
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formAction: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)
