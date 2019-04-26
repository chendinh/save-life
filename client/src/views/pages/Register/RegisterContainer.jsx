import React, {Component} from 'react';
import RegisterPresentation from "./RegisterPresentation.jsx";
import axios from 'axios';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        password: "",
        role: "",
        email: "",
      },
      fieldErrors: {
        usernameError: null,
        passwordError: null,
        roleError: null,
        emailError: null,
      },
    };
  }

  handleOnChange = event => {
    const fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    console.log(fields[event.target.name] + " change to " + event.target.value)
    this.setState(() => ({
      fields
    }));
  };

  validate = () => {
    let notError = true;
    const user = this.state.fields;
    const fieldErrors = {
      usernameError: null,
      passwordError: null,
      roleError: null,
      emailError: null,
    };
    if (user.username === '') {
      notError = false;
      fieldErrors.usernameError = "Username is required !!";
    }
    if (user.password === '') {
      notError = false;
      fieldErrors.passwordError = "Password is required !!";
    }    
    if (user.password === '') {
      notError = false;
      fieldErrors.roleError = "Role is required !!";
    }    
    if (user.password === '') {
      notError = false;
      fieldErrors.emailError = "Email is required !!";
    }    
    this.setState({
      fieldErrors
    });
    return notError
  };

  handleOnClickDonor = () => {
    const fields = this.state.fields;
    fields["role"] = "GUEST";
    this.setState(() => ({
      fields,
    }));
  }

  handleOnClickCompany = () => {
    const fields = this.state.fields;
    fields["role"] = "COMPANY";
    this.setState(() => ({
      fields,
    }));
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state)
    const notError = this.validate();
    if (notError === true) {
      axios.post('http://localhost:3000/api/version1/users/register', {
        username: this.state.fields.username,
        password: this.state.fields.password,
        email: this.state.fields.email,
        role: this.state.fields.role,
      },{
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(function (response) {
        if(response.data.errorCode === 0) {
          console.log(response);

        }else {
          console.log(response);
        }
      })
    }else {
      console.log("wrong register");
    }
  }

  render() {
    return(
      <RegisterPresentation
        onSubmit={this.handleSubmit}
        handleOnClickDonor={this.handleOnClickDonor}
        handleOnClickCompany={this.handleOnClickCompany}
        fields={this.state.fields}
        onChange={this.handleOnChange}
        fieldErrors={this.state.fieldErrors}
      />
    )
  }
}
export default RegisterContainer;
