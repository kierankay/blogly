import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>Microblog</h1>
        <h2>Get in the Rithm of blogging!</h2>
        <Link to="/">Blog</Link>
        <Link to="/new">Add a new post</Link>
      </div>
    )
  }
}

export default Header;