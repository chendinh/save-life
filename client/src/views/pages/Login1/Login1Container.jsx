import React from "react";

//local component
import Login1 from "./Login1.jsx";
//@material-ui components


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        password: ""
      },
      fieldErrors: {}
    };
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

  handleOnChange = ({ name, value, error }) => {
    console.log(name + " has changed to " + value + " with error " + error);

    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState(() => ({
      fields,
      fieldErrors
    }));
  };

  //validate block empty input and add to fieldErrors
  validate = () => {
    const user = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
    if (!user.username) return false;
    if (!user.password) return false;
    if (errMessages.length) return false;

    return true;
  };

  //handle submit doesn't do anything beside validate for now
  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.validate()) return;
    console.log("submitting");
    // TODO
    this.resetState();
    return;
  };

  render() {
    return (
      <Login1
        onvalidate={this.validate}
        onSubmit={this.handleSubmit}
        fields={this.state.fields}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default Container;
