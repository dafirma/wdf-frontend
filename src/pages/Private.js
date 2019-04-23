import React, { Component } from "react";
//import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
//import SearchBar from '../components/SearchBar';
//import Storage from './Storage';
//import Header from '../components/Header';
//import { Link } from 'react-router-dom';
//import RecipeList from './RecipeList';
//import Main from './Main'
//import RecipeDetails from "./RecipeDetails";
//import RecipeMain from "./RecipeMain";
import Dashboard from './Dashboard';
class Private extends Component {
    state ={
      recipes:[],
      status:'isLoading',
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

  render(){
    //const {recipes, status} =this.state;
    return(
      <div>
        {/* <Main /> */}
        <Dashboard recipes={this.state.recipes} status={this.state.status}/>

        }
        </div>
    )
  }
}

export default withAuth(Private);
 
