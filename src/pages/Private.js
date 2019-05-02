import React, { Component } from "react";

import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
////import SearchPage from './SearchPage';
//import Storage from './Storage';
import { Route, Switch} from 'react-router-dom';
//import RecipeDetails from "./RecipeDetails";
import Dashboard from './Dashboard';
//import PrivateRoute from '../components/PrivateRoute';
//import Favorites from './Favorites';
//import PrivateNavbar from "../components/PrivateNavbar";

class Private extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes:[],
      status:'isLoading',
      ingPreference: this.props.user.preference,
      favoriteId:[],
      inFavorites:[],
    }
    this.getData = this.getData.bind(this);
    this.server = axios.create({
      baseURL:'http://localhost:5000',
      withCredentials: true
    });
  }
   async componentDidMount(){
      this._isMounted = true;
      const edaId = 'd5c3f152';
      const edaKey = '71a22a30005b3166674bfb754a7d10ff';
      const {ingPreference} =this.state;
      const {favorites} =this.state
      console.log(edaId);
      console.log(ingPreference);
      const response = await axios.get(`https://api.edamam.com/search?q=${ingPreference}&app_id=${edaId}&app_key=${edaKey}&from=0&to=10`)
      if(this._isMounted){
        this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
      }
    } 

    
    

   getData = (val) => { 
     let favCopy = this.state.favoriteId;
     const {favoriteId} = val
    // console.log(favoriteId)
     this.setState({
       favoriteId: [favoriteId]
     })
     //this.props.sendToAuth({favoriteId})
     console.log(this.state.favoriteId)
     console.log(this.props)
     /* return this.server
     .put('/food/favorite', {favoriteId})
     .then((res) =>{
       console.log(res)
     })
     .catch(error =>{
       console.log(error)
     }) */
    // this.props.test({favoriteId})
   }



  render(){
  console.log(this.props)
  
    return(
      <div>
        <h2> private </h2>
        
        <Switch>
        <Dashboard recipes={this.state.recipes} status={this.state.status} sendData={this.getData}/>
        
        
        </Switch>      
        </div>
    )
  }
}

export default withAuth(Private);
 
/* 

render(){
  const {recipe} =this.state

  return(
    <div>
      <h2> private </h2>
      
      <Switch>
      <Dashboard recipes={this.state.recipes} status={this.state.status} sendData={this.getData}/>
      
      
      </Switch>      
      </div>
  )
} */