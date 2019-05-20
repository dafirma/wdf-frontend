import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/Cards.scss';
import Notifications, {notify} from 'react-notify-toast'
import { animateScroll as scroll, scroller } from 'react-scroll'

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = { 
        recipes:[],
        favoriteId:[]
    }
    this.server = axios.create({
      baseURL: process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
  }

  clickHandler(recipe, index){
    let newItem = recipe;
    let favCopy = [...this.state.favoriteId];
    let myColor ={ background:'#2DA6BB', text:'#FAFAFA', fontSize:'20px' }
    favCopy.push(newItem);
    notify.show('ADDED FAVORITE', "custom", 3000, myColor);
    const favoriteId = favCopy;
    this.server.put('/food/favorite',{favoriteId})
    .then(response =>{
      //console.log(response)
    })
    .catch(error =>{
      //console.log(error)
    })
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
      // eslint-disable-next-line default-case
      switch(status){
        case 'isLoading':
        return ''
        case 'isLoaded':
          return(
        <div className='container-list-search' scrolldown={scroll.scrollToBottom(1200)}>
          {recipes.map((recipe,index)=>
          <div key={index} className='container-food'>
              <Notifications/>
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

export default withAuth(RecipeList);
