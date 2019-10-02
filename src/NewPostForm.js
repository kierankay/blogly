import React from 'react';

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body,
      editing: this.props.editing
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
    evt.preventDefault()

  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="title"></label>
          <input type="text"
            className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="" value={this.state.title}/>
        </div>
        <div className="form-group">
          <label for="description"></label>
          <input type="text"
            className="form-control" name="description" id="description" aria-describedby="helpId" placeholder="" value={this.state.description}/>
        </div>
        <div className="form-group">
          <label for="body"></label>
          <textarea className="form-control" name="body" id="body" rows="3" value={this.state.body}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default NewPostForm;