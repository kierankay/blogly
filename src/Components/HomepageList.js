import React from 'react';
import HomepageListItem from '../HomepageListItem';

class HomepageList extends React.Component {

  componentDidMount() {
    this.props.getTitlesFromAPI();
  }

  render() {
    return (
      <div>
        <p>Welcome to Microblog, our innovative site for communicating on the information superhighway.</p>
        <div>
          {this.props.titles.map(t => <HomepageListItem url={`/posts/${t.id}`} title={t.title} description={t.description}/>)}
        </div>
      </div>
    )
  }
}

export default HomepageList;