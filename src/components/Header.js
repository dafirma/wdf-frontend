import React from 'react';
import { Link } from 'react-router-dom';

const Header=() =>(
  <header>
    <nav>
      <ul>
        <li><Link to='/private'>Home</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/storage'>Storage</Link></li>
        <li><Link to='/favorite'>Favorite</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
