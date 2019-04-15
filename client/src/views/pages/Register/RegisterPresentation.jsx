import React, {Component, Fragment} from 'react';
import Navbar from "./sections/Navbar.jsx";
import RegisterStyle from "./RegisterStyle.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import RoleSelect from "../../Wigets/RoleSelect.jsx";

class RegisterPresentation extends Component {
  render() {
    let { classes, fieldErrors } = this.props;
    const Title = () => (
      <div id="status" className={classes.Title}>
        Sign Up
      </div>
    )

    const Label = props => (
      <label className={classes.Label}>
        {props.content}
      </label>
    )

    const CustomButton = props => (
      <Button 
        className={classes.CustomButton}
        onClick={props.onClick}
        onSubmit={props.onClick}
      >
        {props.content}
      </Button>
    )
    return(
      <Fragment>
        <Navbar/>
         {/* This is Background */}
         <div
          name='background'
          className={classes.pageHeader}
        >
          {/* This is Container */}
          <div
            name='Container-'
            className={classes.Container}
          >
            <Title/>
            {/* <p style={{ color: 'white' }}>
              {
                fieldErrors.usernameError 
                  ? fieldErrors.usernameError
                  : fieldErrors.passwordError 
                    ? fieldErrors.passwordError : null
                    // : isLogined === false 
                    //   ? "Username/Password is invalid"
                      // : ""
              }
            </p> */}
            <form>
              <div className={classes.InputBox}>
                <Label content="Username"/>
                <input
                  name="username"
                  type="text"
                  placeholder=""
                  value={this.props.fields.username}
                  onChange={this.props.onChange}
                  className={classes.Input}
                />
              </div>
              <div className={classes.InputBox}>
                <Label content="Password"/>
                <input
                  name="password"
                  type="password"
                  onChange={this.props.onChange}
                  value={this.props.fields.password}
                  placeholder=""
                  className={classes.Input}
                /> 
              </div>
              <div className={classes.InputBox}>
                <Label content="Personal Email"/>
                <input
                  name="email"
                  type="text"
                  onChange={this.props.onChange}
                  value={this.props.fields.email}
                  placeholder=""
                  className={classes.Input}
                /> 
              </div>
              <Label content="Your are"/>
              <RoleSelect
                genderIs={this.props.fields.role}
                labelText="Your are"
                handleOnClickDonor={this.props.handleOnClickDonor}
                handleOnClickCompany={this.props.handleOnClickCompany}
                textError={fieldErrors.roleError}
              />
            </form>
            <br/>
            <CustomButton content="Register"
              onClick={this.props.onSubmit}
            />
            {/* <OrIcon className={classes.IconOr}/> */}
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <div 
                style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} 
                className="fb-login-button" 
                data-width="300px" 
                data-max-rows="10" 
                data-size="large" 
                data-button-type="login_with" 
                data-show-faces="true" 
                data-auto-logout-link="true" 
                data-use-continue-as="true">
              </div>
            </div> */}
            {/* <CustomButton content="Login With Facebook"/> */}
          </div>
          
        </div>
      </Fragment>
    )
  }
}
export default withStyles(RegisterStyle)(RegisterPresentation);