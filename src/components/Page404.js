import React from 'react'
import { withAuth } from '../lib/AuthProvider';
import {Link} from 'react-router-dom'
const Page404 = ({ location }) => (
  
  <div>
  {console.log(location)}
     <h2>Sorry, no match found for <code>{location.pathname}</code> Page</h2>
     <button><p><Link to ='/private'>Back</Link></p></button>
  </div>
);
export default withAuth(Page404)