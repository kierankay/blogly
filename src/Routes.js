import React from 'react';
import App from './App';
import { Switch, Route } from 'react-router-dom';
import HomepageList from './HomepageList';
import Header from './Header';
import PostView from './PostView';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Switch>
        <Route path="/" render={<Header />} />
        <div className="container">
          <Route exact path="/" render={<HomepageList />} />
          <Route exact path="/:postId" render={(routeProps) => <PostView {...routeProps} />} />
        </div>
      </Switch>
    )
  }
}

export default Routes;