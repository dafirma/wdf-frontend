import React, { Component } from 'react';
import RecipeList from '../pages/RecipeList';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '',
    recipes: this.props,
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

  render() {
    const {recipes} = this.state;
    console.log(recipes);
    return (
      <div className='ui search-bar'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            value={this.state.term}
            type='text'
            className='centerInput'
            placeholder='banana, yogurt, etc'
          />
        </form>
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default SearchBar;


// <RecipeList recipes = {this.state.recipes}/>