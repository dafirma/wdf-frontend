import React, { Component } from 'react';
class AddFood extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: '',
      quantity:'',
      image:'https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg'
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
    <div className="box">
      <form onSubmit={this.handleFormSubmit}>

           <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)} />
          <label>Quantity:</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={(event) => this.handleChange(event)} />
            <div>
            <button className="button is-info" type="submit">Add food</button>
            </div>
            
      </form>
    </div>
  )
}
}

export default AddFood;