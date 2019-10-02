import React from 'react';
import PostForm from '../containers/PostFormContainer';
import CommentList from '../CommentList';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      loading: true
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    if (!this.props.posts[this.props.match.params.postId]) {
      await this.props.getPostFromAPI(this.props.match.params.postId);
    }
    this.setState({loading: false});
  }

  handleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleDelete() {
    this.props.deletePostFromAPI(this.props.match.params.postId);
    this.props.history.push('/')
  }

  render() {
    let id = this.props.match.params.postId
    return (
      this.state.loading ? <div>'loading'</div> :
      <div>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.editing ? 
        <PostForm editing={true} updateEdit={this.handleEdit} id={this.props.posts[id].id} title={this.props.posts[id].title} description={this.props.posts[id].description} body={this.props.posts[id].body}/> : 
        <div>
        <div>
          <h1>{this.props.posts[id].title}</h1>
          <h2>{this.props.posts[id].description}</h2>
          <p>{this.props.posts[id].body}</p>
        </div>
        <CommentList />
        </div>
        }
      </div>
    )
  }
}

export default PostView;