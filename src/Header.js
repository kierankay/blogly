import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
        <h1 className="display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <hr className="my-4" />
        <Link to="/">Blog</Link>
        <span> | </span>
        <Link to="/new">Add a new post</Link>
        </div>
      </div>
    )
  }
}

export default Header;