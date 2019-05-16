import React, {Component} from 'react';
import '../stylesheets/Item.scss'

class FoodBox extends Component {
  constructor(){
    super();
    this.state = { 
      quantity:1
    }
  }

  handleChange(event){
    let {value} =event.target;
    this.setState({
      quantity:value
    })
    console.log(this.state)
  }
  clickHandler(event){
    this.props.addMenu({
      title: this.props.title,
      quantity:this.state.quantity,
      type: this.props.type
    })
  }

  render(){
    return(
      <div className="container-box">
      <div>
            <p>
              <strong>{this.props.title}</strong>
              {/* <small>{this.props.quantity} Un</small> */}
            </p>
            </div>
          <div>
              {/* <input
                className="input"
                type="number" 
                value={this.state.quantity}
                onChange= {(event) => this.handleChange(event)}
              /> */}
            </div>
            <div className="control">
              <button className="btn-counter" onClick = {(event) => this.clickHandler(event)}>
                +
              </button>
              <button className="btn-counter" onClick = {(event) => this.clickHandler(event)}>
                -
              </button>
            </div>
    </div>
    )
  }
}
export default FoodBox;
