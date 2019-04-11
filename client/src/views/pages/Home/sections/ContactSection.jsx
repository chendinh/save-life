import React, {Component, Fragment} from 'react';
//** Import file */
import "../css/ContactSection.css";
import TitleSection from "./TitleSection.jsx";
import ContactForm from "./ContactForm.jsx";
import MapSection from "./MapSection.jsx";

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        inputText: "",
        inputEmail: "",
      },
      fieldErrors: {
        inputTextError: "",
        inputEmailError: "",
      }
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  handleOnChange = event => {
    const fields = this.state.fields;
    fields[event.target.name ] = event.target.value;

    this.setState(() => ({
      fields
    }));
  };
  validateEmail= (inputEmail) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputEmail).toLowerCase());
  } 
  validate = () => {
    let notError = true;
    let fields = this.state.fields;
    const fieldErrors= {
      inputTextError: "",
      inputEmailError: "",
    }
    if (fields.inputText === "") {
      notError = false;
      fieldErrors.inputTextError = "Message required";
    }
    if (!this.validateEmail(fields.inputEmail)) {
      notError = false;
      fieldErrors.inputEmailError = "Invalid Email";
    }

    this.setState({
      fieldErrors
    });
    return notError;
  }

  handleOnClickSendMessage = () => {
    const notError = this.validate();
    if (notError === true) {
      this.props.history.replace("/login");
    } else {
      console.log("Can not send message  !");
      console.log("this errors are :", this.state.fieldErrors);
    }
  };
  render() {
    //let { handleOnChange, fields, fieldErrors, handleOnClickSendMessage} = this.props;
    let { fieldErrors } = this.state;
    return (
      <Fragment>
          <TitleSection kind="contact"/>
          <div className="error-inform-big-device">{fieldErrors.inputTextError}</div>
          <div className="error-inform-big-device">{fieldErrors.inputEmailError}</div>
          <div className="ContactSection-Container">
            <MapSection/>
            <div className="error-inform-small-device">{fieldErrors.inputTextError}</div>
            <div className="error-inform-small-device">{fieldErrors.inputEmailError}</div>
            <ContactForm 
              handleOnChange={this.handleOnChange}
              handleOnClickSendMessage={this.handleOnClickSendMessage}
            />
          </div>
      </Fragment>
    );
  }
}

export default ContactSection;