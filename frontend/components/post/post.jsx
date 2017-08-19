import React from 'react';
import { Link } from 'react-router-dom';

class PostDetail extends React.Component {

  // componentDidMount(){
  //   this.props.fetchPost(this.props.postId)
  // }

  render(){
    if (this.props.post){
      return(
        <div className="post-detail-container">
          <h3>{this.props.post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
          <Link to={`/posts/${this.props.post.id}`}>Go to Post</Link>
        </div>
      )
    } else {
      return <div></div>
    }
  }

}
export default Post
