import React, { Component }from 'react';
import {Route, NavLink, HashRouter } from 'react-router-dom';
//import Search from '../components/SearchBar';
import SearchPage from './SearchPage';
import Storage from './Storage'
import Favorites from './Favorites'
//import Private from './Private'

class Main extends Component {
  render(){
    return(
      <HashRouter>
        <div>
          <ul>
            {/* <li><NavLink to='/'>Home</NavLink></li> */}
            <li><NavLink to='/storage'>Storage</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/favorites'>Favorites</NavLink></li>
          </ul>
          <div>
            
            {/* <Route path='/' component={Private}/>  */}
            <Route path='/storage' component={Storage}/>
            <Route path='/search' component={SearchPage}/>
            <Route path='/favorites' component={Favorites}/>
          </div>
          </div>
        </HashRouter>
    )
  }
}


export default Main;