import React from 'react';
import {Link} from 'react-router-dom';
import VotesContainer from '../containers/VotesContainer';

class HomepageListItem extends React.Component {

  render() {
    return (
      <div className="col-6 card">
        <div className="card-body">
        <h1 className="card-title">
          <Link to={`${this.props.url}`}>{this.props.title}</Link>
        </h1>
        <p className="card-text">{this.props.description}</p>
        </div>
        <div className="card-footer text-muted">
          <VotesContainer id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default HomepageListItem;