import React from 'react';
import { withAuth } from '../lib/AuthProvider';
import '../stylesheets/RecipeDetails.scss';
import { Link } from 'react-router-dom';
import back from '../image/flecha-hacia-la-izquierda.png'

const FavoriteDetails=(props) =>{
  const recipe = props.location.state;
  

  return(
    <div className='container-details'>
      <div className='container-back-icon'>
      
      <Link to = {{pathname:`/private`}} ><span> <img src={back} alt='back'/>Back </span></Link>
      </div>
      <h2>{recipe.recipe.label}</h2>
      <div className='container-image-details'>
        <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
      </div>
      <div className='container-icon-card-details'>
          <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
          <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
          <p><span>{recipe.recipe.yield}</span> Servings</p>
          
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


export default withAuth(FavoriteDetails);