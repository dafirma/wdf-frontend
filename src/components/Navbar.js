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
      //baseURL:'http://localhost:5000',
      baseURL:process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
  }
      componentDidMount(){
        this.getFav()
        
      }


      getFav(){
        this.server.get('/food/favorite')
        .then(result =>{
         // console.log(result.data)
          this.setState({
            favoriteId:result.data
          })
          //console.log(this.state.favoriteId)
        })
        this.getData()
        this.favTest()
      }

  render() {
    const { user,logout, isLoggedin } = this.props;
    //const{ novo } = this.props
   // const favCounter =this.state.favoriteId
    //console.log(favCounter.length)
   // console.log(favCounter.length)
   // console.log(user)
    //console.log(this.props.favTest)
    //console.log(this.getFav)
    //console.log(this.props.getData)
    return (
      <div /* className='Login' */>
      {isLoggedin && (
      <div className='navigation'/* className='container-login' */>
          <>
           {/*  <p>username: {user.username}</p> */}
            <ul>
              <li><Link to='/private'><img src={home} alt='home' width='50%'/></Link></li>
              <li><Link to='/storage'><img src={storage} alt='storage' width='50%'/></Link></li>
              <li><Link to='/search'><img src={search} alt='search' width='50%'/></Link></li>
              <li><Link to='/favorites'><img src={favorite} alt='favorite' width='50%'/><span>{user.favorites.length}</span></Link></li>
              <li><Link to='/' onClick={logout}><img src={logoutIcon} alt='logout' width='50%'/></Link></li>
            {/* <li><Link to='/test'>test</Link></li>  */}
            </ul> 

           
            
          </>
        ) : (
          <div className = 'link-signup-login'>

          <ul>
          {/* <li> <Link to="/login">Login</Link></li>  */}
           {/* <li> <Link to="/signup">SignUp</Link></li> */}
            
          </ul>
            
          </div>
      </div>
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