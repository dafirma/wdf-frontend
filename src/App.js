import React, { Component } from "react";
import { Switch,  } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import Favorites from "./pages/Favorites";
import Storage from './pages/Storage';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
//import FoodProvider from "./lib/FoodProvider"
import RecipeDetails from './pages/RecipeDetails';
import Test from './pages/Test';
import TestDetails from "./pages/TestDetails";
//import FoodProvider from "./lib/FoodProvider";
import FavoriteDetails from './pages/FavoriteDetails';
import './stylesheets/App.scss'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      recipes:[],
      favoriteId:this.props
    }
     this.getDataForPrivateFavorites = this.getDataForPrivateFavorites.bind(this) 
  }

 

 getDataForPrivateFavorites = (val) =>{
    const {favoriteId} = val;
    this.setState({favoriteId})
  }
  render() {
    return (
      <AuthProvider>
        <div>
           {/* <h1>WHAT DA FOOD</h1>  */}
          
         
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/Login" component={Login} />
            <PrivateRoute path exact ='/'component={SearchPage}/>
            <PrivateRoute path="/private" component={Private} sendToApp={this.getDataForPrivateFavorites}/>
            <PrivateRoute path ='/storage' component={Storage}/>
            <PrivateRoute path  ='/search' component={SearchPage}/>
            <PrivateRoute path  ='/favorites' component={Favorites} manu={{manu: 'manu'}} favoriteId={this.state.favoriteId} getData={()=>this.getDataForPrivateFavorites}/>
            <PrivateRoute path ='/abc' component={FavoriteDetails}/>
            <PrivateRoute path ='/recipe/:id' component={RecipeDetails}/>
            <PrivateRoute path = '/test' component={Test} />
            <PrivateRoute path = '/test/:id' component={TestDetails} />
          </Switch>
          <Navbar />
        </div>
      </AuthProvider>
    );
  }
}

export default App;
