import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';
import RecipeList from './RecipeList';
import '../stylesheets/Search.scss';

class SearchPage extends Component {
  constructor(){
    super();
    this.state = {
      recipes: [],
      status: 'isLoading',
      statusRes:'',
      position:''
    }
    this.myRef = React.createRef()
  }
  onTermSubmit = async term =>{
    const time = term.termTime;
    const ingredient = term.termIng;
    const health = term.termHealth;
    const caloriesFrom = term.termCaloriesFrom;
    const caloriesTo = term.termCaloriesTo;
    const edaId = process.env.REACT_APP_EDAID;
    const edaKey = process.env.REACT_APP_EDAKEY;
    if(ingredient ===''){
      this.setState({
        statusRes: 'empty'
      })
    } else if( health.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&health=${health}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          newPosition: true
        })
    }else if(health.length > 0 && time.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&health=${health}&time=${time}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
    }else if(health.length > 0 && (caloriesFrom.length > 0 || caloriesTo.length > 0)){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&health=${health}&calories=${caloriesFrom}-${caloriesTo}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
    }else if(time.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&time=${time}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
    }else if(time.length > 0 && (caloriesFrom.length > 0 || caloriesTo.length >0) ){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&time=${time}&calories=${caloriesFrom}-${caloriesTo}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
    }else if(caloriesFrom.length > 0 && caloriesTo.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&calories=${caloriesFrom}-${caloriesTo}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
    }else if(ingredient.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          newPosition: true
        })
    }
 
   }
  
   render(){
     const condError = this.state.statusRes;
     const {recipes} = this.state;
     return(
       <div className='container-searchPage'>
        {condError &&
        <div className='msg-error'>
          <h2> Not recipes found, try again</h2>
        </div>} 
        <SearchBar onTermSubmit={this.onTermSubmit} />
          { recipes ?
        <div>
          <RecipeList recipes={this.state.recipes} status={this.state.status} statusRes={this.state.statusRes}/>
        </div>: 
        <div>
            <h2>
              error
            </h2>
        </div>}
        <div>
      </div>
    </div>
    )
  }
}
export default withAuth (SearchPage);



