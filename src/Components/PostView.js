import React from 'react';
import PostForm from '../containers/PostFormContainer';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // handle fetching data here
    // lookup this.props.match.params.postId
    // load this into state
  }

  handleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleDelete() {
    // Handle deletion here
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.edit ? <PostForm editing={true} title={this.props.title} description={this.props.description} body={this.props.body}/> : 
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.description}</h2>
          <p>{this.props.body}</p>
        </div>
        }
      </div>
    )
  }
}

export default PostView;