import React, { Component } from 'react';
import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';
//import { Link } from 'react-router-dom';

class RecipeMain extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = { 
        recipes:[],
        status:'isLoading',
        recipeNew:[]
    }

  }
  async componentDidMount(){
    this._isMounted = true;
    const edaId = 'd5c3f152';
    const edaKey = '71a22a30005b3166674bfb754a7d10ff';
    const response = await axios.get(`https://api.edamam.com/search?q=potato&health=vegetarian&app_id=${edaId}&app_key=${edaKey}&from=0&to=3&calories=591-722`)
    if(this._isMounted){
      this.setState({
        recipes:response.data.hits,
        status: 'isLoaded',
      })
    }
  }
  
    
  componentWillUnmounted(){
    this._isMounted = false;
  }
   onTermSubmit = async term =>{
    const item = term;
    const edaId = 'd5c3f152';
    const edaKey = '71a22a30005b3166674bfb754a7d10ff';
    const response = await axios.get (`https://api.edamam.com/search?q=${item}&app_id=${edaId}&app_key=${edaKey}`)
    this.setState({
      recipes:response.data.hits
    })
  
   }
  
  


  render(){
    const { recipes,status } = this.state; 
    console.log(status);

    //let sizeObj = Object.keys(recipes).length;
    //console.log(sizeObj);
    // eslint-disable-next-line default-case
    switch(status){
      case 'isLoading':
      return 'Loading...'
      case 'isLoaded':
      return(
        <div>
          <h1>Based on your preference</h1>
          {recipes.map((recipe, index) =>
          <div key = {index}>
          <button onClick={()=>this.setState({recipeNew:recipe})}>
          <img src= {recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
            <p>Calories: {parseInt(recipe.recipe.calories)}</p>
            </button>
            </div>
            )}
          </div>
      )
    }
  }
}

export default withAuth(RecipeMain);



