/* eslint-disable default-case */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../stylesheets/Cards.scss';
import spinner from '../image/Rolling-1s-200px.gif'
import Notifications, {notify} from 'react-notify-toast'

class Dashboard extends Component{
  constructor(){
    super();
    this.state ={
      recipes:[] ,
      status: '',
      inFavorites:false,
      favoriteId:[],
      favCounter:0,
      btnFav:false
    }
    this.server = axios.create({
      baseURL:process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
  }
 
  componentDidMount(){
    this.getFav()
  }

  getFav(){
    this.server('/food/favorite')
    .then(result =>{
      this.setState({
        favoriteId: result.data
      })
    })
  }
 

  clickHandler(recipe){
    let newItem = recipe;
    let favCopy = [...this.state.favoriteId];
    let myColor ={ background:'#2DA6BB', text:'#FAFAFA', fontSize:'20px' }
    favCopy.push(newItem);
    const favoriteId = recipe;
    notify.show('ADDED FAVORITE', "custom", 3000, myColor);
    this.server.put('/food/favorite', {favoriteId})
    .then(response =>{
        this.setState({
          favoriteId: response.data,
          btnFav: true
        })
        this.props.testD(response.data)
    })
   .catch(error =>{
   })
  } 
 
  render () {
    const { recipes, status} = this.props;
    switch(status){
      case 'isLoading':
      return (
        <div className='spinner'>
         <img src={spinner} alt='git'/>
       </div>
      )
      case 'isLoaded':
    return(
      <div className='container-private'>
        <Notifications/>
        <h2>Based on your preferences</h2>
        
        {recipes.map((recipe,index)=>
        <div key={index} className='container-food'>
          <div className='container-image'>
            <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
          </div>
          <p className='recipe-title'>{recipe.recipe.label}</p>
          <div className='container-icon-card-dasboard'>
           <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
           <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
           <p><span>{recipe.recipe.yield}</span> Servings</p>
          </div>
          <div className='container-btn-view-and-fav'>
            <div className='container-btn'>
             <Link to={{pathname:`/recipe/${recipe.recipe.uri}`, state:{recipe}}} >
              <button className='btn-view-recipe'><span>Recipe</span></button>
             </Link>
            </div>
            <div className='container-fav'>
              <button className='btn-fav' onClick={()=> this.clickHandler(recipe.recipe)}>
              <span>Favorite</span></button>
            </div>
          </div>      
        </div>
      )}      
    </div>
   )   
  }   
 }
}
export default withAuth(Dashboard);


/* 
{btnFav &&
  <div className='container-notify-fav-dashboard'>
    <h3>added favorite</h3>  
  </div>} */