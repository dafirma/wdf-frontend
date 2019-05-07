import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';
import '../stylesheets/Cards.scss'


class Favorites extends Component {
  constructor(props){
    super(props);
    console.log('props fav: ', props)
    this.getData = this.props.getData
    this.state ={
      recipes:[],
      status:'isLoading',
      favoriteId:[] 
    }
    
    this.server = axios.create({
      baseURL:'http://localhost:5000',
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
    const res = this.server.get('/food/favorite')
   .then(result =>{
    // console.log(result)
     this.setState({
       favoriteId:result.data
     })
   })
  }


  clickDelete = (val, i) => {
    let index = i;
    let favoriteId = val;
    console.log(index, favoriteId);
    this.server.post('/food/favorite',{favoriteId})
    //this.getData();

    let favCopy = [...this.state.favoriteId];
    favCopy.splice(index, 1)
    /* this.setState({
      favoriteId: favCopy
    })  */
    this.setFav()

  }

  render(){
    const {favoriteId} = this.state;
    //const test = this.props
    console.log(this.getData)
    console.log('session:',this.props.user)
    console.log(this.state.favoriteId)
    console.log('favorites: ',this.state.favoriteId)

    return(
      <div>
        <h2>FAVORITES</h2>
          {favoriteId !== undefined ?
            favoriteId.map((recipe,index) => 
            <div key={index} className='container-food'>
      <div className='container-image'>
      <img src = {recipe.image} alt={recipe.label}/>

      </div>
        <p className='recipe-title'>{recipe.label}</p>
        <hr/>
        {/* <p>{recipe.RecipeID}</p> */}
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
          </div>) : <div>nothing to see here</div>} 
      </div>
    )
  }
}

export default withAuth(Favorites);





// componentDidMount(){
 /* this.server.get('/auth/me')
  .then(response =>{
    console.log(response.data)
  })
  .catch(error =>{
    console.log(error)
  })
  const response = await this.server.get('/food/favorite')
  console.log(response.data.favorites)
  this.setState({
    favoriteId: response.data.favorites
  })
  } 

  */  // componentDidMount() {
  //   this.setState({
  //     favoriteId: this.props.user.favorites
  //   })
  // }
