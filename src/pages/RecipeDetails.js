import React from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';
import '../stylesheets/RecipeDetails.scss'
import favDetails from '../image/corazon _azul.png';
import back from '../image/flecha-hacia-la-izquierda.png'
import Notifications, {notify} from 'react-notify-toast'


const RecipeDetails =(props) =>{  
  const {recipe} = props.location.state;
  const clickNotify =()=>{
    let myColor ={ background:'#2DA6BB', text:'#FAFAFA', fontSize:'20px' }
    notify.show('ADDED FAVORITE', "custom", 3000, myColor);
  }
  return(
    <div className='container-details'>
      <div className='container-back-icon'>
      <Notifications/>
      <Link to = {{pathname:`/private`}} ><span> <img src={back} alt='back'/>Back </span></Link>
      </div>
      <h2>{recipe.recipe.label}</h2>
      <div className='container-image-details'>
        <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
        <div className='container-btn-fav-details'>
          <button className='btn-fav-details' onClick={clickNotify}><img src={favDetails} alt=''/></button>
        </div>
      </div>
      <div className='container-icon-card-details'>
          <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
          <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
          <p><span>{recipe.recipe.yield}</span> Servings</p>        
      </div>
        <h3>Health Labels</h3> 
        <div className='container-health-label-details'>
          {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}><span>{cardHealth}</span></p>)}
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






