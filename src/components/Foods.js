import React, { Component } from 'react';
import foods from '../data/foods.json';
import FoodBox from './FoodBox';

class Food extends Component {
  constructor(){
    super();
    this.state = {
      foods: [...foods]
    }
  }
  addFood = ()=>{
    let newFood=[...this.state.foods] 
  }
  render() {
    console.log(foods)
    return(
      <div>
        <button onClick={this.addFood}>add food</button>
        {this.state.foods.map((oneFood, index) => {
          return <FoodBox key={index} {...oneFood}/>
        })}
      
      </div>
    )
  }
};

export default Food;