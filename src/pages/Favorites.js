import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';


class Favorites extends Component {


  render(){
    return(
      <div>
        <h2>FAVORITES</h2>
        </div>
    )
  }
}

export default withAuth(Favorites);