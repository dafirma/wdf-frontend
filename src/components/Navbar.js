import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import '../stylesheets/Navbar.scss'
import home from '../image/casa_transp.png'
import storage from '../image/dieta.png'
import favorite from '../image/star_transp.png'
import search from '../image/lupa _thin.png'
import logoutIcon from '../image/logout.png'
import axios from 'axios';
class Navbar extends Component {
  constructor(props){
    super(props);
    this.getData = this.props.getData
    this.favTest = this.props.favTest
    this.state={
      favoriteId:[]

    }
    this.server = axios.create({
      baseURL:process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
  }
     

  render() {
    const { logout, isLoggedin } = this.props;
    
    return (
      <div>
      {isLoggedin && (
      <div className='navigation'>
          <>
            <ul>
              <li><Link to='/'><img src={home} alt='home' width='50%'/></Link></li>
              <li><Link to='/storage'><img src={storage} alt='storage' width='50%'/></Link></li>
              <li><Link to='/search'><img src={search} alt='search' width='50%'/></Link></li>
              <li><Link to='/favorites'><img src={favorite} alt='favorite' width='50%'/></Link></li>
              <li><Link to='/logout' onClick={logout}><img src={logoutIcon} alt='logout' width='50%'/></Link></li>
            </ul> 
          </>
          <div className = 'link-signup-login'>
          </div>
      </div>
        )}
      
        
      </div>
    )
  }
}

export default withAuth(Navbar);
