import React, { Component } from 'react';
//import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = { 
        recipes: this.props.recipe,
        status:'isLoading',
    }

  }


  render(){
    const {recipes} = this.props; 
    console.log(recipes);
      return(
        <div>
          <h1>teste Recipelist</h1>
          </div>
      )
      

  }
}

export default withAuth(RecipeList);



/*
{recipes.map((card, index)=>
        <div key={index}>
        <img src = {card.recipe.image} bla blaalt={card.recipe.title}/>
          <p>{card.recipe.label}</p>
          <p>{parseInt(card.recipe.calories)}</p>
          {card.recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
          </div>)}


*/