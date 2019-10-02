import React from 'react';
import HomepageListItem from '../HomepageListItem';

class HomepageList extends React.Component {

  render() {
    return (
      <div>
        <p>Welcome to Microblog, our innovative site for communicating on the information superhighway.</p>
        <div>
          {Object.entries(this.props.posts).map(p => <HomepageListItem url={''} title={''} description={''}/>)}
        </div>
      </div>
    )
  }
}

export default HomepageList;