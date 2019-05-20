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
    //console.log(this.state)
  }
  clickHandler(event){
    this.props.addMenu({
      title: this.props.title,
      quantity:this.state.quantity,
      unity: this.props.unity,
      
    })
  }
  clickHandlerMinus(event){
    this.props.deleteMenu({
      title: this.props.title,
      quantity:this.state.quantity,
      unity: this.props.unity
    })
  }

  render(){
    return(
        <div className="container-box">
        <div>
          <h3>Quantity</h3>
          <p>
            {this.props.title}:
              {/* <small>{this.props.quantity} Un</small> */}
          </p>
        </div>   
        <div className="control">
          <div className='container-btn-counter-plus'>
            <button className="btn-counter-plus" onClick = {(event) => this.clickHandler(event)}>
              <span> +1</span>
            </button>
          </div>
          <div className='container-btn-counter-minus'>
            <button className="btn-counter-minus" onClick = {(event) => this.clickHandlerMinus(event)}>
              <span>-1</span>
            </button>
          </div>  
        </div>
    </div>
    )
  }
}
export default FoodBox;
