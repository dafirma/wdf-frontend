import React, { Component } from 'react';
import '../stylesheets/Storage.scss'
//import Item from '../components/Item'
//import '../stylesheets/Item.scss'
class AddFood extends Component {
  constructor(props){
    super(props);
    this.state= {
      title: '',
      quantity:'',
     // image:'https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg'
    }
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.addFood(this.state)
    this.setState({
        title: '',
        quantity: ''
    })
}
handleChange(event) {
  let { name, value } = event.target;
  this.setState({[name]: value});
}
render()
{
  return (
    <div className="container-box-add-food">
      <form className='form-add-food' onSubmit={this.handleFormSubmit}>
            <div className='container-text-add-food'>
            <label>Name: </label>
            <input type="text" name="title" value={this.state.title} onChange={(event) => this.handleChange(event)} />
            </div>
            <div className='container-btn-addfood'>
            <button className="btn-add-food" type="submit"><span>Add food</span></button>
            </div>
      </form>
    </div>
  )
}
}


export default AddFood;