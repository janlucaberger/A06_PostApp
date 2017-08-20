import React from 'react';
import ReactQuill from 'react-quill';

class PostForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body,
      id: this.props.id
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
    e.preventDefault();
    if(this.props.afterAction){
      this.props.formAction(this.state).then(this.props.successAction());
    } else {
      this.props.formAction(this.state);
    }
  }

  render(){
    return(
      <div className="post-create-container">
        <div className="component-header">
          <h3>{this.props.buttonText}!</h3>
        </div>
        <form>
          <input value={this.state.title} className="text-input" type="text" onChange={this.handleInput} placeholder="Title"/>
          <ReactQuill
            value={this.state.body}
            onChange={this.handleChange}
          />
        <button className="button bottom-right" onClick={this.handleSubmit}>{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}



export default PostForm
