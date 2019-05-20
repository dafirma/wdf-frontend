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
    const item = term;
    const time = term.termTime;
    const ingredient = term.termIng;
    const health = term.termHealth;
    const caloriesFrom = term.termCaloriesFrom;
    const caloriesTo = term.termCaloriesTo;
    const error = term.searchError;
    const edaId = 'd5c3f152';
    const edaKey = '71a22a30005b3166674bfb754a7d10ff';
    console.log(item);
    console.log(error)
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
          //statusRes:res.status,
        })
    }else if(health.length > 0 && time.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&health=${health}&time=${time}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          //statusRes:res.status,
        })
    }else if(health.length > 0 && (caloriesFrom.length > 0 || caloriesTo.length > 0)){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&health=${health}&calories=${caloriesFrom}-${caloriesTo}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          //statusRes:res.status,
        })
    }else if(time.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&time=${time}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          //statusRes:res.status,
        })
    }else if(time.length > 0 && (caloriesFrom.length > 0 || caloriesTo.length >0) ){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&time=${time}&calories=${caloriesFrom}-${caloriesTo}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          //statusRes:res.status,
        })
    }else if(caloriesFrom.length > 0 && caloriesTo.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}&calories=${caloriesFrom}-${caloriesTo}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          //statusRes:res.status,
        })
    }else if(ingredient.length > 0){
      const response = await axios.get (`https://api.edamam.com/search?q=${ingredient}&app_id=${edaId}&app_key=${edaKey}`)
      this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
          //statusRes:res.status,
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
       <div>
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



