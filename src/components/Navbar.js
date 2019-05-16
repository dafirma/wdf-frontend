import React, { Component } from "react";
//import  { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
//import { FoodConsumer } from '../lib/FoodContext';
import '../stylesheets/Navbar.scss'
import home from '../image/casa_transp.png'
import storage from '../image/dieta.png'
import favorite from '../image/star_transp.png'
import search from '../image/lupa _thin.png'
import logoutIcon from '../image/logout.png'

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div /* className='Login' */>
      <div className='navigation'/* className='container-login' */>
      {isLoggedin ? (
          <>
           {/*  <p>username: {user.username}</p> */}
            <ul>
              <li><Link to='/private'><img src={home} alt='home' width='50%'/></Link></li>
              <li><Link to='/storage'><img src={storage} alt='storage' width='50%'/></Link></li>
              <li><Link to='/search'><img src={search} alt='search' width='50%'/></Link></li>
              <li><Link to='/favorites'><img src={favorite} alt='favorite' width='50%'/></Link></li>
              <li><Link to='/login' onClick={logout}><img src={logoutIcon} alt='logout' width='50%'/></Link></li>
            <li><Link to='/test'>test</Link></li> 
            </ul> 

           
            
          </>
        ) : (
          <div className = 'link-signup-login'>

          <ul>
          {/* <li> <Link to="/login">Login</Link></li>  */}
           {/* <li> <Link to="/signup">SignUp</Link></li> */}
            
          </ul>
            
          </div>
        )}
      
      </div>
        
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