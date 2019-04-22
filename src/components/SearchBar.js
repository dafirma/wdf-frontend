import React, { Component } from 'react';
//import RecipeList from '../pages/RecipeList';
//import axios from 'axios';
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '',
   };

  // console.log(this.recipes);
  }
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };
 /*  onTermSubmit = async term =>{
    const item = term;
    const edaId = 'd5c3f152';
    const edaKey = '71a22a30005b3166674bfb754a7d10ff';
    const response = await axios.get (`https://api.edamam.com/search?q=${item}&app_id=${edaId}&app_key=${edaKey}`)
    this.setState({
      recipes:response.data.hits
    })
  
   } */

  render() {
    //const {recipes} = this.state;
    //console.log(recipes);
    return (
      <div className='ui search-bar'>
      <h2>Search</h2>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            value={this.state.term}
            type='text'
            className='centerInput'
            placeholder='banana, yogurt, etc'
          />
          <button type='submit'> Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;


// <RecipeList recipes = {this.state.recipes}/>