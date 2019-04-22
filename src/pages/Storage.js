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
    const menuCopy = [...this.state.menu]

     menuCopy.splice(foodIndex, 1)
    this.setState({
        menu: menuCopy
    })
  }
  


  render(){
    let foodList = [...this.state.foods];
    return(
      <div>
        <h2>STORAGE</h2>
        <AddFood addFood={this.addFood}/>
        <div className="container-food">
          <div className="food-list">
            {foodList.map ((food, index) => 
            { return <FoodBox  key= {index} {...food} addMenu= {this.addMenu}/>})}
            <ul>
           {this.state.menu.map((food, index) => {
             return <Item key={index} {...food} deleteFood={this.deleteFood}/>})}
          </ul>
          </div>
        </div>
        </div>
    )
  }
}

export default withAuth(Storage);