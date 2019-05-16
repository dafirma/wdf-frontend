import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../image/whatdafood_logo.png';
import '../stylesheets/Signup.scss';
class Signup extends Component {
  state = {
    username: "",
    password: "",
    preference:""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, preference } = this.state;
    this.props.signup({ username, password, preference });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, preference } = this.state;
    return (
      <div className='container-signup'>
        <div className='container-logo'>
            <img src = {logo} alt='logo-wdf'/>
        </div> 
        <div className='container-form'>
          <form  className='form-signup' onSubmit={this.handleFormSubmit}>
          <div className='container-input'>
            <label></label>
            <input
              type="text"
              name="username"
              placeholder='Username'
              value={username}
              onChange={this.handleChange}
            />

          </div>  
          <div className='container-input'> 
          <label></label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder='Password'
            onChange={this.handleChange}
          />

        </div>
          <div className='container-input'>
          <label></label>
          <input
            type="text"
            name="preference"
            value={preference}
            placeholder='Favorite food'
            onChange={this.handleChange}
          />
          </div>
          <input type="submit" value="Signup" />
        </form>


          </div>
        
        <p className='text-signup'>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
