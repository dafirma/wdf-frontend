import React, { Component } from 'react';
import '../stylesheets/Storage.scss';
class AddFood extends Component {
  constructor(props){
    super(props);
    this.state= {
      title: '',
      quantity:'',
      unity:'',
      formError:false
     }
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    if(this.state.title ==='' || this.state.unity ===''){
      this.setState({
        formError: true
      })
    }else{
      this.props.addFood(this.state)

    }
}
handleChange = event =>{
  let { name, value } = event.target;
  this.setState({[name]: value});
}
render()
  {
    const {formError} =this.state;
  return (
    <div className="add-food">
      <form className='form-addfood' onSubmit={this.handleFormSubmit}>
        <div>
          {formError && 
          <div><h3>Empty fields</h3></div>}
          <input type="text" name="title"  placeholder='eg.: chocolate' value={this.state.title} onChange={(event) => this.handleChange(event)} />
            <div>

            </div>
          <div className='container-unity'>
            <h3>Un: </h3>
            <div className='unityOptions'>
              <div className='float-addfood'>
                <label> 
                <input name="unity" 
                            type="radio" 
                            value="l"
                            onChange={this.handleChange} 
                
                  />  Liter 
                </label> 
              </div>
              <div className='float-addfood'>
                <label> 
                <input name="unity" 
                            type="radio" 
                            value="ml"
                            onChange={this.handleChange} 
                    
                  />  Mililiter 
                </label> 
              </div>
              <div className='float-addfood'>
                <label> 
                <input name="unity" 
                            type="radio" 
                            value="Kg"
                            onChange={this.handleChange} 
                
                  />  Kilo 
                </label> 
              </div>
              <div className='float-addfood'>
                <label> 
                <input name="unity" 
                            type="radio" 
                            value="mg"
                            onChange={this.handleChange} 
                  />  Miligram
                </label> 
              </div> 
            </div>
          </div>
          <div className='container-btn-plus-food'>
          <button className='btn-plus-food'type='submit'><p>Add Food</p></button>
        </div>
        </div>       
      </form>
    </div>
    
    )
  } 
}

export default AddFood;
