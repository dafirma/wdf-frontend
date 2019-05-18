import React, { Component } from "react";
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import {Switch} from 'react-router-dom';
import Dashboard from './Dashboard';

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
      baseURL:process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
    this.favTest = this.props.favTest
  }
 
   async componentDidMount(){
      this._isMounted = true;
      const edaId = 'd5c3f152';
      const edaKey = '71a22a30005b3166674bfb754a7d10ff';
    

     let randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      
      };
      let a = randomNumber(0,50);
      let b = randomNumber(60,100);
    
      const {ingPreference} =this.state;
      const response = await axios.get(`https://api.edamam.com/search?q=${ingPreference}&app_id=${edaId}&app_key=${edaKey}&from=${a}&to=${b}`)
      if(this._isMounted){
        this.setState({
          recipes:response.data.hits,
          status: 'isLoaded',
        })
      }
    } 

    
   getData = (val) => { 
     const {favoriteId} = val
     this.setState({
       favoriteId: [favoriteId]
     })
    // console.log(this.state.favoriteId)
    // console.log(this.props)
   }
   newf = (val)=>{
     console.log('ok',val);
     //console.log(this.state.favoriteId)
     this.setState({
       favoriteId: val
     })
   }



  render(){
  //console.log(this.props)
  //console.log('fav',this.state.favoriteId)
 // console.log(this.props)
  
    return(
      <div>
   
    
       {/*  <h2> private </h2> */}
        
        <Switch>
        <Dashboard recipes={this.state.recipes} status={this.state.status} sendData={this.getData} testD={this.newf}/>
        
        
        </Switch>     
        </div>
    )
  }
}

export default withAuth(Private);
 