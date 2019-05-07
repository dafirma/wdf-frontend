/* eslint-disable default-case */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
//import axios from 'axios';
import {Link} from 'react-router-dom'
//import {FavButton} from '../components/FavButton'
import axios from 'axios';
import '../stylesheets/Cards.scss'

//import { FoodConsumer } from '../lib/FoodContext';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state ={
      recipes:[] ,
      status: '',
      inFavorites:false,
      favoriteId:[],
      favCounter:0
    }
    this.server = axios.create({
      baseURL:'http://localhost:5000',
      withCredentials: true
    });

  }
  
  clickHandler(recipe){
    let newItem = recipe;
    console.log('before:', this.props.user.favorites)
    let favCopy = [...this.state.favoriteId];
    console.log(recipe);
    favCopy.push(newItem);
    console.log(favCopy)
    const favoriteId = favCopy;
    console.log(favoriteId)
    /* this.setState({
      favoriteId: favCopy
    }) */
   this.server.put('/food/favorite', {favoriteId})
   .then(response =>{
     console.log(response.data)
   })
   .catch(error =>{
     console.log(error)
   })
  } 

   handleFormSubmit = event => {
     event.preventDefault();
    // console.log('test');
     const {favoriteId} =this.state;
     console.log(favoriteId);  
     this.props.sendData({favoriteId})
   }
 
  render () {
    const { recipes, status} = this.props;
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
    return(
      <div className='container-private'>
        <h2>Based on your preferences</h2>
      {recipes.map((recipe,index)=>
      <div key={index} className='container-food'>
      <div className='container-image'>
      <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>

      </div>
        <p className='recipe-title'>{recipe.recipe.label}</p>
        <hr/>
        {/* <p>{recipe.RecipeID}</p> */}
        <div className='container-icon-card'>
        <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
        <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
        <p><span>{recipe.recipe.yield}</span> Servings</p>
        <p><span>{parseInt(recipe.recipe.calories)} </span> Kcal</p>
          </div>
        <p>Health Labels:</p>
        <div className='container-health-label'>
        {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
          <p key={indexHealth}><span>{cardHealth}</span>/</p>)}
          </div>
          <button onClick={()=> this.clickHandler(recipe.recipe)}>favorite</button>
        </div>
        )}
    </div>
          )   
          }   
    }
}
export default withAuth(Dashboard);
















  /* async clickHandler(recipe){
    let newItem = recipe;
    console.log(recipe);
    if(this.state.favoriteId.length === 0){
      this.setState({
        favoriteId:[newItem]
        })
    }else{
      const favoriteIdCopy = [...this.state.favoriteId]
      favoriteIdCopy.push(newItem)
      this.setState({
        favoriteId:[favoriteIdCopy]
      })
    }
   
  }  */



  // return(
  //   <div>
      
  //     <h2>Based on your preferences</h2>
  //     {/* <FoodConsumer> */}    
  //       {recipes.map((recipe,index)=>
  //       <div key={recipe.recipe.uri}>
  //       <form onSubmit ={this.handleFormSubmit}>
  //       {/* <button onClick ={() => this.clickWord(teste)}>word</button> */}
  //       <button onClick={()=> this.clickHandler(recipe.recipe)}>favorite</button>
  //           <Link to={{pathname:`/recipe/${recipe.recipe.uri}`, state:{recipe}}}>
  //       <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
  //       <p>{recipe.recipe.label}</p>
  //       <p>Calories: {parseInt(recipe.recipe.calories)}</p>
  //       <div>
  //        <p>health Labels:</p> 
  //        {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
  //         <p key={indexHealth}>{cardHealth}</p>)}
  //       </div>
  //         </Link>
  //         </form>
         
  //       </div>)}
  //       </div>
  //       ) 