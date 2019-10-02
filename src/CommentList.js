import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    // add a comment to redux
  }

  render() {
    return (
      <div>
        <h2>Comments</h2>
        <div>
          {/* {this.props.comments.map(c => <Comment comment={c}/>)} */}
        </div>
        <div>
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="comment"></label>
              <input type="text"
                class="form-control" name="comment" id="comment" aria-describedby="helpId" placeholder="" value={this.state.comment} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CommentList;