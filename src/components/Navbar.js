import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
            <div>
          <ul>
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            <li><Link to='/storage'>Storage</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
            <li><Link to='/test'>Test</Link></li>
          </ul>
          </div>
            
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
