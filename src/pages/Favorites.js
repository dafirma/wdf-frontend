import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';


class Favorites extends Component {
  constructor(props){
    super(props);
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
  async componentDidMount(){
  this.server.get('/auth/me')
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
  

  render(){
    const {favoriteId} = this.state
    //const test = this.props
    console.log(favoriteId)

    return(
      <div>
        <h2>FAVORITES</h2>
        {favoriteId.map((recipe,index) =>
          <div key={index}>
          <p>{recipe.label}</p>
          <img src={recipe.image} alt={recipe.title}/>
          <p>Calories: {parseInt(recipe.calories)}</p>
          <div>
           <p>health Labels:</p> 
           {recipe.healthLabels.map((cardHealth, indexHealth)=>
            <p key={indexHealth}>{cardHealth}</p>)}
          </div>
          </div>)}
        </div>
    )
  }
}

export default withAuth(Favorites);