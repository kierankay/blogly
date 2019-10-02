import React, { Component } from "react";

class Votes extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span>{this.props.titles.filter(t => t.id === this.props.id).votes} votes</span>
        <button onClick={() => this.props.changeVotes(this.props.id, 'up')} className="btn btn-primary">Up</button>
        <button onClick={() => this.props.changeVotes(this.props.id, 'down')} className="btn btn-primary">Down</button>
      </div>
    );
  }
}

export default Votes;