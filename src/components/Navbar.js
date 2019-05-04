import React, { Component } from "react";
//import  { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
//import { FoodConsumer } from '../lib/FoodContext';
class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <p>favorites:</p>
            <button onClick={logout}>Logout</button>

            <ul>
              <li><Link to='/private'>Home</Link></li>
              <li><Link to='/storage'>Storage</Link></li>
              <li><Link to='/search'>Search</Link></li>
              <li><Link to='/favorites'>Favorites </Link></li>
              <li><Link to='/test'>Test</Link></li>

            </ul> 

           
            
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


// eslint-disable-next-line no-lone-blocks
{/* <div>
<ul>
  <FoodConsumer>
  <li><Link to='/private'>Home</Link></li>
  <li><Link to='/storage'>Storage</Link></li>
  <li><Link to='/search'>Search</Link></li>
  {({favorites}) =>
  <li><Link to='/favorites'>Favorites {favorites}</Link></li>}
  <li><Link to='/test'>Test</Link></li>
  </FoodConsumer>
</div>

</ul> 
*/}