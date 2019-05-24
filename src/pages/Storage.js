import React, {Component} from 'react';
import { withAuth } from '../lib/AuthProvider';
import FoodBox from '../components/FoodBox';
import AddFood from '../components/AddFood';
import Item from '../components/Item';
import '../stylesheets/Storage.scss';
import axios from 'axios';

class Storage extends Component {
  constructor(props){
    super(props);
    this.getData = this.props.getData
    this.state={
      foods: [],
      menu: [],
  
    }
    this.server = axios.create({
      baseURL:process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
  }

  componentDidMount(){
    this.setStorage()
  }
  addFood = theFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    this.setState({
        foods: foodsCopy
    })
  }

  deleteFood = (food) => {
    const menuCopy = [...this.state.menu]
    let index = menuCopy.findIndex(elem => elem.title === food)
    menuCopy.splice(index,1)
    this.setState({
      menu:menuCopy
    })
    this.server.post('/food/storage',{food})
  
  }
    

  addMenu = tempFood =>{
    let menuCopy = [...this.state.menu];
    let exists = false;
    let food = tempFood;
    menuCopy.forEach(elem =>{
      if(elem.title === food.title){
        let temp = parseInt(elem.quantity) + parseInt(food.quantity);
        elem.quantity = temp
        food.quantity = temp;
        exists = true;
    
      }
    })
    if(!exists){
      menuCopy.push(food)
    }
    this.setState({
      menu:menuCopy
    }) 
   
   this.server.put (`/food/storage/new`,{food})
   .then(resp =>{
     console.log(resp.data.storage)
   })
   .catch(err =>{
     console.log(err)
   })
    //.then(response =>{
     // console.log()
   // })
    //.catch(error =>{
     // console.log(error)
    //})
    //this.setStorage() 
  } 

  setStorage(){
    this.server.get('/food/storage')
    .then(result =>{
      console.log('antes')
      //console.log(result.data.storage)
          this.setState({
          menu:result.data.storage
        }) 
     })
     console.log('depois')
  } 

  deleteMenu = delFood =>{
   // console.log(delFood)
    let menuCopy = [...this.state.menu];
    let exists = false;
    let food = delFood;
    menuCopy.forEach(elem =>{
      if(elem.title === food.title){
        let temp = parseInt(elem.quantity) - parseInt(food.quantity);
       //// console.log(temp)
        elem.quantity = temp
        food.quantity = temp;
        exists = true;
        if(food.quantity <= 0){
          menuCopy.splice(elem, 1)
         // console.log('del', menuCopy)
         // console.log(elem)
        }
      }
    })
    if(!exists){
      menuCopy.push(food)
    }
    this.setState({
      menu:menuCopy
    })
    this.server.put(`/food/storage/new`, {food})
    //.then(response =>{
     // console.log(response.data.storage)
      /* this.setState({
        menu: response.data.storage
      }) */
    //})
   // .catch(error =>{
      //console.log(error)
   // })

   // const menu = menuCopy;
    //console.log(food.quantity)
    //console.log('atualizado:',food.quantity)
    //this.setStorage()
  }


  render(){
    let foodList = [...this.state.foods];
    //let newMenu = [...this.state.menu]
    ///console.log(newMenu)
    return(
      <div className='container-storage'>
        <h2>Storage</h2>
        <AddFood addFood={this.addFood} />
        <div className="container-food-storage">
          <hr/>
          <div className="food-list">
            <div className='container-foodbox'>
              {foodList.map ((food, index) => 
                {return <FoodBox  key= {index} {...food} addMenu= {this.addMenu} deleteMenu={this.deleteMenu}/>})}
            </div>
            <div className='container-item'>
              <ul>
            {foodList &&
            <h3>List</h3>}
                {this.state.menu.map((food, index) => {
                  return <Item key={index} {...food} {...index} deleteFood={this.deleteFood}/>})}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Storage);