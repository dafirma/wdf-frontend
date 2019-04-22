import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';
import RecipeList from './RecipeList';

class SearchPage extends Component {
  constructor(){
    super();
    this.state = {
      recipes: [],
      status: 'isLoading'
    }
  }
  onTermSubmit = async term =>{
    const item = term;
    const edaId = 'd5c3f152';
    const edaKey = '71a22a30005b3166674bfb754a7d10ff';
    const response = await axios.get (`https://api.edamam.com/search?q=${item}&app_id=${edaId}&app_key=${edaKey}`)
    this.setState({
      recipes:response.data.hits,
      status: 'isLoaded',
    })
   }
   render(){
     return(
       <div>
         <SearchBar onTermSubmit={this.onTermSubmit}/>
         <RecipeList recipes={this.state.recipes} status={this.state.status}/>

       </div>
     )
   }

}
export default withAuth (SearchPage);