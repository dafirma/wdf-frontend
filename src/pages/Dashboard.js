/* eslint-disable default-case */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
//import axios from 'axios';
import {Link} from 'react-router-dom'
//import {FavButton} from '../components/FavButton'
import axios from 'axios'

import { FoodConsumer } from '../lib/FoodContext';

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
    let favCopy = this.state.favoriteId;
    console.log(recipe);
    favCopy.push(newItem);
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
    //const { favoriteId } =this.state;
  
   // console.log(favoriteId);
    //const theme = this.context;
   // console.log(recipes);
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
    return(
      <div>
        
        <h2>Based on your preferences</h2>
        {/* <FoodConsumer> */}    
          {recipes.map((recipe,index)=>
          <div key={index}>
          <form onSubmit ={this.handleFormSubmit}>
          <button onClick={()=> this.clickHandler(recipe.recipe)}>favorite</button>
              <Link to={{pathname:`/recipe/${recipe.recipe.uri}`, state:{recipe}}}>
          <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
          <p>{recipe.recipe.label}</p>
          <p>Calories: {parseInt(recipe.recipe.calories)}</p>
          <div>
           <p>health Labels:</p> 
           {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
          </div>
            </Link>
            </form>
           
          </div>)}
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
