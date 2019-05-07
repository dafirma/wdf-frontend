import React, { Component } from 'react';
import '../stylesheets/Storage.scss'
import Item from '../components/Item'
import '../stylesheets/Item.scss'
class AddFood extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: '',
      quantity:'',
     // image:'https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg'
    }
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.addFood(this.state)
    this.setState({
        name: '',
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
    <div className="container-box">
      <form onSubmit={this.handleFormSubmit}>
          <div className='container-form'>
          <div className='container-text'>
           <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)} />
          </div>
            <button className="button is-info" type="submit">Add food</button>
          
          </div>
          
            
      </form>
    </div>
  )
}
}

export default AddFood;