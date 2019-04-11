import React, {Component} from 'react';
//** Import file */
import Login from './LoginPresentation';
import { observer } from "mobx-react"
import UserStore from './LoginStore';
import axios from 'axios';

let stores = new UserStore();

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        password: ""
      },
      fieldErrors: {
        usernameError: null,
        passwordError: null,
      },
      isLogined: null
    };
  }
  componentDidMount() {
    if(localStorage.getItem('isLogined') === 'true')
    {
      this.props.history.replace("/");
    }
  }
  componentWillUpdate() {
    if(localStorage.getItem('isLogined') === 'true')
    {
      this.props.history.replace("/");
    }
  }
  componentWillMount() {
    if(localStorage.getItem('isLogined') === 'true')
    {
      this.props.history.replace("/");
    }
  }

  //reset Stage use to clear prompt after pressing login
  resetState = () => {
    this.setState({
      fields: {
        username: "",
        password: ""
      },
      fieldErrors: {}
    });
  };

  handleOnChange = event => {
    const fields = stores.state.fields;
    fields[event.target.name] = event.target.value;
    console.log(stores.state.fields[event.target.name] + " change to " + event.target.value)
    this.setState(() => ({
      fields
    }));
  };

  //validate block empty input and add to fieldErrors
  validate = () => {
    let notError = true;
    const user = stores.state.fields;
    const fieldErrors = {
      usernameError:        '',
      fullnameError:        '',
    };
    if (user.username === '') {
      notError = false;
      fieldErrors.usernameError = "Username is required !!";
    }
    if (user.password === '') {
      notError = false;
      fieldErrors.passwordError = "Password is required !!";
    }    
    this.setState({
      fieldErrors
    });
    return notError
  };

  //handle submit doesn't do anything beside validate for now
  handleSubmit = (evt) => {
    evt.preventDefault();
    const notError = this.validate();
    if (notError === true) {
      const isComplete = stores.loginAPI;
      if (isComplete)
      {
        this.props.history.replace("/");
        this.setState({
          isLogined: true
        })
      }else {
        this.setState({
          isLogined: false
        })
      }
      // axios.post('http://localhost:3000/api/version1/users/signIn', {
      //   username: this.state.fields.username,
      //   password: this.state.fields.password
      // })
      // .then(function (response) {
      //   if(response.data.errorCode === 0) {
      //     console.log(response);
      //     const { isLogined } = this.state
      //     localStorage.setItem('isLogined', 'true');
      //     localStorage.setItem('tokenUser', response.data.result.token);
      //   }else {
      //     console.log(response);
      //     localStorage.setItem('isLogined', 'false');
      //   }
      // })

      // if (localStorage.getItem('isLogined') === 'true')
      // {
      //   this.setState({
      //     isLogined: true
      //   })
      //   this.props.history.replace("/");
      // }else {
      //   this.setState({
      //     isLogined: false
      //   })
      // }
    };
  }

  render() {
    return (
      <Login
        onSubmit={this.handleSubmit}
        fields={this.state.fields}
        onChange={this.handleOnChange}
        fieldErrors={this.state.fieldErrors}
        isLogined={this.state.isLogined}
      />
    );
  }
}

export default observer(LoginContainer);
