import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux'
import { createPost } from '../../actions/post_actions'

class PostCreate extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  handleInput(e){
    this.setState({
      title: e.currentTarget.value
    })
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.createPost(this.state);
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <div className="component-header">
          <h3>Create a new post!</h3>
        </div>
        <form>
          <input className="text-input" type="text" onChange={this.handleInput} placeholder="Title"/>
          <ReactQuill
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button className="button bottom-right" onClick={this.handleSubmit}>Create Post</button>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}


export default connect(null, mapDispatchToProps)(PostCreate)
