import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageListContainer from './containers/HomepageListContainer';
import Header from './Header';
import PostViewContainer from './containers/PostViewContainer';

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" render={<Header />} />
        <div className="container">
          <Route exact path="/" render={<HomepageListContainer />} />
          <Route exact path="/:postId" render={(routeProps) => <PostViewContainer {...routeProps} />} />
        </div>
      </Switch>
    )
  }
}

export default Routes;