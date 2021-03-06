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
    if(username.length < 2 || password < 2 || preference < 2){
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
        <div className='container-logo-signup'>
            <img className='logo-signup' src = {logo} alt='logo-wdf'/>
        </div> 
        {formErrors && 
        <div><h2>Error, fields too short!</h2></div> }
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
          
          <div className='container-btn-signup'>
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
