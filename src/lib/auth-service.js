import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_FIREBASE,
      withCredentials: true
    });
  }

  signup(user) {
    const { username, password, preference } = user;
    return this.auth
      .post("/auth/signup", { username, password, preference })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(response => response.data);
  }

  me() {
    return this.auth.get("/auth/me")
    .then(response =>{
     // console.log(response)
      return response.data
    })
  }

  fav(){
    return this.auth.get("/food/favorite")
    .then(response => response.data)
 
  }

  sendToApp(val){
   // const {favorites} =val
    //console.log(favorites);
  }
  
}

const auth = new Auth();

export default auth;
