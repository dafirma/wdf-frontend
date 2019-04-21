/* eslint-disable default-case */
import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import axios from 'axios';


class Dashboard extends Component{
  state ={
    recipes: [],
    status: 'isLoading',
  }
  componentDidMount(){
    const appId = 'd5c3f152';
    const appKey ='96a338c7df16e4ccf534e45c8aff7f1a';
    axios.get(`https://api.edamam.com/search?q=tomato&app_id=${appId}&app_key=${appKey}&from=0&to=2&calories=100-400`)
    .then(result =>{
      console.log(result.data)
      this.setState({
        recipes: result.data,
        status:'isloaded',
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({
        status:'isError'
      })
    })
  }
  render () {
    const { recipes} = this.state;
    console.log(recipes);
    return(
      <div>
        <h2>Dashboard</h2>
      
        </div>)}
}
export default withAuth(Dashboard);