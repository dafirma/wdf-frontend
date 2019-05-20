/* eslint-disable default-case */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
//import axios from 'axios';
import {Link} from 'react-router-dom'
//import {FavButton} from '../components/FavButton'
import axios from 'axios';
import '../stylesheets/Cards.scss';
import spinner from '../image/Rolling-1s-200px.gif'

//import { FoodConsumer } from '../lib/FoodContext';

class Dashboard extends Component{
  constructor(){
    super();
    this.state ={
      recipes:[] ,
      status: '',
      inFavorites:false,
      favoriteId:[],
      favCounter:0
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
    //console.log('before:', this.props.user.favorites)
    let favCopy = [...this.state.favoriteId];
    //console.log(recipe);
    favCopy.push(newItem);
   // console.log(favCopy)
    const favoriteId = recipe;
    //console.log(favoriteId)
    /* this.setState({
      favoriteId: favCopy
    }) */
   this.server.put('/food/favorite', {favoriteId})
   .then(response =>{
     //console.log(response.data) // olhar porque nao devolve o  archivo atualizado
    this.setState({
      favoriteId: response.data
    })
    this.props.testD(response.data)
    })
   .catch(error =>{
    // console.log(error)
   })
  } 
 
  render () {
    const { recipes, status} = this.props;
   // console.log(status)
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
        <h2>Based on your preferences</h2>
        {recipes.map((recipe,index)=>
        <div key={index} className='container-food'>
        <div className='container-image'>
        <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>
        
        </div>
          <p className='recipe-title'>{recipe.recipe.label}</p>
          {/* <hr/> */}
          {/* <p>{recipe.RecipeID}</p> */}
          <div className='container-icon-card-dasboard'>
          <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
          <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
          <p><span>{recipe.recipe.yield}</span> Servings</p>
          {/* <p><span>{parseInt(recipe.calories)} </span> Kcal</p> */}
          
            </div>
          {/* <p>Health Labels:</p> */}
          {/* <div className='container-health-label'>
            {recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
          </div> */}
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

//<Link to={{pathname:`/recipe/${recipe.recipe.uri}`, state:{recipe}}}>


// {recipes.map((recipe,index)=>
//   <div key={index} className='container-food'>
//   <div className='container-image'>
//   <img src = {recipe.recipe.image} alt={recipe.recipe.label}/>

//   </div>
//     <p className='recipe-title'>{recipe.recipe.label}</p>
//     <hr/>
//     {/* <p>{recipe.RecipeID}</p> */}
//     <div className='container-icon-card'>
//     <p><span>{recipe.recipe.totalTime}</span> Minutes</p>
//     <p><span>{recipe.recipe.ingredientLines.length} </span>Ingredients</p>
//     <p><span>{recipe.recipe.yield}</span> Servings</p>
//     <p><span>{parseInt(recipe.recipe.calories)} </span> Kcal</p>
//       </div>
//     <p>Health Labels:</p>
//     <div className='container-health-label'>
//     {recipe.recipe.healthLabels.map((cardHealth, indexHealth)=>
//       <p key={indexHealth}><span>{cardHealth}</span>/</p>)}
//       </div>
//       <button onClick={()=> this.clickHandler(recipe.recipe)}>favorite</button>
//     </div>
//     )}







//<Link to={{pathname:`/recipe/${recipe.recipe.uri}`, state:{recipe}}}>








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