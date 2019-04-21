import React, { Component } from "react";
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import SearchBar from '../components/SearchBar';
//import Dashboard from './dashboard';
import RecipeList from './RecipeList';
class Private extends Component {
  _isMounted = false;
  constructor(){
    super();
    this.state = { 
      recipes: [],
      status:'isLoading',
      preference:'vegatarian'
  }

  }

async componentDidMount(){
  this._isMounted = true;
  const edaId = 'd5c3f152';
  const edaKey = '71a22a30005b3166674bfb754a7d10ff';
  const response = await axios.get(`https://api.edamam.com/search?q=potato&health=vegetarian&app_id=${edaId}&app_key=${edaKey}&from=0&to=3&calories=591-722`)
  if(this._isMounted){
    this.setState({
      recipes:response.data.hits,
      status: 'isLoaded',
    })
  }
}

  
componentWillUnmounted(){
  this._isMounted = false;
}
 onTermSubmit = async term =>{
  const item = term;
  const edaId = 'd5c3f152';
  const edaKey = '71a22a30005b3166674bfb754a7d10ff';
  const response = await axios.get (`https://api.edamam.com/search?q=${item}&app_id=${edaId}&app_key=${edaKey}`)
  this.setState({
    recipes:response.data.hits
  })

 }



  render() {
    const { status, recipes} = this.state;
    console.log(recipes);
    console.log(status);
    // eslint-disable-next-line default-case
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
      return <div>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <RecipeList recipes = {this.state.recipes}/>
        
      
      
      </div>
      
    }

    
  }
}

export default withAuth(Private);
 


/*
render() {
    const { status, cards} = this.state;
    console.log(cards);
    console.log(status);
    // eslint-disable-next-line default-case
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
      return <div>
      <SearchBar />
      <h2>Based on preference</h2>
      {cards.map((card, index)=>
      <div key={index}>
      <img src = {card.recipe.image} alt={card.recipe.title}/>
        <p>{card.recipe.label}</p>
        <p>{parseInt(card.recipe.calories)}</p>
        {card.recipe.healthLabels.map((cardHealth, indexHealth)=>
          <p key={indexHealth}>{cardHealth}</p>)}
        </div>)}
        </div>
      
    }

    
  }


*/