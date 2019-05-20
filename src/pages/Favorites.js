import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';
import '../stylesheets/Cards.scss';
import {Link} from 'react-router-dom';


class Favorites extends Component {
  constructor(props){
    super(props);
    //console.log('props fav: ', props)
    this.getData = this.props.getData
    this.state ={
      recipes:[],
      status:'isLoading',
      favoriteId:[] 
    }
    
    this.server = axios.create({
      baseURL:process.env.REACT_APP_FIREBASE,
      //process.env.REACT_APP_FIREBASE
      withCredentials: true
    });
  }
   
 componentDidMount(){
    /* this.server.get('/food/favorite')
   .then(result =>{
    // console.log(result)
     this.setState({
       favoriteId:result.data
     })
   }) */
   this.setFav();
    
    
  } 
  setFav(){
    this.server.get('/food/favorite')
   .then(result =>{
    //console.log(result)
      this.setState({
       favoriteId:result.data
     })
   })
   //this.getData()
  }


  clickDelete = (val, i) => {
    let index = i;
    let favoriteId = val;
    console.log(favoriteId.uri);
    this.server.post('/food/favorite',{favoriteId})
    .then(resp =>{
      console.log('resp',resp.data)
    })
    //this.getData();

    let favCopy = [...this.state.favoriteId];
    favCopy.splice(index, 1)
     this.setState({
      favoriteId: favCopy
    })   
    //console.log(favCopy.length)
    //this.setFav()

  }

  render(){
    const {favoriteId} = this.state;
    console.log(favoriteId.length)
    //console.log(favoriteId);
    //const test = this.props
    /* console.log(this.getData)
    console.log('session:',this.props.user)
    console.log(this.state.favoriteId)
    console.log('favorites: ',this.state.favoriteId)
    console.log(this.props.location) */

    return(
      <div className='container-favorite'>
        <h2>FAVORITES</h2>
          {favoriteId !== undefined ?
            favoriteId.map((recipe,index) => 
            <div key={index} className='container-food'>
      <div className='container-image'>
      <img src = {recipe.image} alt={recipe.label}/>          
      </div>
        <p className='recipe-title'>{recipe.label}</p>
        <div className='container-icon-card'>
        <p><span>{recipe.totalTime}</span> Minutes</p>
        <p><span>{recipe.ingredientLines.length} </span>Ingredients</p>
        <p><span>{recipe.yield}</span> Servings</p>
        <p><span>{parseInt(recipe.calories)} </span> Kcal</p>
          </div>
        <p>Health Labels:</p>
        <div className='container-health-label'>
        {recipe.healthLabels.map((cardHealth, indexHealth)=>
          <p key={indexHealth}><span>{cardHealth}</span>/</p>)}
          </div>
          <div className='container-btn-recipe'>
          <Link to={{pathname:`/abc/${recipe.label}`, state:{recipe}}}><button className='btn-recipe'><span>Recipe</span></button></Link>
          <div>
          <button className='btn-delete-fav'onClick={() => this.clickDelete(recipe, index)}><span>Delete</span></button>
          </div>
          </div>
          </div>) : <div><h2>No favorites yet</h2></div>} 
      </div>
    )
  }
}

export default withAuth(Favorites);




