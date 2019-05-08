import React from 'react';
import { withAuth } from '../lib/AuthProvider';
import '../stylesheets/RecipeDetails.scss'
import favDetails from '../image/corazon-de-boton-de-favorito.png';



const RecipeDetails =(props) =>{
  //console.log(props)
  //const id = props.match.params.id;
  const {recipe} = props.location.state;
  //console.log(id);
  //console.log(recipe);
  

  return(
    <div className='container-details'>
      {/* <h2>Recipe Details</h2> */}
      <h2>{recipe.recipe.label}</h2>
      <div className='container-image-details'>
        <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
        <div className='container-btn-fav-details'>
          <button className='btn-fav-details' ><img src={favDetails} alt=''/></button>
        </div>
        <hr/>
      </div>
      <div className='container-icon-card-details'>
          <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
          <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
          <p><span>{recipe.recipe.yield}</span> Servings</p>
          {/* <p><span>{parseInt(recipe.calories)} </span> Kcal</p> */}
          
            </div>
          <h3>Health Labels</h3> 
            <div className='container-health-label-details'>
          {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
            </div>
              <h3>Ingredients</h3>
            <div className='container-ingredients'>
            {recipe.recipe.ingredientLines.map((item,index)=>
              <p key={index}>{item}</p>)}

            </div>
            </div>
  )
}


export default withAuth(RecipeDetails);






