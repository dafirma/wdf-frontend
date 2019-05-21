import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';
import '../stylesheets/Cards.scss';
import {Link} from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast'
import spinner from '../image/Rolling-1s-200px.gif'
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
      withCredentials: true
    });
  }
   
 componentDidMount(){
   this.setFav();
    
    
  } 
  setFav(){
    this.server.get('/food/favorite')
   .then(result =>{
      this.setState({
       favoriteId:result.data,
       status:'isLoaded'
     })
   })
  }


  clickDelete = (val, i) => {
    let index = i;
    let favoriteId = val;
    let myColor ={ background:'#2DA6BB', text:'#FAFAFA', fontSize:'20px' }
    notify.show('DELETED FAVORITE', "custom", 3000, myColor);
    this.server.post('/food/favorite',{favoriteId})
    .then(resp =>{
    })
    let favCopy = [...this.state.favoriteId];
    favCopy.splice(index, 1)
     this.setState({
      favoriteId: favCopy
    })   
  }

  render(){
    const {favoriteId, status } = this.state;
    // eslint-disable-next-line default-case
    switch(status){
      case 'isLoading': 
      return(
        <div className='spinner'>
          <img src={spinner} alt='git'/>
        </div>
      )
      case 'isLoaded':
        return(
          <div className='container-favorite'>
        <h2>Favorites</h2>
          {favoriteId !== undefined ?
            favoriteId.map((recipe,index) => 
            <div key={index} className='container-food'>
              <Notifications/>
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
          <Link to={{pathname:`/fav/${recipe.label}`, state:{recipe}}}><button className='btn-recipe'><span>Recipe</span></button></Link>
          <div>
          <button className='btn-delete-fav'onClick={() => this.clickDelete(recipe, index)}><span>Delete</span></button>
          </div>
          </div>
          </div>) : <div><h2>No favorites yet</h2></div>} 
      </div>
    )
  }
}
}
export default withAuth(Favorites);




