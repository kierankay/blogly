import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteComment(this.props.id);
  }

  render() {
    return (
    <div>
      <button onClick={this.handleClick} className="btn btn-danger">X</button>
      <span>{this.props.text}</span>
    </div>
    )
  }
}

export default Comment;