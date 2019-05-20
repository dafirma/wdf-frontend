import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/Cards.scss';

import { animateScroll as scroll, scroller } from 'react-scroll'

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = { 
        recipes:[],
       // status:this.props,
        favoriteId:[]
    }
    this.server = axios.create({
      baseURL: process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });

  }
  
  clickHandler(recipe, index){
    let newItem = recipe;
    //let a = index;
    //console.log(a);
    let favCopy = [...this.state.favoriteId];
    favCopy.push(newItem);
    //console.log(favCopy)
    const favoriteId = favCopy;
    this.server.put('/food/favorite',{favoriteId})
    .then(response =>{
      //console.log(response)
    })
    .catch(error =>{
      //console.log(error)
    })
  }

  handleFormSubmit = event =>{
    event.preventDefault();
   // const { favoriteId } = this.state;
    //console.log(favoriteId);
    
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  

  render(){
    const { recipes, status} = this.props; 
    //const { status } =this.state;
    let sizeObj = Object.keys(recipes).length;
    //console.log(sizeObj);
    //console.log(recipes);
  
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
        return ''
        case 'isLoaded':
          return(
        <div className='container-list-search' test={scroll.scrollToBottom(1200)}>
         {recipes.map((recipe,index)=>
      <div key={index} className='container-food'>
      <div className='container-image'>
      <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>

      </div>
        <p className='recipe-title'>{recipe.recipe.label}</p>
        <div className='container-icon-card'>
        <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
        <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
        <p><span>{recipe.recipe.yield}</span> Servings</p>
        <p><span>{parseInt(recipe.recipe.calories)} </span> Kcal</p>
          </div>
        <p>Health Labels:</p>
        <div className='container-health-label'>
        {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
          <p key={indexHealth}><span>{cardHealth}</span> /</p>)}
          </div>
          <div className='container-view-fav'> 
            <div>
            <Link to={{pathname:`/recipe/${recipe.recipe.uri}`, state:{recipe}}} >
            <button className='btn-view-recipe'><span>Recipe</span></button>
            </Link>
            </div>
            <div>
            <button className='btn-fav-list' onClick={()=> this.clickHandler(recipe.recipe)}><span>Favorite</span></button>
            </div>
          </div>
          
        </div>
        )}          
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