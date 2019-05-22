import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import '../stylesheets/Login.scss'
import logo from '../image/whatdafood_logo.png'
import {Link} from 'react-router-dom';


class Login extends Component {
  state = {
    username: "",
    password: "",
    formErrors:'',
    emailValid: false,
    passwordValid:false,
    formValid:false,
    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if(username ==='' || password ===''){
      //console.log('vazio')
      this.setState({
        formErrors: true
      })
    }else{
      this.props.login({ username, password });

    }
  };
  

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    const {formErrors} = this.state;

    return (
      <div className='container-signup'>
      <div className='container-logo-signup'>
          <img src = {logo} alt='logo-wdf'/>
      </div> 
      {formErrors && 
      <div><h2>Error, fields empty!</h2></div> }
      <form className='ui-form-signup' onSubmit={this.handleFormSubmit}>
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
            
          </div>
        
        <div className='container-btn-signup'>
          <button className='btn-signup'type='submit'><p>Login</p></button>
        </div>
      </div>
      </form>
            <li> To create account <Link to="/signup"><span className='text-to-signup'>Sign Up</span></Link></li>
            </div>
      
    );
  }
}

export default withAuth(Login);

/* 

<div className='container-main-input'>
              <div className='container-input-login'> 
                {formErrors && 
                <div><h2>Error, fields empty!</h2></div> }
                <label></label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </div>
              <div className='container-input-login'>
                <label></label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                </div>
                <div className='container-btn-login'>
                 <button className='btn-login' type="submit"><p>Login</p></button>
                </div>
                </div> */