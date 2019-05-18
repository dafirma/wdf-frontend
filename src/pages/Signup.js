import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../image/whatdafood_logo.png';
import '../stylesheets/Signup.scss';
class Signup extends Component {
  state = {
    username: "",
    password: "",
    preference:"",
    formValid:false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, preference } = this.state;
    if(username ==='' || password ==='' || preference=== ''){
      //console.log('vazio')
      this.setState({
        formErrors: true
      })
  } else{
    this.props.signup({ username, password, preference });
    
  }
}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, preference } = this.state;
    const {formErrors} =this.state;
    return (
      <div className='container-signup'>
        <div className='container-logo'>
            <img src = {logo} alt='logo-wdf'/>
        </div> 
        {formErrors && 
        <div><h2>Error, fields empty!</h2></div> }
        <form className='ui-form' onSubmit={this.handleFormSubmit}>
          <div className='container-input-signup'>
            <div className='container-child-searchbar'>
              <div className='container-input-signup'>
              <input
                onChange={this.handleChange}
                value={username}
                name='username'
                type='text'
                className='centerInput'
                placeholder='Username'
              />
              </div>
              <div className='container-input-signup'>
                <input
                  onChange={this.handleChange}
                  value={password}
                  name='password'
                  type='password'
                  className='centerInput'
                  placeholder='Password'
                />

              </div>
              <div className='container-input-signup'>
                <input
                  onChange={this.handleChange}
                  value={preference}
                  name='preference'
                  type='text'
                  className='centerInput'
                  placeholder='Favorite Food'
                />

              </div>
            </div>
          
          <div >
            <button className='btn-signup'type='submit'><p>Signup</p></button>
          </div>
        </div>
        </form>
       
        <p className='text-signup'>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);




/* 


<div className='container-form'>
<form  className='ui-form-signup' onSubmit={this.handleFormSubmit}>
  <div className='container-input-signup'>
    
    <input
      type="text"
      name="username"
      placeholder='Username'
      value={username}
      className='centerInput'
      onChange={this.handleChange}
    />
  </div>  
  <div className='container-input-signup'> 
    <input
      type="password"
      name="password"
      value={password}
      placeholder='Password'
      className='centerInput'
      onChange={this.handleChange}
    />
  </div>
  <div className='container-input-signup'>
    <input
      type="text"
      name="preference"
      value={preference}
      placeholder='Favorite food'
      className='centerInput'
      onChange={this.handleChange}
    />
  </div>  
  <div className='container-btn-signup'>
    <button className='btn-signup' type="submit"  ><span>Signup</span></button>
  </div>
</form>
</div> */
