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
    this.getData = this.props.getData
    this.state={
      foods: [],
      menu: [],
  
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

  deleteFood = food => {
    const foodsCopy = [...this.state.foods]
    const menuCopy = [...this.state.menu]
    console.log(food);
    console.log(menuCopy)
   /*  menuCopy.forEach(elem =>{
      if(elem.name === food.name){
        let temp = parseInt(elem.quantity) - parseInt(food.quantity);
        console.log(temp)
        elem.quantity = temp
      }
    }) */
  
    
    
   /*  menuCopy.forEach(elem => {
      if(elem.name === foodName){
        let temp = parseInt(elem.quantity) - parseInt(foodQnt)
        console.log('sub',temp)
      }
    }) */
    /* this.server.post('/food/storage',{foodName})
     foodsCopy.splice(foodIndex, 1)
     menuCopy.splice(foodIndex, 1)
    this.setState({
        foods: foodsCopy,
        menu: menuCopy
    }) */
  }

  /* addMenu = plusFood =>{
    console.log(plusFood.quantity)
    const foodsCopy = [...this.state.foods]
    console.log(foodsCopy.quantity)
  } */

  addMenu = tempFood =>{
    console.log(tempFood);
    let menuCopy = [...this.state.menu];
    let exists = false;
    let food = tempFood;
    menuCopy.forEach(elem =>{
      if(elem.title === food.title){

        let temp = parseInt(elem.quantity) + parseInt(food.quantity);
        console.log(temp)
        elem.quantity = temp
        food.quantity = temp;
       // elem.quantity += food.quantity;
        exists = true;
      }
    })
    if(!exists){
      menuCopy.push(food)
    }
    this.server.put(`/food/storage/new`, {food})
    .then(response =>{
      console.log(response.data.storage)
      this.setState({
        menu: response.data.storage
      })
    })
    .catch(error =>{
      console.log(error)
    })

    const menu = menuCopy;
    console.log(food.quantity)
    console.log('atualizado:',food.quantity)
    this.setStorage()
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
//olhar porque nao devolve a array atualizada do backend em funcao das cookies

  render(){
    let foodList = [...this.state.foods];
    let newMenu = [...this.state.menu]
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