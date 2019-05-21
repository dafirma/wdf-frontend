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
   // console.log(this.props)
    
    //{console.log(this.props.user)}

    return (
    
      <div className='parent-login'>
      <div className='login'>
        <div className='container-login'>
          <div className='container-logo'>
            <img src = {logo} alt='logo-wdf'/>
          </div> 
          <form className='form-login'onSubmit={this.handleFormSubmit}>
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
        
        </div>
        
      </form>
     <li> To create account <Link to="/signup"><span className='text-to-signup'>Sign Up</span></Link></li>
     </div>
    </div>
    </div>
      
    );
  }
}

export default withAuth(Login);
