import React, { Component } from "react";
//import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
//import SearchBar from '../components/SearchBar';
//import Storage from './Storage';
//import Header from '../components/Header';
//import { Link } from 'react-router-dom';
//import RecipeList from './RecipeList';
import Main from './Main'
//import RecipeDetails from "./RecipeDetails";
//import RecipeMain from "./RecipeMain";
import Dashboard from './Dashboard';
class Private extends Component {
    state ={
      recipes:[],
      status:'isLoading',
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

  render(){
    const {recipes, status} =this.state;
    return(
      <div>
        <Main />
        <Dashboard recipes={this.state.recipes} status={this.state.status}/>

        }
        </div>
    )
  }
}

export default withAuth(Private);
 


/*
<Switch>
<Route exact path='/private' component={Private}/>
<Route path='search' component={SearchBar}/>
<Route path='storage' component={Storage}/>
</Switch>
console.log(recipesMain);
    console.log(status);
    // eslint-disable-next-line default-case
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
      return <div>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <RecipeList recipes = {this.state.recipes}/>
      <Switch>
        <Route path='/recipelist' component={RecipeList} recipes={this.state.recipes} />
      </Switch>




----------------------------------
<RecipeList recipes = {this.state.recipes}/>

--------------------------------------------
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