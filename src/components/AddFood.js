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
      unity:'',
      formError:false
     }
  }
  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    if(this.state.title ==='' || this.state.unity ===''){
      console.log('empty')
      this.setState({
        formError: true
      })
    }else{
      this.props.addFood(this.state)

    }
    
/*    this.setState({
        title: '',
        quantity: '',
        type:''
    }) */
}
handleChange = event =>{
  let { name, value } = event.target;
  console.log(event.target.value)
  this.setState({[name]: value});
 // console.log(name,value)
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




/* 
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

 <div className='container-btn-plus-food'>
          <button className='btn-plus-food'type='submit'><p>Add Food</p></button>
        </div>


*/