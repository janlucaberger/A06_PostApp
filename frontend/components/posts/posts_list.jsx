import React from 'react';
import { connect } from 'react-redux';
import PostDetail from '../post/post_detail';
import { fetchAllPosts } from '../../actions/posts_actions'
import { getAllPosts } from '../../reducers/selectors.js';

class PostsList extends React.Component {

  componentDidMount(){
    this.props.fetchAllPosts()
  }

  render(){
    const posts = this.props.posts.map((post) => {
      return(
        <PostDetail key={post.id} post={post} />
      )
    })

    return (
      <div>
        { posts }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return{
    posts: getAllPosts(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
