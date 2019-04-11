import { Component } from 'react';
import { decorate, observable, action, computed } from 'mobx';
import ServiceUrl from '../../../../src/Config.js'
import axios from 'axios';

class LoginStore extends Component {
  state = {
    fields: {
      username: "",
      password: ""
    },
    fieldErrors: {
      usernameError: "",
      passwordError: "",
    },
  }
  isLogined= null
  
  addDataLesson = (data) => {
    this.state.lessonSearchData.push(data);
  }
  changeStateLoginTrue() { 
    this.isLogined = true;
  }
  changeStateLoginFalse() {
    this.isLogined = false;
  }

  get loginAPI() {
    axios.post('http://localhost:3000/api/version1/users/signIn', {
      username: this.state.fields.username,
      password: this.state.fields.password
    })
    .then(function (response) {
      if(response.data.errorCode === 0) {
        console.log(response);
        localStorage.setItem('isLogined', 'true');
        localStorage.setItem('tokenUser', response.data.result.token);
        localStorage.setItem('userID', response.data.result.user._id);
        localStorage.setItem('userName', response.data.result.user.username);
        localStorage.setItem('userRole', response.data.result.user.role);
        return response;
      }else {
        console.log(response);
        localStorage.setItem('isLogined', 'false');
        return 0;
      }
    })
    .catch(function (error) {
      console.log(error);
      return 0;
    });
  }

  get getFieldErrors() {
    return this.state.fieldErrors
  }
}

decorate(LoginStore, {
  state: observable,
  isLogined: observable,
  loginAPI: computed,
  changeStateLoginTrue: action,
  changeStateLoginFalse: action,
  getFieldErrors: computed
});

export default LoginStore;
