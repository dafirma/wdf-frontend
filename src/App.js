import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

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
import RecipeDetails from './pages/RecipeDetails';
import Test from './pages/Test';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>WHAT DA FOOD</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            {/* <PrivateRoute path exact ='/'component={RecipeDetails}/> */}
            <PrivateRoute path ='/storage' component={Storage}/>
            <PrivateRoute path  ='/search' component={SearchPage}/>
            <PrivateRoute path  ='/favorites' component={Favorites}/>
            <PrivateRoute path ='/recipe/:id' component={RecipeDetails}/>
            <PrivateRoute path = '/test' component={Test} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
