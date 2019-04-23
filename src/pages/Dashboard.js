/* eslint-disable default-case */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
//import axios from 'axios';
import {Link} from 'react-router-dom'

class Dashboard extends Component{
  constructor(props){
    super();
    this.state ={
      recipes:[] ,
      status: '',
    }
  }
  
  
  render () {
    const { recipes, status} = this.props;
    console.log(recipes);
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
    return(
      <div>
        <h2>Based on your preferences</h2>
        {recipes.map((recipe,index)=>
          <div key={index}>
          <Link to={{pathname:`/recipe/${index}`, state:{recipe}}}>
          {/* <Link to={`/recipe/${index} ${recipes}`}> */}
          <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
          <p>{recipe.recipe.label}</p>
          <p>Calories: {parseInt(recipe.recipe.calories)}</p>
          <div>
          <p>health Labels:</p> 
          {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
            </div>
            </Link>
          </div>)}
      
        </div>)}
    }
}
export default withAuth(Dashboard);