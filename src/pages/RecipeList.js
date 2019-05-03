import React, { Component } from 'react';
//import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = { 
        recipes:[],
        status:'isLoading',
        favoriteId:this.props.user.favorites
    }
    this.server = axios.create({
      baseURL:'http://localhost:5000',
      withCredentials: true
    });

  }
  
  clickHandler(recipe){
    let newItem = recipe;
    let favCopy = this.state.favoriteId;
    favCopy.push(newItem);
    console.log(newItem)
    const favoriteId = favCopy;
    this.server.put('/food/favorite',{favoriteId})
    .then(response =>{
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    const { favoriteId } = this.state;
    console.log(favoriteId);
    
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
          <div key = {recipe.recipe.uri}>
          {/* <button onClick={()=>this.setState({recipeNew:recipe})}> */}
          <img src= {recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
            <p>Calories: {parseInt(recipe.recipe.calories)}</p>
            {/* </button> */}<Link to={`/recipe/${index}`}>
            {recipe.recipe.label}
            </Link>
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
          <div key = {recipe.recipe.uri}>
          <form onSubmit ={this.handleFormSubmit}>
          <button onClick={()=> this.clickHandler(recipe.recipe)}>favorite</button>
          <Link to={{pathname:`/recipe/${index}` , state:{recipe}}}>
          <img src= {recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
            <p>Calories: {parseInt(recipe.recipe.calories)}</p>
            </Link>
            </form>
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