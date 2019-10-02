import React from 'react';
import {Link} from 'react-router-dom';

class HomepageListItem extends React.Component {

  render() {
    return (
      <div className="col-6">
        <h1><Link to={`${this.props.url}`}>{this.props.title}</Link></h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HomepageListItem;