import React from 'react'
import { withAuth } from '../lib/AuthProvider';
import {Link} from 'react-router-dom';
import '../stylesheets/error404.scss'
const Page404 = ({ location }) => (
  
  <div className='container-background-error'>
    <div className='container-error'>
      <h2>Sorry, no match found for <code>{location.pathname}</code> Page</h2>
      <div className='container-btn-error'>
        <button className='btn-error'><Link to ='/private'><span>Back</span></Link></button>
      </div>
  </div>

  </div>
);
export default withAuth(Page404)