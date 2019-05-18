import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authStore => {
            return (
              <Comp
                login={authStore.login}
                signup={authStore.signup}
                user={authStore.user}
                logout={authStore.logout}
                isLoggedin={authStore.isLoggedin}
                favTest={authStore.favorite}
                favNumber = {authStore.fav}
                getData={authStore.update}
                messageError={authStore.message}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true,
    favoriteId:[],
    fav:[],
    message:false
  };


  componentDidMount() {
    auth
      .me()
      .then(user => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false,
  
        });
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
      });
  }
  favorite = ()=>{
   // console.log('favorito contexto')
    auth
    .fav()
    .then(resp =>{
     // console.log('result backend',resp)
       this.setState({
        fav:resp
      })
    })
    .catch(({response:{data:error}}) => {
      this.setState({
        message:error.statusMessage
      })
    })
  }

  update = () => {
   // console.log('estoy actualizando!!')
        auth
      .me()
      .then(user => {
        //console.log(user)
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false,
  
        });
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
      });
  }

  signup = user => {
    const { username, password, preference } = user;
    auth
      .signup({ username, password, preference })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(({ response: { data: error } }) => {
        this.setState({
          message: error.statusMessage
        });
      });
  };

  login = user => {
    const { username, password } = user;
    auth
      .login({ username, password })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch((err) => {
       // console.log(err)
        this.setState({
          message:err
        })
      });
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: null
        });
      })
      .catch(() => {});
  }; 

  render() {
    const { isLoading, isLoggedin, user, fav, message } = this.state;
   // console.log(this.props)
    //console.log(user);
    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login: this.login,
          logout: this.logout,
          signup: this.signup,
          favorite:this.favorite,
          favNumber: fav,
          update: this.update,
          messageError:message
          //or messageError:this.state.message
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;
