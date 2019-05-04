import React, {Component} from 'react';

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
      name: this.props.name,
      quantity:this.state.quantity,
      type: this.props.type
    })
  }
  render(){
    return(
      <div className="box new-box">
      <article className="media">
      <div className="media-left new-media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt ='' width='30%'/>
      </figure>
    </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong>: 
              <small>{this.props.quantity} Un</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control new-control">
              <input
                className="input"
                type="number" 
                value={this.state.quantity}
                onChange= {(event) => this.handleChange(event)}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick = {(event) => this.clickHandler(event)}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
    )
  }
}

export default FoodBox