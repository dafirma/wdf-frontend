import React, { Component } from 'react';
//import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';
//import { Link } from 'react-router-dom';

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = { 
        recipes:[],
        status:'',
        recipeNew:[]
    }

  }



  render(){
    const { recipes, status } = this.props; 
    let sizeObj = Object.keys(recipes).length;
    console.log(sizeObj);
    if(sizeObj === 3 ){
      return(
        <div>
          <h1>Based on your preference</h1>
          {recipes.map((recipe, index) =>
          <div key = {index}>
          <button onClick={()=>this.setState({recipeNew:recipe})}>
          <img src= {recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
            <p>Calories: {parseInt(recipe.recipe.calories)}</p>
            </button>
            </div>
            )}
          </div>
      )

    }else{
      // eslint-disable-next-line default-case
      switch(status){
        case 'isLoading':
        return 'Loading...'
        case 'isLoaded':
          return(
        <div>
          {recipes.map((recipe, index) =>
          <div key = {index}>
          <img src= {recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
            <p>Calories: {parseInt(recipe.recipe.calories)}</p>
            </div>)}
          
          </div>
      )

    }
  } 

  }
}

export default withAuth(RecipeList);





/*
class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = { 
        //recipes: this.props.recipes,
        status:'isLoading',
    }

  }


  render(){
    const { recipes } = this.props; 
    
    console.log(recipes);
    if(!recipes.lenght < 3 ){
      return(
        <div>
          <h1>teste Recipelist</h1>
          
          </div>
      )

    }
      

  }
}
*/










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