import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import FoodBox from '../components/FoodBox';
import AddFood from '../components/AddFood';
import Item from '../components/Item'
// import from db food storage ???

class Storage extends Component {
  constructor(props){
    super(props);
    this.state={
      foods: [],
      menu: []
    }
  }

  addFood = theFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    console.log(foodsCopy)
    this.setState({
        foods: foodsCopy
    })
  }

  deleteFood = foodIndex => {
    const foodsCopy = [...this.state.foods]
    const menuCopy = [...this.state.menu]
    console.log(foodIndex)
     foodsCopy.splice(foodIndex, 1)
     menuCopy.splice(foodIndex, 1)
    this.setState({
        foods: foodsCopy,
        menu: menuCopy
    })
  }

  /* addMenu = plusFood =>{
    console.log(plusFood.quantity)
    const foodsCopy = [...this.state.foods]
    console.log(foodsCopy.quantity)
  } */

  addMenu = food =>{
    console.log(food);
    let menuCopy = [...this.state.menu];
    let exists = false;
    menuCopy.forEach(elem =>{
      if(elem.name === food.name){

        let temp = parseInt(elem.quantity) + parseInt(food.quantity);
        console.log(temp)
        elem.quantity = temp
       // elem.quantity += food.quantity;
        exists = true;
      }
    })
    if(!exists){
      menuCopy.push(food)
    }
    this.setState({
      menu: menuCopy
    })
  }
  


  render(){
    let foodList = [...this.state.foods];
    console.log(foodList)
    return(
      <div>
        <h2>STORAGE</h2>
        <AddFood addFood={this.addFood}/>
        <div className="container-food">
          <div className="food-list">
            {foodList.map ((food, index) => 
            { return <FoodBox  key= {index} {...food} addMenu= {this.addMenu}/>})}
              <div>
              Edit Storage:
            <ul>
           {this.state.menu.map((food, index) => {
             return <Item key={index} {...food} deleteFood={this.deleteFood}/>})}
          </ul>

              </div>
          </div>
        </div>
        </div>
    )
  }
}

export default withAuth(Storage);