import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import FoodBox from '../components/FoodBox';
import AddFood from '../components/AddFood';
import Item from '../components/Item';
import '../stylesheets/Storage.scss';
import axios from 'axios';
// import from db food storage ???

class Storage extends Component {
  constructor(props){
    super(props);
    this.state={
      foods: [],
      menu: []
    }
    this.server = axios.create({
      baseURL:'http://localhost:5000',
      withCredentials: true
    });
  }

  componentDidMount(){
    this.setStorage()
  }
  addFood = theFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    console.log(foodsCopy)
    this.setState({
        foods: foodsCopy
    })
  }

  deleteFood = (foodIndex,foodName) => {
    const foodsCopy = [...this.state.foods]
    const menuCopy = [...this.state.menu]
    console.log(foodIndex)
    console.log(foodName)
    this.server.post('/food/storage',{foodName})
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
    const menu = menuCopy;
    this.server.put('/food/storage', {menu})
    .then(response =>{
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  setStorage(){
    const res = this.server.get('/food/storage')
    .then(result =>{
      console.log(result.data.storage)
       this.setState({
         menu:result.data.storage
       }) 
     })
  }


  render(){
    let foodList = [...this.state.foods];
    let newMenu = [...this.state.menu]
    //let storageServer;
    console.log(newMenu)
    console.log(foodList)
    console.log(this.props.user)
    return(
      <div className='container-storage'>
        <h2>STORAGE</h2>
        <AddFood addFood={this.addFood}/>
        <div className="container-food">
          <div className="food-list">
          <hr/>
          <div>
          {}
          </div>
          <hr/>
            {foodList.map ((food, index) => 
            { return <FoodBox  key= {index} {...food} addMenu= {this.addMenu}/>})}
              <div className='container-edit'>
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