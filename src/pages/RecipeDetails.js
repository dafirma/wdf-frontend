import React from 'react';
import { withAuth } from '../lib/AuthProvider';


const RecipeDetails =(props) =>{
  //console.log(props)
  //const id = props.match.params.id;
  const {recipe} = props.location.state;
  //console.log(id);
  console.log(recipe);
  return(
    <div>
      <h2>Recipe Details</h2>
      <p>{recipe.recipe.label}</p>
      <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
      <p>Calories: {parseInt(recipe.recipe.calories)}</p>
      <div>
          <p>health Labels:</p> 
          {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
            </div>
      </div>
  )
}


export default withAuth(RecipeDetails);